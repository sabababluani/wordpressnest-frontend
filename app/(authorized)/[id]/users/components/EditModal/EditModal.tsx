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
import ModalHeader from '@/app/components/ModalHeader/ModalHeader';
import { useNotification } from '@/app/contexts/NotificationContext';
import { UserInterface } from '@/app/components/Navigation/interfaces/navigation.props.interface';

const EditModal = (
  props: UsersModalPropsInterface & {
    user: UsersTablePropsInterface;
  },
): JSX.Element => {
  const { id } = useParams();
  const { showNotification } = useNotification();

  const [selectedRole, setSelectedRole] = useState(props.user.roles);
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    try {
      await patchData('wp-cli/wprole', +id, {
        userId: props.user.ID,
        role: selectedRole.toLowerCase(),
      });
      mutate(`wp-cli/wpuser/${id}`);
      showNotification('User role updated successfully', 'success');
      props.onClose();
    } catch {
      showNotification('Failed to update user role', 'error');
    } finally {
      setLoading(false);
    }
  };

  const { data: siteTitle } = useGetData<UserInterface>({
    endpoint: `user/me`,
  });

  const CurrentSiteName =
    siteTitle?.setup.find((item) => item.id === +id)?.siteName ?? '';

  return (
    <div className={styles.mainWrapper}>
      <ModalHeader headline="Edit User" onClose={props.onClose} />
      <div className={styles.container}>
        <div className={styles.userWrapper}>
          <span>{CurrentSiteName}</span>
          <div className={styles.user}>
            <Image
              src="/profile.jpg"
              alt="profile"
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
            loading={loading}
            setLoading={setLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default EditModal;
