'use client';

import { Table } from 'antd';
import type { TableColumnsType } from 'antd';
import Image from 'next/image';
import React from 'react';
import styles from '@/app/styles/shared-table.module.scss';
import { ipDenyData } from '../../dummy-data/ipdeny-data';
import { IpTablePropsInterface } from './interfaces/ip-table-props.interface';

const columns: TableColumnsType<IpTablePropsInterface> = [
  {
    title: 'IP Addresses',
    dataIndex: 'Ipaddresses',
    render: (text: string) => <div>{text}</div>,
    width: '40%',
  },
  {
    title: 'Date',
    dataIndex: 'Date',
    render: (text) => <div>{text}</div>,
    width: '40%',
  },
  {
    title: 'Action',
    dataIndex: 'address',
    render: () => (
      <div className={styles.actionbuttons}>
        <Image src={'/icons/edit.svg'} alt={'edit'} width={24} height={24} />
        <Image src={'/icons/trash.svg'} alt={'delete'} width={24} height={24} />
      </div>
    ),
    width: '20%',
  },
];

const IpTable = () => {
  return (
    <div className={styles.tableWrapper}>
      <Table<IpTablePropsInterface>
        rowSelection={{ type: 'checkbox' }}
        columns={columns}
        dataSource={ipDenyData}
        pagination={false}
        rowKey="Ipaddresses"
      />
    </div>
  );
};

export default IpTable;
