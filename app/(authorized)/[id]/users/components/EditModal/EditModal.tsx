import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './EditModal.module.scss';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { useParams } from 'next/navigation';
import { Select } from 'antd';
import { UsersModalPropsInterface } from '../interfaces/modal.props.interface';
import { UsersTablePropsInterface } from '../interfaces/users-table-props.interface';
import { patchData } from '@/app/api/crudService';
import { useGetData } from '@/app/hooks/useGetData';
import { mutate } from 'swr';

const EditModal = (
  props: UsersModalPropsInterface & {
    user: UsersTablePropsInterface;
  },
): JSX.Element => {
  const { id } = useParams();
  const [selectedRole, setSelectedRole] = useState<string>(props.user.roles);

  const { data: roles } = useGetData<{ name: string }[]>({
    endpoint: `wp-cli/wprole/${id}`,
  });

  useEffect(() => {
    setSelectedRole(props.user.roles);
  }, [props.user.roles]);

  const selectOptions =
    roles
      ?.filter(
        (role: { name: string }) =>
          role.name.toLowerCase() !== props.user.roles.toLowerCase(),
      )
      .map((role: { name: string }) => ({
        label: role.name,
        value: role.name,
      })) || [];

  const onHandleUpdate = async () => {
    try {
      await patchData('wp-cli/wprole', +id, {
        userId: props.user.ID,
        role: selectedRole.toLowerCase(),
      });

      mutate(`wp-cli/wpuser/${id}`);

      props.onClose();
    } catch (error) {
      console.error('Error updating role:', error);
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
          onClick={props.onClose}
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
                {props.user.first_name} {props.user.last_name}
              </span>
              <span className={styles.email}>{props.user.user_email}</span>
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
            onClick={props.onClose}
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
