'use client';

import { Table } from 'antd';
import type { TableColumnsType } from 'antd';
import React, { useState } from 'react';
import styles from './DashboardTable.module.scss';
import { DashboardTableData } from './dummy/dashboard-table-dummy';
import { DashboardTablePropsInterface } from './interfaces/dashboard-table-props.interface';

const columns: TableColumnsType<DashboardTablePropsInterface> = [
  {
    title: 'Name ',
    dataIndex: 'name',
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

  return (
    <div className={styles.tableWrapper}>
      <Table<DashboardTablePropsInterface>
        rowSelection={{ type: selectionType }}
        columns={columns}
        dataSource={DashboardTableData}
        pagination={false}
        scroll={{ x: 'max-content' }}
      />
    </div>
  );
};

export default App;
