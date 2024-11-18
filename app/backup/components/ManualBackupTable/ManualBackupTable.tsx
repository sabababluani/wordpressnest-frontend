'use client';

import { Table } from 'antd';
import type { TableProps } from 'antd';
import Image from 'next/image';
import React from 'react';
import styles from './ManualBackupTable.module.scss';
import DailyBackupSelect from '../DailyBackupSelect/DailyBackupSelect';

interface DataType {
  key: string;
  dateTime: string;
  status: string;
}

const columns: TableProps<DataType>['columns'] = [
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
  },
  {
    title: 'Restore',
    key: 'restore',
    render: () => <DailyBackupSelect />,
  },
];

const data: DataType[] = [
  {
    key: '1',
    dateTime: 'Oct 16 , 2024 , 3 : 55 AM',
    status: 'Restored',
  },
  {
    key: '2',
    dateTime: 'Oct 16 , 2024 , 3 : 55 AM',
    status: 'Restored',
  },
];

const ManualBackupTable: React.FC = () => {
  return (
    <div className={styles.tableWrapper}>
      <Table<DataType> columns={columns} dataSource={data} pagination={false} />
    </div>
  );
};

export default ManualBackupTable;
