import { Pagination } from 'antd';
import styles from './NotificationModal.module.scss';
import Image from 'next/image';

const NotificationModal = () => {
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
          //   onClick={props.onClose}
        />
      </div>
      <div className={styles.container}>
        <span>No results found.</span>
        <div className={styles.notification}>
          <div className={styles.notificationContainer}>
            <span className={styles.notificationText}>
              Tips to make the most of hosting for your site
            </span>
            <span className={styles.timeAgo}>2 hour ago</span>
          </div>
          <div>
            <span className={styles.date}>Sep 17</span>
          </div>
        </div>
        <div className={styles.notification}>
          <div className={styles.notificationContainer}>
            <span className={styles.notificationText}>
              Tips to make the most of hosting for your site
            </span>
            <span className={styles.timeAgo}>2 hour ago</span>
          </div>
          <div>
            <span className={styles.date}>Sep 17</span>
          </div>
        </div>
        <div className={styles.notification}>
          <div className={styles.notificationContainer}>
            <span className={styles.notificationText}>
              Tips to make the most of hosting for your site
            </span>
            <span className={styles.timeAgo}>2 hour ago</span>
          </div>
          <div>
            <span className={styles.date}>Sep 17</span>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.paginationWrapper}>
          <Pagination
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
