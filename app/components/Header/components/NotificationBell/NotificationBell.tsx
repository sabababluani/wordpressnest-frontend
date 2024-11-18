'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import styles from './NotificationBell.module.scss';

const NotificationBell: React.FC = () => {
  const [notification, setNotification] = useState<number>(0);

  const onClick = (): void => {
    setNotification(notification + 1);
  };
  return (
    <div className={styles.notificationBell} onClick={onClick}>
      <Image
        src={
          notification
            ? '/icons/emptynotification.svg'
            : '/icons/notification.svg'
        }
        width={24}
        height={24}
        alt="notification"
      />
    </div>
  );
};

export default NotificationBell;
