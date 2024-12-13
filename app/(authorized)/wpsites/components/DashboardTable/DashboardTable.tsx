'use client';

import { Table } from 'antd';
import type { TableColumnsType } from 'antd';
import React, { useState } from 'react';
import styles from './DashboardTable.module.scss';
import { DashboardTablePropsInterface } from './interfaces/dashboard-table-props.interface';
import BaseApi from '@/app/api/BaseApi';
import useSWR from 'swr';

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
    dataIndex: 'phpVersion',
  },
  {
    title: 'WP version',
    dataIndex: 'version',
  },
];

const DashboardTable = () => {
  const [selectionType] = useState<'checkbox'>('checkbox');

  const fetcher = (url: string) =>
    BaseApi.get(url).then((response) => {
      return response.data;
    });

  const { data: tableData } = useSWR<DashboardTablePropsInterface[]>(
    '/setup/wordpress',
    fetcher,
  );

  return (
    <div className={styles.tableWrapper}>
      <Table<DashboardTablePropsInterface>
        rowSelection={{ type: selectionType }}
        columns={columns}
        dataSource={tableData}
        pagination={false}
        scroll={{ x: 'max-content' }}
      />
    </div>
  );
};

export default DashboardTable;
