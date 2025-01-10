'use client';

import { Modal, Progress, Table } from 'antd';
import { Select, TableProps } from 'antd';
import Image from 'next/image';
import React, { useState } from 'react';
import styles from './ManualBackupTable.module.scss';
import { ManualBackupTablePropsInterface } from './interfaces/manual-backup-table-props.interface';
import DailyBackupModal from '../../../DailyBackup/components/DailyBackupModal/DailyBackupModal';
import { useGetData } from '@/app/hooks/useGetData';
import { deleteData } from '@/app/api/crudService';
import RevokeModal from '@/app/components/RevokeModal/RevokeModal';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import Button from '@/app/components/Button/Button';
import ManualBackupCreateModal from '../ManualBackupCreateModal/ManualBackupCreateModal';

const ManualBackupTable = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRestoreOption, setSelectedRestoreOption] =
    useState('Restore To');
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [selectedBackupId, setSelectedBackupId] = useState<string | null>(null);
  const [isCreateModalActive, setIsCreateModalActive] = useState(false);

  const { data: manualBackUp, mutate } = useGetData<
    ManualBackupTablePropsInterface[]
  >({
    endpoint: 'backup/manualLimited',
  });

  const onHandleManualBackupDelete = async () => {
    if (!selectedBackupId) return;
    try {
      await deleteData('backup/deleteBackupFromPod', selectedBackupId);
      mutate();
      setIsDeleteModalVisible(false);
      setSelectedBackupId(null);
    } catch (error) {
      console.log(error);
    }
  };

  const columns: TableProps<ManualBackupTablePropsInterface>['columns'] = [
    {
      title: 'Created',
      dataIndex: 'createdAt',
      key: 'createdAt',
      width: '20%',
    },
    {
      title: 'Expiry',
      dataIndex: 'expiry',
      key: 'expiry',
      width: '15%',
    },
    {
      title: 'Note',
      dataIndex: 'note',
      key: 'note',
      width: '15%',
    },
    {
      title: 'Restore',
      key: 'restore',
      render: () => (
        <Select
          className={styles.select}
          value={selectedRestoreOption}
          options={[{ value: 'live', label: 'Live' }]}
          onChange={(value) => {
            if (value === 'live') {
              setIsModalVisible(true);
            }
          }}
        />
      ),
      width: '25%',
    },
    {
      title: 'Delete',
      key: 'delete',
      render: (_, record) => (
        <Image
          src={'/icons/trash.svg'}
          alt={'delete'}
          width={24}
          height={24}
          className={styles.trash}
          onClick={() => {
            setSelectedBackupId(record.id.toString());
            setIsDeleteModalVisible(true);
          }}
        />
      ),
    },
  ];

  const handleModalClose = () => {
    setIsModalVisible(false);
    setSelectedRestoreOption('Restore To');
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.wrapperContainer}>
          <h1>Manual Backup</h1>
          <p>
            You can create up to 5 manual backups. Each manual backup will be
            stored for 14 days. Created Expiry Note Restore Delete
          </p>
        </div>
        <div className={styles.container}>
          <div className={styles.progressContainer}>
            <p>{manualBackUp?.length} to 5</p>
            <div className={styles.progress}>
              <Progress percent={30} showInfo={false} />
            </div>
          </div>
          <Button
            backgroundColor={buttonbackgroundColorEnum.black}
            innerContent={'Add Domains'}
            onClick={() => setIsCreateModalActive(true)}
          />
        </div>
      </div>
      <div className={styles.tableWrapper}>
        <Table<ManualBackupTablePropsInterface>
          columns={columns}
          dataSource={manualBackUp}
          pagination={false}
          locale={{ emptyText: 'Manual backups will appear here.' }}
        />
      </div>
      <Modal
        width={840}
        open={isModalVisible}
        onCancel={handleModalClose}
        footer={null}
        closable={false}
      >
        <DailyBackupModal onClose={handleModalClose} />
      </Modal>
      <Modal
        width={840}
        onCancel={() => setIsDeleteModalVisible(false)}
        open={isDeleteModalVisible}
        footer={null}
        closable={false}
      >
        <RevokeModal
          onClose={() => setIsDeleteModalVisible(false)}
          headline={'Are you sure to delete backup?'}
          content={'This action cannot be undone.'}
          buttonText={'Delete backup'}
          onSuccess={onHandleManualBackupDelete}
        />
      </Modal>
      <Modal
        open={isCreateModalActive}
        onCancel={() => setIsCreateModalActive(false)}
        footer={false}
        closable={false}
        width={840}
      >
        <ManualBackupCreateModal
          onClose={() => setIsCreateModalActive(false)}
          mutate={mutate}
        />
      </Modal>
    </>
  );
};

export default ManualBackupTable;
