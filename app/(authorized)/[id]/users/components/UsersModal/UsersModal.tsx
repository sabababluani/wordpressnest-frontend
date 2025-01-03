'use client';

import Image from 'next/image';
import styles from './UsersModal.module.scss';
import Search from '@/app/components/Search/Search';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import Button from '@/app/components/Button/Button';
import { UsersModalPropsInterface } from '../interfaces/modal.props.interface';
import { Select } from 'antd';

//TODO SELECT AND SEARCH
const UsersModal = (props: UsersModalPropsInterface): JSX.Element => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.header}>
        <span className={styles.headline}>Invite Users</span>
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
        <div className={styles.contentWrapper}>
          <span className={styles.title}>Email Address(es)</span>
          <div className={styles.redirectWrapper}>
            <Search
              isPadded
              noIcon
              placeholder="example:https://www.novatori.ge"
              onChange={() => {}}
            />
            <Select />
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
            innerContent="Invite Users"
            backgroundColor={buttonbackgroundColorEnum.black}
          />
        </div>
      </div>
    </div>
  );
};

export default UsersModal;
