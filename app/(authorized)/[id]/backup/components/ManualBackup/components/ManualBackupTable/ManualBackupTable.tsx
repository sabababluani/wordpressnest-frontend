'use client';

import React, { useState } from 'react';
import { Modal, Progress, Table, Select, TableProps } from 'antd';
import Image from 'next/image';
import styles from './ManualBackupTable.module.scss';
import { ManualBackupTablePropsInterface } from './interfaces/manual-backup-table-props.interface';
import DailyBackupModal from '../../../DailyBackup/components/DailyBackupModal/DailyBackupModal';
import RevokeModal from '@/app/components/RevokeModal/RevokeModal';
import ManualBackupCreateModal from '../ManualBackupCreateModal/ManualBackupCreateModal';
import Button from '@/app/components/Button/Button';
import { useGetData } from '@/app/hooks/useGetData';
import { deleteData, updateData } from '@/app/api/crudService';
import { useParams } from 'next/navigation';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { ProgressPropsInterface } from './interfaces/progress-props.interface';

const ManualBackupTable = () => {
  const { id } = useParams();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [selectedBackupId, setSelectedBackupId] = useState<number | null>(null);
  const [isCreateModalActive, setIsCreateModalActive] = useState(false);
  const [numberId, setNumberId] = useState(0);
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState('');

  const { data: manualBackUp, mutate: mutateManualBackup } = useGetData<
    ManualBackupTablePropsInterface[]
  >({
    endpoint: `backup/manuallimit/${id}`,
  });

  const { data: lineProgress, mutate: mutateProgress } =
    useGetData<ProgressPropsInterface>({
      endpoint: `/backup/percent/${id}`,
    });

  const handleDeleteBackup = async () => {
    if (!selectedBackupId) return;
    setLoading(true);
    try {
      await deleteData('backup/deletefrompod', selectedBackupId.toString());
      await Promise.all([mutateManualBackup(), mutateProgress()]);
      closeDeleteModal();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleRestoreBackup = async () => {
    setLoading(true);
    try {
      await updateData('backup/restoreFromPod', numberId);
      await Promise.all([mutateManualBackup(), mutateProgress()]);
      closeRestoreModal();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const openDeleteModal = (backupId: number) => {
    setSelectedBackupId(backupId);
    setIsDeleteModalVisible(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalVisible(false);
    setSelectedBackupId(null);
  };

  const openRestoreModal = (id: number, createdAt: string) => {
    setNumberId(id);
    setDate(createdAt);
    setIsModalVisible(true);
  };

  const closeRestoreModal = () => setIsModalVisible(false);

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
          value="Restore To"
          options={[
            {
              value: 'live',
              label: (
                <div className={styles.option}>
                  <div className={styles.dot}></div>
                  <span>Live</span>
                </div>
              ),
            },
          ]}
          onChange={(value) =>
            value === 'live' &&
            openRestoreModal(record.id, record.formatedCreatedAt)
          }
        />
      ),
      width: '25%',
    },
    {
      title: 'Delete',
      key: 'delete',
      render: (_, record) => (
        <Image
          src="/icons/trash.svg"
          alt="delete"
          width={24}
          height={24}
          className={styles.trash}
          onClick={() => openDeleteModal(record.id)}
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
            {lineProgress?.existingBackupsleangth &&
              lineProgress?.maximum &&
              lineProgress?.percent && (
                <>
                  <p>
                    {lineProgress?.existingBackupsleangth} of{' '}
                    {lineProgress?.maximum}
                  </p>{' '}
                  <div className={styles.progress}>
                    <Progress
                      percent={lineProgress?.percent}
                      showInfo={false}
                    />
                  </div>
                </>
              )}
          </div>
          <Button
            backgroundColor={buttonbackgroundColorEnum.black}
            innerContent="Create backup"
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
        onCancel={closeRestoreModal}
        footer={null}
        closable={false}
        centered
      >
        <DailyBackupModal
          onClose={closeRestoreModal}
          onSuccess={handleRestoreBackup}
          loading={loading}
          setLoading={setLoading}
          date={date}
          backupType="Manual backup"
        />
      </Modal>

      <Modal
        width={840}
        open={isDeleteModalVisible}
        onCancel={closeDeleteModal}
        footer={null}
        closable={false}
      >
        <RevokeModal
          onClose={closeDeleteModal}
          headline="Are you sure to delete backup?"
          content="This action cannot be undone."
          buttonText="Delete backup"
          onSuccess={handleDeleteBackup}
          loading={loading}
          setLoading={setLoading}
        />
      </Modal>

      <Modal
        width={840}
        open={isCreateModalActive}
        onCancel={() => setIsCreateModalActive(false)}
        footer={null}
        closable={false}
      >
        <ManualBackupCreateModal
          onClose={() => setIsCreateModalActive(false)}
          mutate={mutateManualBackup}
          mutateProgress={mutateProgress}
          loading={loading}
          setLoading={setLoading}
        />
      </Modal>
    </>
  );
};

export default ManualBackupTable;
