'use client';

import Button from '@/app/components/Button/Button';
import styles from './UsersServiceContianer.module.scss';
import Select from 'antd/es/select';
import { useState } from 'react';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';

const UsersServiceContianer = (): JSX.Element => {
  const [, setSelectState] = useState<string>('');

  const onSelectChange = (value: string) => {
    setSelectState(value);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.topContainer}>
        <span className={styles.usersCaptionStyle}>Users</span>
        <Button
          backgroundColor={buttonbackgroundColorEnum.black}
          innerContent="Invite users"
        />
      </div>
      <div className={styles.bottomContainer}>
        <Select
          onChange={onSelectChange}
          className={styles.selectStyle}
          placeholder="All service"
          options={[
            { value: '1', label: '1' },
            { value: '2', label: '2' },
            { value: '3', label: '3' },
          ]}
        />
      </div>
    </div>
  );
};

export default UsersServiceContianer;
