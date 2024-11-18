'use client';

import { Table } from 'antd';
import type { TableColumnsType } from 'antd';
import Image from 'next/image';
import React, { useState } from 'react';
import styles from '@/app/domains/components/DomainsTable/DomainsTable.module.scss';

interface UsersTablePropsInterface {
  userPhoto: string;
  name: string;
  email: string;
  role: string;
}

const columns: TableColumnsType<UsersTablePropsInterface> = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (_, record) => (
      <div className={styles.userContainer}>
        <Image
          src={record.userPhoto}
          alt={'User Photo'}
          width={48}
          height={48}
        />
        <div className={styles.userInfoWrapper}>
          <span className={styles.userName}>{record.name}</span>
          <span className={styles.userEmail}>{record.email}</span>
        </div>
      </div>
    ),
    width: 533,
  },
  {
    title: 'Role',
    dataIndex: 'role',
    render: (text) => <div>{text}</div>,
    width: 573,
  },
  {
    title: 'Actions',
    dataIndex: 'role',
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

  const data: UsersTablePropsInterface[] = [
    {
      userPhoto: '/man.png',
      name: 'Michael Johnson',
      email: 'michaeljohnson@gmail.com',
      role: 'WP Site Admin',
    },
    {
      userPhoto: '/woman.png',
      name: 'Sarah Connor',
      email: 'sarah.connor@gmail.com',
      role: 'WP Site Admin',
    },
    {
      userPhoto: '/blackgirl.png',
      name: 'qalvardi',
      email: 'qalvardi.connor@gmail.com',
      role: 'WP Site Admin',
    },
    {
      userPhoto: '/boy.png',
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      role: 'WP Site Admin',
    },
  ];

  return (
    <div className={styles.tableWrapper}>
      <Table<UsersTablePropsInterface>
        rowSelection={{ type: selectionType }}
        columns={columns}
        dataSource={data}
        pagination={false}
        rowKey="email"
      />
    </div>
  );
};

export default IpTable;
