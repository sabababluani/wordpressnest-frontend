import { Progress } from 'antd';
import React from 'react';
import styles from './ManualBackup.module.scss';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import Button from '@/app/components/Button/Button';
import ManualBackupTable from '../ManualBackupTable/ManualBackupTable';

const ManualBackup = (): JSX.Element => {
  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
        <div className={styles.wrapperContainer}>
          <h1>Manual Backup</h1>
          <p>
            You can create up to 5 manual backups. Each manual backup will be
            stored for 14 days. Created Expiry Note Restore Delete
          </p>
        </div>
        <div className={styles.container}>
          <div className={styles.progressContainer}>
            <p>2 to 5</p>
            <div className={styles.progress}>
              <Progress percent={30} showInfo={false} strokeColor={'#000'} />
            </div>
          </div>
          <div className={styles.buttons}>
            <Button
              backgroundColor={buttonbackgroundColorEnum.black}
              innerContent={'Add Domains'}
            />
          </div>
        </div>
      </div>
      <ManualBackupTable />
    </div>
  );
};

export default ManualBackup;
