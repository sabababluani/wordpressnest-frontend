'use client';

import { Modal, Progress, Table } from 'antd';
import { Select, TableProps } from 'antd';
import Image from 'next/image';
import React, { useState } from 'react';
import styles from './ManualBackupTable.module.scss';
import { ManualBackupTablePropsInterface } from './interfaces/manual-backup-table-props.interface';
import DailyBackupModal from '../../../DailyBackup/components/DailyBackupModal/DailyBackupModal';
import { useGetData } from '@/app/hooks/useGetData';
import { deleteData, updateData } from '@/app/api/crudService';
import RevokeModal from '@/app/components/RevokeModal/RevokeModal';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import Button from '@/app/components/Button/Button';
import ManualBackupCreateModal from '../ManualBackupCreateModal/ManualBackupCreateModal';
import { useParams } from 'next/navigation';
import { ProgressPropsInterface } from './interfaces/progress-props.interface';

const ManualBackupTable = () => {
  const { id } = useParams();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [selectedBackupId, setSelectedBackupId] = useState<string | null>(null);
  const [isCreateModalActive, setIsCreateModalActive] = useState(false);
  const [numberId, setNumberId] = useState<number>(0);

  const { data: manualBackUp, mutate: mutateManualBackup } = useGetData<
    ManualBackupTablePropsInterface[]
  >({
    endpoint: `backup/manualLimited/${id}`,
  });

  const { data: lineProgress, mutate: mutateProgress } =
    useGetData<ProgressPropsInterface>({
      endpoint: `/backup/percent/${id}`,
    });

  const onHandleManualBackupDelete = async () => {
    if (!selectedBackupId) return;
    try {
      await deleteData('backup/deleteBackupFromPod', selectedBackupId);
      mutateManualBackup();
      mutateProgress();
      setIsDeleteModalVisible(false);
      setSelectedBackupId(null);
    } catch (error) {
      console.log(error);
    }
  };

  const onHandleRestore = async () => {
    try {
      await updateData('backup/restoreFromPod', numberId);
      mutateManualBackup();
      mutateProgress();
      setIsModalVisible(false);
    } catch (error) {
      console.log(error);
    }
  };

  const columns: TableProps<ManualBackupTablePropsInterface>['columns'] = [
    {
      title: 'Created',
      dataIndex: 'formatedCreatedAt',
      key: 'createdAt',
      width: '20%',
    },
    {
      title: 'Expiry',
      dataIndex: 'expiry',
      key: 'expiry',
      width: '20%',
    },
    {
      title: 'Note',
      dataIndex: 'note',
      key: 'note',
      width: '25%',
    },
    {
      title: 'Restore',
      key: 'restore',
      render: (_, record) => (
        <Select
          className={styles.select}
          value={'Restore To'}
          options={[{ value: 'live', label: 'Live' }]}
          onChange={(value) => {
            if (value === 'live') {
              setIsModalVisible(true);
              setNumberId(record.id);
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
      width: '10%',
    },
  ];

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.wrapperContainer}>
          <h1>Manual Backup</h1>
          <p>
            You can create up to {lineProgress?.maximum} manual backups. Each
            manual backup will be stored for 14 days.
          </p>
        </div>
        <div className={styles.container}>
          <div className={styles.progressContainer}>
            <p>
              {lineProgress?.existingBackupsleangth} of {lineProgress?.maximum}
            </p>
            <div className={styles.progress}>
              <Progress percent={lineProgress?.percent} showInfo={false} />
            </div>
          </div>
          <Button
            backgroundColor={buttonbackgroundColorEnum.black}
            innerContent={'Create backup'}
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
        onCancel={() => setIsModalVisible(false)}
        footer={null}
        closable={false}
      >
        <DailyBackupModal
          onClose={() => setIsModalVisible(false)}
          onSuccess={onHandleRestore}
        />
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
          mutate={mutateManualBackup}
          mutateProgress={mutateProgress}
        />
      </Modal>
    </>
  );
};

export default ManualBackupTable;
