'use client';

import { Table } from 'antd';
import type { TableProps } from 'antd';
import React from 'react';
import styles from './SystemGeneratedTable.module.scss';
import { SystemGeneratedTablePropsInterface } from './interfaces/system-generated-table.interface';
import { manualBackupTableDummy } from './systemdummy/system-generated-table-dummy';

const columns: TableProps<SystemGeneratedTablePropsInterface>['columns'] = [
  {
    dataIndex: 'Created',
    key: 'created',
    title: 'Created',
    width: '25%',
  },
  {
    dataIndex: 'Expiry',
    key: 'expiry',
    title: 'Expiry',
    width: '25%',
  },
  {
    dataIndex: 'Note',
    key: 'note',
    title: 'Note',
    width: '25%',
  },
  {
    dataIndex: 'Restore',
    key: 'restore',
    title: 'Restore',
    width: '25%',
  },
];

const SystemGeneratedTable = () => {
  return (
    <div className={styles.tableWrapper}>
      <Table<SystemGeneratedTablePropsInterface>
        columns={columns}
        dataSource={manualBackupTableDummy}
        pagination={false}
        locale={{ emptyText: 'System backups will appear here.' }}
      />
    </div>
  );
};

export default SystemGeneratedTable;
