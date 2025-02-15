'use client';

import styles from './page.module.scss';
import Tablestyles from '@/app/styles/shared-table.module.scss';
import { Modal, Table, TableColumnsType } from 'antd';
import { useState } from 'react';
import Button from '../../../components/Button/Button';
import { buttonbackgroundColorEnum } from '../../../components/Button/enum/button.enum';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { deleteData } from '@/app/api/crudService';
import { useGetData } from '@/app/hooks/useGetData';
import { UsersTablePropsInterface } from './components/interfaces/users-table-props.interface';
import EditModal from './components/EditModal/EditModal';
import RevokeModal from '@/app/components/RevokeModal/RevokeModal';
import { useNotification } from '@/app/contexts/NotificationContext';

const Users = (): JSX.Element => {
  const { showNotification } = useNotification();
  const { id } = useParams();

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedRows, setSelectedRows] = useState<React.Key[]>([]);
  const [selectedUser, setSelectedUser] =
    useState<UsersTablePropsInterface | null>(null);
  const [selectedUserForDelete, setSelectedUserForDelete] =
    useState<UsersTablePropsInterface | null>(null);
  const [loading, setLoading] = useState(false);

  const { data: wpUsers, mutate } = useGetData<UsersTablePropsInterface[]>({
    endpoint: `wp-cli/wpuser/${id}`,
  });

  const showModalEdit = (user: UsersTablePropsInterface) => {
    setSelectedUser(user);
    setIsEditModalOpen(true);
  };

  const handleCancelEdit = () => {
    setSelectedUser(null);
    setIsEditModalOpen(false);
  };

  const onUserDelete = async (userIds: number[]) => {
    setLoading(true);
    try {
      await deleteData(`wp-cli/wpuser`, +id, { userId: userIds });
      showNotification('User deleted successfully', 'success');
      setSelectedRows([]);
      setSelectedUserForDelete(null);
      setIsDeleteModalOpen(false);
      mutate();
    } catch {
      showNotification('User deletion failed', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUsers = () => {
    if (selectedRows.length > 0) {
      selectedRows
        .map((rowKey) => {
          const user = wpUsers?.find((user) => user.ID === rowKey);
          return user?.ID;
        })
        .filter((id) => id !== undefined) as number[];

      setSelectedUserForDelete(null);
      setIsDeleteModalOpen(true);
    }
  };

  const columns: TableColumnsType<UsersTablePropsInterface> = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (_, record) => (
        <div className={styles.userContainer}>
          <Image
            src={'/profile.jpg'}
            alt={'User Photo'}
            width={48}
            height={48}
          />
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
            onClick={() => {
              setSelectedUserForDelete(record);
              setIsDeleteModalOpen(true);
            }}
          />
        </div>
      ),
      width: 377,
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[]) => {
      setSelectedRows(selectedRowKeys);
    },
  };

  const onFilteredDelete = () => {
    if (selectedUserForDelete) {
      onUserDelete([selectedUserForDelete.ID]);
    } else {
      const selectedUsersIds = selectedRows
        .map((rowKey) => {
          const user = wpUsers?.find((user) => user.ID === rowKey);
          return user?.ID;
        })
        .filter((id) => id !== undefined) as number[];

      onUserDelete(selectedUsersIds);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1>Users Management</h1>
        {selectedRows.length > 0 && (
          <div className={styles.users}>
            <p>
              {selectedRows.length}{' '}
              {selectedRows.length === 1 ? 'User' : 'Users'} selected
            </p>
            <div className={styles.buttons}>
              <Button
                backgroundColor={buttonbackgroundColorEnum.red}
                innerContent={'Delete Users'}
                onClick={handleDeleteUsers}
              />
            </div>
          </div>
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
          <Modal
            open={isEditModalOpen}
            onCancel={() => setIsEditModalOpen(false)}
            footer={null}
            closable={false}
            width={666}
          >
            {selectedUser && (
              <EditModal user={selectedUser} onClose={handleCancelEdit} />
            )}
          </Modal>
        </div>
      </div>
      <Modal
        open={isDeleteModalOpen}
        onCancel={() => setIsDeleteModalOpen(false)}
        footer={null}
        closable={false}
        width={800}
      >
        <RevokeModal
          onClose={() => setIsDeleteModalOpen(false)}
          onSuccess={onFilteredDelete}
          headline={`Are you sure to delete ${selectedRows.length ? selectedRows.length : ''} ${selectedRows.length > 1 ? 'users' : 'user'}?`}
          content={'This action cannot be undone'}
          buttonText={'Delete'}
          loading={loading}
          setLoading={setLoading}
        />
      </Modal>
    </div>
  );
};

export default Users;
