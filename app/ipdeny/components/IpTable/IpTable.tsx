'use client';

import { Table } from 'antd';
import type { TableColumnsType } from 'antd';
import Image from 'next/image';
import React, { useState } from 'react';
import styles from '../../page.module.scss';

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

const data: IpTablePropsInterface[] = [
  {
    Ipaddresses:
      '127.0.0.\n' + '128.0.0.1/32\n' + '2001:0sxd/5420/46.4+6.5615n/00',
    Date: '11.26.2024/13:14',
  },
  {
    Ipaddresses:
      '127.0.0.\n' + '128.0.0.1/32\n' + '2001:0sxd/5420/46.4+6.5615n/00',
    Date: '11.26.2024/14:15',
  },
  {
    Ipaddresses:
      '127.0.0.\n' + '128.0.0.1/32\n' + '2001:0sxd/5420/46.4+6.5615n/00',
    Date: '11.26.2024/15:16',
  },
  {
    Ipaddresses:
      '127.0.0.\n' + '128.0.0.1/32\n' + '2001:0sxd/5420/46.4+6.5615n/00',
    Date: '11.26.2024/16:17',
  },
];

const IpTable: React.FC = () => {
  const [selectionType] = useState<'checkbox'>('checkbox');

  return (
    <div className={styles.tableWrapper}>
      <Table<IpTablePropsInterface>
        rowSelection={{ type: selectionType }}
        columns={columns}
        dataSource={data}
        pagination={false}
        rowKey="Ipaddresses"
      />
    </div>
  );
};

export default IpTable;
