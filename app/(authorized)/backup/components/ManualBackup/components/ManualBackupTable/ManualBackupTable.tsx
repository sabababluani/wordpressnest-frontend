'use client';

import { Table } from 'antd';
import type { TableProps } from 'antd';
import Image from 'next/image';
import React from 'react';
import styles from './ManualBackupTable.module.scss';
import { ManualBackupTablePropsInterface } from './interfaces/manual-backup-table-props.interface';
import { manualBackupTableDummy } from './dummy-data/manual-backup-table';
import DailyBackupSelect from '../../../DailyBackup/components/DailyBackupSelect/DailyBackupSelect';

const columns: TableProps<ManualBackupTablePropsInterface>['columns'] = [
  {
    title: (
      <div className={styles.title}>
        <Image
          src={'/icons/calendar.svg'}
          alt={'calendar'}
          width={24}
          height={24}
        />
        <span>Date</span>
      </div>
    ),
    dataIndex: 'dateTime',
    key: 'dateTime',
    width: '50%',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status) => (
      <div className={styles.activeStatus}>
        <span className={styles.greenDot}></span>
        <span className={styles.status}>{status}</span>
      </div>
    ),
    width: '25%',
  },
  {
    title: 'Restore',
    key: 'restore',
    render: () => <DailyBackupSelect />,
    width: '25%',
  },
];

const ManualBackupTable: React.FC = () => {
  return (
    <div className={styles.tableWrapper}>
      <Table<ManualBackupTablePropsInterface>
        columns={columns}
        dataSource={manualBackupTableDummy}
        pagination={false}
      />
    </div>
  );
};

export default ManualBackupTable;
