'use client';

import Image from 'next/image';
import styles from './LinkedinAccountsBox.module.scss';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { useState } from 'react';
import { Modal } from 'antd';
import RevokeModal from '@/app/components/RevokeModal/RevokeModal';
import { accountActions } from './linked-accounts-box-dummy/linked-accounts-box-dummy';

const LinkedinAccountsBox = () => {
  const [modalData, setModalData] = useState<{
    platform: string;
    open: boolean;
  }>({
    platform: '',
    open: false,
  });

  const handleButtonClick = (platform: string, action: string) => {
    if (action === 'Revoke') {
      setModalData({ platform, open: true });
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <p>Linked Accounts</p>
      </div>
      <div className={styles.container}>
        <p>
          We use this to let you sign in and populate your profile information.
        </p>
        {accountActions.map(({ platform, icon, action }) => (
          <div key={platform} className={styles.authContainer}>
            <div className={styles.authWrapper}>
              <Image
                src={icon}
                alt={platform.toLowerCase()}
                width={48}
                height={48}
              />
              <span>{platform}</span>
            </div>
            <Button
              backgroundColor={buttonbackgroundColorEnum.whitelight}
              innerContent={action}
              onClick={() => handleButtonClick(platform, action)}
            />
          </div>
        ))}
      </div>

      {modalData.open && (
        <Modal
          open={modalData.open}
          onCancel={() => setModalData({ platform: '', open: false })}
          footer={null}
          closable={false}
          width={800}
        >
          <RevokeModal
            onClose={() => setModalData({ platform: '', open: false })}
            headline={`Revoke ${modalData.platform} SSO authentication?`}
            content={`You need to reauthorize ${modalData.platform} to be able to log in.`}
            buttonText={'Revoke Access'}
          />
        </Modal>
      )}
    </div>
  );
};

export default LinkedinAccountsBox;
