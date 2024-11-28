'use client';

import { Table } from 'antd';
import type { TableColumnsType } from 'antd';
import React, { useEffect, useState } from 'react';
import styles from './DashboardTable.module.scss';
import { DashboardTablePropsInterface } from './interfaces/dashboard-table-props.interface';
import BaseApi from '@/app/api/BaseApi';

const columns: TableColumnsType<DashboardTablePropsInterface> = [
  {
    title: 'Name ',
    dataIndex: 'siteTitle',
    className: 'no-left-border',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    render: (status: string) => (
      <div
        className={
          status === 'Active'
            ? styles.activeStatus
            : status === 'Inactive'
            ? styles.inactiveStatus
            : ''
        }
      >
        <span
          className={
            status === 'Active'
              ? styles.greenDot
              : status === 'Inactive'
              ? styles.redDot
              : ''
          }
        ></span>
        <span className={styles.status}>{status}</span>
      </div>
    ),
  },
  {
    title: 'Visit',
    dataIndex: 'visit',
  },
  {
    title: 'Bandwidth',
    dataIndex: 'bandwidth',
  },
  {
    title: 'Disk Usage',
    dataIndex: 'diskUsage',
  },
  {
    title: 'PHP',
    dataIndex: 'php',
  },
  {
    title: 'WP version',
    dataIndex: 'Wpversion',
  },
];

const App: React.FC = () => {
  const [selectionType] = useState<'checkbox'>('checkbox');
  const [data, setData] = useState<DashboardTablePropsInterface[]>([]);

  useEffect(() => {
    BaseApi.get('/setup/wordpress').then((response) => {
      setData(response.data);
    });
  }, []);

  console.log(data);
  
  return (
    <div className={styles.tableWrapper}>
      <Table<DashboardTablePropsInterface>
        rowSelection={{ type: selectionType }}
        columns={columns}
        dataSource={data}
        pagination={false}
        scroll={{ x: 'max-content' }}
      />
    </div>
  );
};

export default App;
