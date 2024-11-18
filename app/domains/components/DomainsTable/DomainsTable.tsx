'use client';

import { Table } from 'antd';
import type { TableColumnsType } from 'antd';
import Image from 'next/image';
import React, { useState } from 'react';
import styles from './DomainsTable.module.scss';
import { DomainsTablePropsInterface } from '../interfaces/domains-table-props.interface';
import { domainsDummy } from './domainsdummy/domains-dummy-data';

const columns: TableColumnsType<DomainsTablePropsInterface> = [
  {
    title: 'Name',
    dataIndex: 'plugin',
    render: (text: string, record) => (
      <div className={record.isPrimary ? styles.primaryLabel : ''}>
        {text}
        {record.isPrimary && <div className={styles.primaryTag}>Primary</div>}
      </div>
    ),
  },
  {
    title: 'Status',
    dataIndex: 'status',
    render: (status: number) => (
      <div
        className={status === 1 ? styles.activeStatus : styles.inactiveStatus}
      >
        <span className={status === 1 ? styles.greenDot : styles.redDot}></span>
        <span className={styles.status}>
          {status === 1 ? 'Active' : 'Disconnected'}
        </span>
      </div>
    ),
  },
  {
    title: 'Action',
    dataIndex: 'address',
    render: () => (
      <div className={styles.dotsWrapper}>
        <Image src={'/icons/3dots.svg'} alt={'3dots'} width={14} height={16} />
      </div>
    ),
  },
];

const DomainsTable: React.FC = () => {
  const [selectionType] = useState<'checkbox'>('checkbox');

  return (
    <div className={styles.tableWrapper}>
      <Table<DomainsTablePropsInterface>
        rowSelection={{ type: selectionType }}
        columns={columns}
        dataSource={domainsDummy}
        pagination={false}
        rowClassName={(record) => (record.isPrimary ? styles.primaryRow : '')}
      />
    </div>
  );
};

export default DomainsTable;
