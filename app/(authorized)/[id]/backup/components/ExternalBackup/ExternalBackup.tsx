'use client';

import { useState } from 'react';
import styles from './ExternalBackup.module.scss';
import ExternalBackupBox from './components/ExternalBackupBox/ExternalBackupBox';
import EnableExternalModal from './components/EnableExternalModal/EnableExternalModal';
import { Modal } from 'antd';

const ExternalBackup = () => {
  const [isActive, setIsActive] = useState(false);
  const [activeCheckbox, setActiveCheckbox] = useState(0);

  const handleCheckboxClick = (index: number) => {
    setActiveCheckbox(index);
    if (index === 1) {
      setIsActive(true);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div>
        <h1>External Backup</h1>
        <p>You can set backups every 6-hours or every hour.</p>
      </div>
      <div className={styles.container}>
        <ExternalBackupBox
          id={1}
          image="/aws.svg"
          hours={''}
          price={'2 USD / site / month'}
          description={
            'Create and upload a backup (files, database, or both) to your own Amazon S3 account once a week or month.'
          }
          isActive={activeCheckbox === 1}
          onClick={() => handleCheckboxClick(1)}
          title={'Amazon S3'}
        />
        <ExternalBackupBox
          id={2}
          hours={''}
          price={'100  USD / site / month'}
          description={
            'Backups created every hour and available for 24 hours, providing 24 additional restore points over the last day. Ideal for ecommerce sites, membership sites, and sites that change continuously.'
          }
          isActive={activeCheckbox === 2}
          onClick={() => handleCheckboxClick(2)}
          image={'/googlecloud.svg'}
          title={'Google cloud storage'}
        />
      </div>
      <Modal
        width={840}
        open={isActive}
        onCancel={() => setIsActive(false)}
        footer={null}
        closable={false}
        centered
      >
        <EnableExternalModal onClose={() => setIsActive(false)} />
      </Modal>
    </div>
  );
};

export default ExternalBackup;
