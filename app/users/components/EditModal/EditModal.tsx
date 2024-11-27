import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './EditModal.module.scss';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import useSWR, { mutate } from 'swr';
import BaseApi from '@/app/api/BaseApi';
import { UsersModalPropsInterface } from '../interfaces/modal.props.interface';
import { UsersTablePropsInterface } from '../UsersTable/interfaces/users-table-props.interface';
import { Select } from 'antd';

const EditModal = ({
  user,
  onClose,
}: UsersModalPropsInterface & {
  user: UsersTablePropsInterface;
}): JSX.Element => {
  const [selectedRole, setSelectedRole] = useState<string>(user.roles);

  const fetcher = (url: string) =>
    BaseApi.get(url).then((response) => response.data);
  const { data: roles } = useSWR('wp-cli/wprole/list', fetcher);

  useEffect(() => {
    setSelectedRole(user.roles);
  }, [user.roles]);

  const selectOptions =
    roles
      ?.filter(
        (role: { name: string }) =>
          role.name.toLowerCase() !== user.roles.toLocaleLowerCase()
      )
      .map((role: { name: string }) => ({
        label: role.name,
        value: role.name,
      })) || [];

  const onHandleUpdate = async () => {
    onClose();
    try {
      await BaseApi.post('wp-cli/wprole/update', {
        userId: user.ID,
        role: selectedRole.toLowerCase(),
      });
      mutate('wp-cli/wprole/list');
      mutate('wp-cli/wpuser/list');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.header}>
        <span className={styles.headline}>Edit User</span>
        <Image
          src="/icons/close-mini.svg"
          alt="close"
          width={24}
          height={24}
          className={styles.close}
          onClick={onClose}
        />
      </div>
      <div className={styles.container}>
        <div className={styles.userWrapper}>
          <span>Novatori.ge</span>
          <div className={styles.user}>
            <Image
              src="/boy.png"
              alt="man"
              width={36}
              height={36}
              className={styles.picture}
            />
            <div className={styles.userInfo}>
              <span className={styles.name}>
                {user.first_name} {user.last_name}
              </span>
              <span className={styles.email}>{user.user_email}</span>
            </div>
          </div>
          <div className={styles.selectWrapper}>
            <Select
              options={selectOptions}
              style={{ width: '100%' }}
              value={selectedRole[0].toUpperCase() + selectedRole.slice(1)}
              onChange={(value) => setSelectedRole(value)}
            />
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.finishWrapper}>
          <Button
            innerContent="Cancel"
            backgroundColor={buttonbackgroundColorEnum.grey}
            onClick={onClose}
          />
          <Button
            innerContent="Save Changes"
            backgroundColor={buttonbackgroundColorEnum.black}
            onClick={onHandleUpdate}
          />
        </div>
      </div>
    </div>
  );
};

export default EditModal;
