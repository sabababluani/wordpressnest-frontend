'use client';

import React, { useState } from 'react';
import { Modal, Select, Table } from 'antd';
import type { TableProps } from 'antd';
import Image from 'next/image';
import styles from './DailyBackupTable.module.scss';
import { DailyBackupPropsInterface } from './interfaces/daily-backup-table-props.interface';
import DailyBackupModal from '../DailyBackupModal/DailyBackupModal';
import { useGetData } from '@/app/hooks/useGetData';

const DailyBackupTable = () => {
  const [isModalVisable, setIsModalVisable] = useState(false);
  const [date, setDate] = useState('');

  const { data: dailyBackups, isLoading } = useGetData<
    DailyBackupPropsInterface[]
  >({ endpoint: '/backup/daily' });

  const columns: TableProps<DailyBackupPropsInterface>['columns'] = [
    {
      title: (
        <div className={styles.title}>
          <Image
            src="/icons/calendar.svg"
            alt="calendar"
            width={24}
            height={24}
          />
          <span>Date & Time</span>
        </div>
      ),
      dataIndex: 'formatedCreatedAt',
      key: 'formatedCreatedAt',
      width: '85%',
    },
    {
      title: 'Restore',
      key: 'restore',
      width: '15%',
      render: (_, record) => (
        <Select
          className={styles.select}
          value={'Restore To'}
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
          onChange={(value) => {
            if (value === 'live') {
              setIsModalVisable(true);
              setDate(record.formatedCreatedAt);
            }
          }}
        />
      ),
    },
  ];

  return (
    <div className={styles.tableWrapper}>
      <Table<DailyBackupPropsInterface>
        columns={columns}
        dataSource={dailyBackups}
        pagination={false}
        rowKey={(record) => record.id}
        loading={isLoading}
        locale={{ emptyText: 'Daily backups will appear here.' }}
      />
      <Modal
        width={840}
        open={isModalVisable}
        onCancel={() => setIsModalVisable(false)}
        footer={null}
        closable={false}
      >
        <DailyBackupModal
          onClose={() => setIsModalVisable(false)}
          onSuccess={() => {}}
          date={date}
          backupType={'Daily backup'}
        />
      </Modal>
    </div>
  );
};

export default DailyBackupTable;
