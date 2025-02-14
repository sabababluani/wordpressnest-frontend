'use client';

import { useNotification } from '@/app/contexts/NotificationContext';
import styles from './Notification.module.scss';
import Image from 'next/image';

const Notification = () => {
  const { notification } = useNotification();

  if (!notification) return null;

  return (
    <div className={`${styles.wrapper} ${styles[notification.type]}`}>
      <div className={styles.icon}>
        <Image
          src={
            notification.type === 'success'
              ? '/icons/successCheck.svg'
              : '/icons/redX.svg'
          }
          alt={notification.type}
          width={20}
          height={20}
        />
      </div>
      <div className={styles.container}>
        <span className={styles.title}>
          {notification.type === 'success' ? 'Done' : 'Failed'}
        </span>
        <span className={styles.message}>{notification.message}</span>
      </div>
    </div>
  );
};

export default Notification;
