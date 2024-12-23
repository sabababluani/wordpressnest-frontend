'use client';

import { useState } from 'react';
import styles from './FactorAuthentiaction.module.scss';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { Modal } from 'antd';
import TwoFAModal from './components/TwoFAModal/TwoFAModal';

const FactorAuthentication = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <p>Two-factor authentication</p>
      </div>
      <div className={styles.container}>
        <p>
          Use an authenticator app (e.g., Google Authenticator) on your phone to
          generate verification codes.
        </p>
        <div className={styles.button}>
          <Button
            backgroundColor={buttonbackgroundColorEnum.white}
            innerContent="Connect"
            onClick={showModal}
          />
        </div>
      </div>

      <Modal
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
        closable={false}
        width={840}
      >
        <TwoFAModal onClose={() => setIsModalVisible(false)} />
      </Modal>
    </div>
  );
};

export default FactorAuthentication;
