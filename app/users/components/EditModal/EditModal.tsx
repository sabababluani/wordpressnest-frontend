import React, { useState } from 'react';
import Image from 'next/image';
import styles from './EditModal.module.scss';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import useSWR from 'swr';
import BaseApi from '@/app/api/BaseApi';
import { UsersModalPropsInterface } from '../interfaces/modal.props.interface';

const EditModal = (props: UsersModalPropsInterface): JSX.Element => {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);

  const fetcher = (url: string) =>
    BaseApi.get(url).then((response) => response.data);

  const { data: users, error } = useSWR('wp-cli/wprole/list', fetcher);

  const handleUserChange = (value: string) => {
    setSelectedUser(value);
  };

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.header}>
        <span className={styles.headline}>Edit Users</span>
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
              <span className={styles.name}>Beka Jikurishvili</span>
              <span className={styles.email}>Jikurishvilib@gmail.com</span>
            </div>
          </div>
          <div className={styles.selectWrapper}>
            <select
              className={`${styles.select} ${styles.domainsPagePadding}`}
              defaultValue=""
              onChange={(e) => handleUserChange(e.target.value)}
            >
              <option value="" disabled>
                Select a User
              </option>
              {users &&
                users.map((user: { name: string }, index: number) => (
                  <option key={index} value={user.name}>
                    {user.name}
                  </option>
                ))}
              {error && <option disabled>Error loading users</option>}
            </select>
          </div>
          {selectedUser && (
            <div className={styles.userInfo}>
              <span className={styles.name}>Selected User: {selectedUser}</span>
            </div>
          )}
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
            innerContent="Edit Users"
            backgroundColor={buttonbackgroundColorEnum.black}
          />
        </div>
      </div>
    </div>
  );
};

export default EditModal;
