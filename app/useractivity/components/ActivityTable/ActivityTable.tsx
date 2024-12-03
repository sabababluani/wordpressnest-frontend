'use client';
import React from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import styles from './ActivityTable.module.scss';
import Image from 'next/image';

interface TableData {
  key: string;
  user: string;
  action: string;
  time: number;
  status: string;
}

const data: TableData[] = [
  {
    key: '1',
    user: 'Beqa Jikurishvili (me)',
    action: 'Edge cache in the live environment of tamoskin',
    time: 302,
    status: 'fail',
  },
  {
    key: '2',
    user: 'Beqa Jikurishvili (me)',
    action: 'create draft migration',
    time: 302,
    status: 'success',
  },
  {
    key: '3',
    user: 'Beqa Jikurishvili (me)',
    action: 'cancel migration',
    time: 302,
    status: 'success',
  },
  {
    key: '3',
    user: 'Beqa Jikurishvili (me)',
    action: 'cancel migration',
    time: 302,
    status: 'success',
  },
];

const columns: ColumnsType<TableData> = [
  {
    title: 'User',
    dataIndex: 'user',
    key: 'user',
    width: '25%',

    render: (user: string) => (
      <div className={styles.userCell}>
        <Image
          src="/grandpa.png"
          alt="User Avatar"
          width={32}
          height={32}
          className={styles.avatar}
        />
        <span className={styles.username}>{user}</span>
      </div>
    ),
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    width: '40%',
  },
  {
    title: 'Time',
    dataIndex: 'time',
    key: 'time',
    width: '25%',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status) =>
      status === 'success' ? (
        <Image
          src="/icons/succesfull.svg"
          width={24}
          height={24}
          alt="success"
        />
      ) : (
        <Image src="/icons/fail.svg" width={24} height={24} alt="fail" />
      ),
  },
];

const ActivityTable: React.FC = () => {
  return (
    <div className={styles.container}>
      <Table dataSource={data} columns={columns} pagination={false} />
    </div>
  );
};

export default ActivityTable;
