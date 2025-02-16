'use client';

import { useNotification } from '@/app/contexts/NotificationContext';
import styles from './Notification.module.scss';
import Image from 'next/image';

const Notification = () => {
  const { notifications, hideNotification } = useNotification();

  return (
    <div className={styles.notificationsWrapper}>
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`${styles.wrapper} ${styles[notification.type]}`}
        >
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
          <Image
            src="/icons/x.svg"
            alt="close"
            width={20}
            height={20}
            onClick={() => hideNotification(notification.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default Notification;
