'use client';

import { Switch } from 'antd';
import { useState } from 'react';
import styles from './Notifications.module.scss';

const Notifications = (): JSX.Element => {
  const [, setIsEnabledHostingMessages] = useState<boolean>(false);
  const [, setIsEnabledEmailNotifications] = useState<boolean>(false);
  const [, setIsEnabledSiteMonitoring] = useState<boolean>(false);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.topContainer}>
        <span className={styles.notificationsCaptionStyle}>Notifications</span>
        <span className={styles.outsideNoteficationsStyle}>
          We may still send you important notifications about your account
          outside of your notification settings.
        </span>
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.bottomContainersFirstWrapper}>
          <div className={styles.firstContainerWrapper}>
            <span className={styles.wordPressOverageStyle}>
              WordPress overage
            </span>
            <span className={styles.wordPressOverageDescriptionStyle}>
              If you reach your plan’s visits, DN bandwidth,or disk space
              limits, we’ll keep your Wordpress sites running but change you an
              overage fee.
            </span>
          </div>
          <div className={styles.secondContainerWrapper}>
            <div className={styles.captionAndToggleWrapper}>
              <span className={styles.captionStyle}>Messages in MyHosting</span>
              <div className={styles.toggleWrapper}>
                <Switch
                  className={styles.toggleStyle}
                  onChange={() => setIsEnabledHostingMessages((prev) => !prev)}
                />
              </div>
            </div>
            <div className={styles.captionAndToggleWrapper}>
              <span className={styles.captionStyle}>Email Notifications</span>
              <div className={styles.toggleWrapper}>
                <Switch
                  className={styles.toggleStyle}
                  onChange={() =>
                    setIsEnabledEmailNotifications((prev) => !prev)
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rightContainerWrapper}>
          <div className={styles.rightContainersFirstWrapper}>
            <span className={styles.wordPressSiteCaptionStyle}>
              Wordpress site monitoring
            </span>
            <span className={styles.wordPressSiteDescriptionStyle}>
              If you reach your plan’s visits, DN bandwidth,or disk space
              limits, we’ll keep your Wordpress sites running but change you an
              overage fee.
            </span>
          </div>
          <div className={styles.toggleWrapper}>
            <Switch
              className={styles.toggleStyle}
              onChange={() => setIsEnabledSiteMonitoring((prev) => !prev)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
