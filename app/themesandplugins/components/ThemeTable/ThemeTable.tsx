'use client';

import type { TableColumnsType } from 'antd';
import { Table } from 'antd';
import React, { useState } from 'react';
import styles from '@/app/domains/components/DomainsTable/DomainsTable.module.scss';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { PluginDataPropsInterface } from '../PluginTable/interfaces/plugin-table.interfaces';
import { pluginData } from '../PluginTable/dummy-data/plugin-dummy-data';

const columns: TableColumnsType<PluginDataPropsInterface> = [
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

const ThemeTable: React.FC = () => {
  const [selectionType] = useState<'checkbox'>('checkbox');

  return (
    <div className={styles.tableWrapper}>
      <Table<PluginDataPropsInterface>
        rowSelection={{ type: selectionType }}
        columns={columns}
        dataSource={pluginData}
        pagination={false}
        scroll={{ x: 'max-content' }}
      />
    </div>
  );
};

export default ThemeTable;
