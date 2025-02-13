'use client';

import SuccessNotification from '@/app/components/SuccessNotification/SuccessNotification';
import styles from './RefferalLink.module.scss';
import Image from 'next/image';
import { useState } from 'react';

const RefferalLink = () => {
  const [inputValue] = useState('https://hosting.ge/?Novatori=ganvitarebas');
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(inputValue).then(() => {
      setIsNotificationOpen(true);

      setTimeout(() => setIsNotificationOpen(false), 3000);
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.headline}>Share your link to get started</span>
      </div>
      <div className={styles.container}>
        <div className={styles.linkWrapper}>
          <span className={styles.title}>Referral link</span>
          <div className={styles.link}>
            <input
              type="text"
              className={styles.input}
              defaultValue={inputValue}
              readOnly
            />
            <div className={styles.copyButton} onClick={handleCopy}>
              <Image src="/icons/copy.svg" width={20} height={20} alt="copy" />
              <span className={styles.copy}>Copy</span>
            </div>
          </div>
        </div>
        <span className={styles.text}>
          By participating in the referral program in any way or using referral
          credits, you agree to these terms
        </span>
      </div>
      {isNotificationOpen && (
        <SuccessNotification message={'Copied to clipboard!'} />
      )}
    </div>
  );
};

export default RefferalLink;
