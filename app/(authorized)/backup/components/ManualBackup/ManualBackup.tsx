'use client';

import { Modal, Progress } from 'antd';
import React, { useState } from 'react';
import styles from './ManualBackup.module.scss';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import Button from '@/app/components/Button/Button';
import ManualBackupTable from './components/ManualBackupTable/ManualBackupTable';
import ManualBackupCreateModal from './components/ManualBackupCreateModal/ManualBackupCreateModal';

const ManualBackup = (): JSX.Element => {
  const [isCreateModalActive, setIsCreateModalActive] = useState(false);

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
              <Progress percent={30} showInfo={false} />
            </div>
          </div>
          <Button
            backgroundColor={buttonbackgroundColorEnum.black}
            innerContent={'Add Domains'}
            onClick={() => setIsCreateModalActive(true)}
          />
        </div>
      </div>
      <ManualBackupTable />
      <Modal
        open={isCreateModalActive}
        onCancel={() => setIsCreateModalActive(false)}
        footer={false}
        closable={false}
        width={840}
      >
        <ManualBackupCreateModal
          onClose={() => setIsCreateModalActive(false)}
        />
      </Modal>
    </div>
  );
};

export default ManualBackup;
