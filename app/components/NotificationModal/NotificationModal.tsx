import { Pagination } from 'antd';
import Image from 'next/image';
import { useState } from 'react';
import styles from './NotificationModal.module.scss';
import { NotificationModalPropsInterface } from './interfaces/notification-modal-props.interface';

const NotificationModal = ({
  onClose,
  notifications,
}: NotificationModalPropsInterface) => {
  const [current, setCurrent] = useState(1);
  const pageSize = 4;

  const handlePageChange = (page: number) => {
    setCurrent(page);
  };

  const startIndex = (current - 1) * pageSize;
  const paginatedNotifications = notifications.slice(
    startIndex,
    startIndex + pageSize,
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.headerContainer}>
          <span className={styles.headline}>Notification</span>
          <span className={styles.headlineBelow}>Novatori</span>
        </div>
        <Image
          src="/icons/close-mini.svg"
          alt="close"
          width={24}
          height={24}
          className={styles.close}
          onClick={onClose}
        />
      </div>
      {paginatedNotifications.length === 0 ? (
        <div className={styles.empty}>
          <span>No results found.</span>
        </div>
      ) : (
        paginatedNotifications.map((notification, index) => (
          <div className={styles.container} key={index}>
            <div key={notification.id} className={styles.notification}>
              <div className={styles.notificationContainer}>
                <span className={styles.notificationText}>
                  {notification.message}
                </span>
                <span className={styles.timeAgo}>{notification.timeAgo}</span>
              </div>
              <div>
                <span className={styles.date}>{notification.date}</span>
              </div>
            </div>
          </div>
        ))
      )}
      <div className={styles.footer}>
        <div className={styles.paginationWrapper}>
          <Pagination
            current={current}
            pageSize={pageSize}
            total={notifications.length}
            onChange={handlePageChange}
            itemRender={(page, type) => {
              if (type === 'prev') {
                return (
                  <div className={styles.arrow}>
                    <Image
                      src="/icons/left.svg"
                      alt="Previous"
                      width={24}
                      height={24}
                    />
                  </div>
                );
              }
              if (type === 'next') {
                return (
                  <div className={styles.arrow}>
                    <Image
                      src="/icons/right.svg"
                      alt="Next"
                      width={24}
                      height={24}
                    />
                  </div>
                );
              }
              return <a>{page}</a>;
            }}
          />
        </div>
        <Image
          src={'/icons/notificationSettings.svg'}
          alt="settings"
          width={24}
          height={24}
        />
      </div>
    </div>
  );
};

export default NotificationModal;
