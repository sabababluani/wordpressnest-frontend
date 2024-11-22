'use client';

import { Modal, Table } from 'antd';
import type { TableColumnsType } from 'antd';
import Image from 'next/image';
import React, { useState } from 'react';
import styles from '@/app/domains/components/DomainsTable/DomainsTable.module.scss';
import EditModal from '../EditModal/EditModal';
import { UsersTablePropsInterface } from './interfaces/users-table-props.interface';
import { UsersData } from './users-dummy/users-dummy-data';

const IpTable: React.FC = () => {
  const [selectionType] = useState<'checkbox'>('checkbox');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
          <Image
            src={'/icons/edit.svg'}
            alt={'edit'}
            width={24}
            height={24}
            onClick={showModal}
          />
          <Image
            src={'/icons/trash.svg'}
            alt={'delete'}
            width={24}
            height={24}
          />
          <div className={styles.modal}>
            <Modal
              title=""
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
              footer={null}
              closable={false}
            >
              <EditModal onClose={handleCancel} />
            </Modal>
          </div>
        </div>
      ),
      width: 377,
    },
  ];

  return (
    <div className={styles.tableWrapper}>
      <Table<UsersTablePropsInterface>
        rowSelection={{ type: selectionType }}
        columns={columns}
        dataSource={UsersData}
        pagination={false}
        rowKey="email"
      />
    </div>
  );
};

export default IpTable;
