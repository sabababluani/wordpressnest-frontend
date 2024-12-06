'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import styles from './NotificationBell.module.scss';
import NotificationModal from '@/app/components/NotificationModal/NotificationModal';

const NotificationBell = () => {
  const [notification, setNotification] = useState<number>(0);
  const [isNotificationVisable, setIsNotificationVisable] = useState(false);

  const onClick = (): void => {
    setNotification(notification + 1);
    setIsNotificationVisable(true);
  };

  const handleClose = () => {
    setIsNotificationVisable(false);
  };

  const notifications = [
    {
      id: 1,
      message: 'Tips to make the most of hosting for your site',
      timeAgo: '2 hours ago',
      date: 'Sep 17',
    },
    {
      id: 2,
      message: 'New update available for your software',
      timeAgo: '5 hours ago',
      date: 'Sep 17',
    },
    {
      id: 3,
      message: 'New update available for your software',
      timeAgo: '5 hours ago',
      date: 'Sep 17',
    },
    {
      id: 4,
      message: 'New update available for your software',
      timeAgo: '5 hours ago',
      date: 'Sep 17',
    },
    {
      id: 5,
      message: 'New update available for your software',
      timeAgo: '5 hours ago',
      date: 'Sep 17',
    },
  ];

  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setIsNotificationVisable(false);
    }
  };

  useEffect(() => {
    if (isNotificationVisable) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isNotificationVisable]);

  return (
    <>
      <div
        className={`${styles.notificationBell} ${
          isNotificationVisable ? styles.disabled : ''
        }`}
        onClick={onClick}
      >
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
      {isNotificationVisable && (
        <div ref={modalRef} className={styles.notification}>
          <NotificationModal
            onClose={handleClose}
            notifications={notifications}
          />
        </div>
      )}
    </>
  );
};

export default NotificationBell;
