'use client';

import { Table } from 'antd';
import type { TableColumnsType } from 'antd';
import Image from 'next/image';
import React, { useState } from 'react';
import styles from '../../../domains/components/DomainsTable/DomainsTable.module.scss';
import { ipDenyData } from '../../dummy-data/ipdeny-data';

interface IpTablePropsInterface {
  Ipaddresses: string;
  Date: string;
}

const columns: TableColumnsType<IpTablePropsInterface> = [
  {
    title: 'IP Addresses',
    dataIndex: 'Ipaddresses',
    render: (text: string) => <div>{text}</div>,
    width: 533,
  },
  {
    title: 'Date',
    dataIndex: 'Date',
    render: (text) => <div>{text}</div>,
    width: 573,
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
    width: 377,
  },
];

const IpTable: React.FC = () => {
  const [selectionType] = useState<'checkbox'>('checkbox');

  return (
    <div className={styles.tableWrapper}>
      <Table<IpTablePropsInterface>
        rowSelection={{ type: selectionType }}
        columns={columns}
        dataSource={ipDenyData}
        pagination={false}
        rowKey="Ipaddresses"
      />
    </div>
  );
};

export default IpTable;
