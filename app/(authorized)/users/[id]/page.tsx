'use client';

import styles from './page.module.scss';
import Tablestyles from '@/app/(authorized)/domains/components/DomainsTable/DomainsTable.module.scss';
import UsersModal from '../components/UsersModal/UsersModal';
import { Modal, Table, TableColumnsType } from 'antd';
import { useState } from 'react';
import Button from '../../../components/Button/Button';
import { buttonbackgroundColorEnum } from '../../../components/Button/enum/button.enum';
import { UsersTablePropsInterface } from '../components/interfaces/users-table-props.interface';
import EditModal from '../components/EditModal/EditModal';
import useSWR, { mutate } from 'swr';
import BaseApi from '@/app/api/BaseApi';
import { useParams } from 'next/navigation';
import Image from 'next/image';

const Users = (): JSX.Element => {
  const { id } = useParams();

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRows, setSelectedRows] = useState<React.Key[]>([]);

  const [selectedUser, setSelectedUser] =
    useState<UsersTablePropsInterface | null>(null);

  const fetcher = (url: string) =>
    BaseApi.get(url).then((response) => response.data);

  const { data: wpUsers } = useSWR<UsersTablePropsInterface[]>(
    `wp-cli/wpuser/${id}`,
    fetcher
  );

  const showModalEdit = (user: UsersTablePropsInterface) => {
    setSelectedUser(user);
    setIsEditModalOpen(true);
  };

  const handleCancelEdit = () => {
    setSelectedUser(null);
    setIsEditModalOpen(false);
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
            onClick={() => showModalEdit(record)}
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

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[]) => {
      setSelectedRows(selectedRowKeys);
    },
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1>Users Managment</h1>
        {selectedRows.length > 0 ? (
          <div className={styles.users}>
            <p>
              {selectedRows.length}{' '}
              {selectedRows.length === 1 ? 'User' : 'Users'} selected
            </p>
            <div className={styles.buttons}>
              <Button
                backgroundColor={buttonbackgroundColorEnum.domainsRed}
                innerContent={'Delete Users'}
              />
            </div>
          </div>
        ) : (
          <>
            <Button
              backgroundColor={buttonbackgroundColorEnum.black}
              innerContentIconActive
              innerContent={'Invite Users'}
              innerContentIcon={'/icons/adduser.svg'}
              onClick={showModal}
            />
          </>
        )}
      </div>
      <div>
        <div className={Tablestyles.tableWrapper}>
          <Table<UsersTablePropsInterface>
            rowSelection={{ type: 'checkbox', ...rowSelection }}
            columns={columns}
            dataSource={wpUsers}
            pagination={false}
            loading={wpUsers === undefined}
            rowKey="ID"
          />
          <Modal open={isEditModalOpen} footer={null} closable={false}>
            {selectedUser && (
              <EditModal user={selectedUser} onClose={handleCancelEdit} />
            )}
          </Modal>
        </div>
      </div>
      <div className={styles.modal}>
        <Modal
          title=""
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
          closable={false}
        >
          <UsersModal onClose={handleCancel} />
        </Modal>
      </div>
    </div>
  );
};

export default Users;
