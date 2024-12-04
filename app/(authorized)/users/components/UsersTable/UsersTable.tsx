'use client';

import { Modal, Table } from 'antd';
import type { TableColumnsType } from 'antd';
import Image from 'next/image';
import React, { useState } from 'react';
import styles from '@/app/(authorized)/domains/components/DomainsTable/DomainsTable.module.scss';
import EditModal from '../EditModal/EditModal';
import { UsersTablePropsInterface } from './interfaces/users-table-props.interface';
import BaseApi from '@/app/api/BaseApi';
import useSWR, { mutate } from 'swr';
import { useParams } from 'next/navigation';

const UsersTable: React.FC = () => {
  const { id } = useParams();
  const [selectionType] = useState<'checkbox'>('checkbox');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] =
    useState<UsersTablePropsInterface | null>(null);

  const fetcher = (url: string) =>
    BaseApi.get(url).then((response) => response.data);

  const { data: wpUsers } = useSWR<UsersTablePropsInterface[]>(
    `wp-cli/wpuser/${id}`,
    fetcher
  );

  const showModal = (user: UsersTablePropsInterface) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setSelectedUser(null);
    setIsModalOpen(false);
  };

  const onUserDelete = async (userId: number) => {
    try {
      await BaseApi.delete(`wp-cli/wpuser/${id}?WpUserId=${userId}`);
      mutate(`wp-cli/wpuser/${id}`);
    } catch (error) {
      console.log(error);
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
      render: (_, record) => (
        <span>{record.roles[0].toUpperCase() + record.roles.slice(1)}</span>
      ),
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
            onClick={() => showModal(record)}
          />
          <Image
            src={'/icons/trash.svg'}
            alt={'delete'}
            width={24}
            height={24}
            onClick={() => onUserDelete(record.ID)}
          />
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
        loading={wpUsers === undefined}
        rowKey="ID"
      />
      <Modal open={isModalOpen} footer={null} closable={false}>
        {selectedUser && (
          <EditModal user={selectedUser} onClose={handleCancel} />
        )}
      </Modal>
    </div>
  );
};

export default UsersTable;
