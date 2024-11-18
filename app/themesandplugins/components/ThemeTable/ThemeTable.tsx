'use client';

import type { TableColumnsType } from 'antd';
import { Table } from 'antd';
import React, { useState } from 'react';
import styles from '@/app/domains/components/DomainsTable/DomainsTable.module.scss'
import Button from "@/app/components/Button/Button";
import {buttonbackgroundColorEnum} from "@/app/components/Button/enum/button.enum";

interface PluginData {
  key: string;
  name: string;
  status: string;
  installed: string;
  latest: string;
}

const columns: TableColumnsType<PluginData> = [
  {
    title: 'Themes',
    dataIndex: 'name',
    className: 'no-left-border',
    width: '30%',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    width: '15%',
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
    title: 'Installed',
    dataIndex: 'installed',
    width: '15%',
  },
  {
    title: 'Latest',
    dataIndex: 'latest',
    width: '15%',
  },
  {
    title: '',
    dataIndex: '',
    render: () => (
      <div className={styles.buttons}>
        <Button
          backgroundColor={buttonbackgroundColorEnum.black}
          innerContent={'Update'}
        />
      </div>
    ),
  },
];

const data: PluginData[] = [
  {
    key: '1',
    name: 'Plugin One',
    status: 'Active',
    installed: '1.0.0',
    latest: '1.1.0',
  },
  {
    key: '2',
    name: 'Plugin Two',
    status: 'Inactive',
    installed: '1.2.0',
    latest: '1.3.0',
  },
];

const ThemeTable: React.FC = () => {
  const [selectionType] = useState<'checkbox'>('checkbox');

  return (
    <div className={styles.tableWrapper}>
      <Table<PluginData>
        rowSelection={{ type: selectionType }}
        columns={columns}
        dataSource={data}
        pagination={false}
        scroll={{ x: 'max-content' }}
      />
    </div>
  );
};

export default ThemeTable;
