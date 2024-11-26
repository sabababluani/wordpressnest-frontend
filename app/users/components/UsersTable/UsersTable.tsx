'use client';

import { Modal, Table } from 'antd';
import type { TableColumnsType } from 'antd';
import Image from 'next/image';
import React, { useState } from 'react';
import styles from '@/app/domains/components/DomainsTable/DomainsTable.module.scss';
import EditModal from '../EditModal/EditModal';
import { UsersTablePropsInterface } from './interfaces/users-table-props.interface';
import BaseApi from '@/app/api/BaseApi';
import useSWR, { mutate } from 'swr';

const IpTable: React.FC = () => {
  const [selectionType] = useState<'checkbox'>('checkbox');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetcher = (url: string) =>
    BaseApi.get(url).then((response) => response.data);
  const { data: wpUsers } = useSWR<UsersTablePropsInterface[]>(
    'wp-cli/wpuser/list',
    fetcher
  );

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onUserDelete = async (userId: number) => {
    try {
      await BaseApi.post('wp-cli/wpuser/delete', { userId: userId });
      mutate('wp-cli/wpuser/list');
    } catch (error) {
      console.error('Failed to delete user:', error);
    }
  };

  const columns: TableColumnsType<UsersTablePropsInterface> = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (_, record) => (
        <div className={styles.userContainer}>
          <Image src={'/boy.png'} alt={'User Photo'} width={48} height={48} />
          <div className={styles.userInfoWrapper}>
            <span className={styles.userName}>
              {record.first_name} {record.last_name}
            </span>
            <span className={styles.userEmail}>{record.user_email}</span>
          </div>
        </div>
      ),
      width: 533,
    },
    {
      title: 'Role',
      dataIndex: 'role',
      render: (_, record) => <div>{record.roles}</div>,
      width: 573,
    },
    {
      title: 'Actions',
      dataIndex: 'role',

      render: (_, record) => (
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
            onClick={() => onUserDelete(record.ID)}
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
        dataSource={wpUsers}
        pagination={false}
        rowKey="ID"
      />
    </div>
  );
};

export default IpTable;
