'use client';

import { Switch } from 'antd';
import { NotificationPropsInterface } from '../../interfaces/notifications-props-interface';
import styles from './Notification.module.scss';
import { useState } from 'react';

const NotificationContainer = (props: NotificationPropsInterface) => {
  const [, setToggleState] = useState<boolean>(false);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.topContainer}>
        <span className={styles.mainCaptionStyle}>{props.caption}</span>
      </div>
      <div className={styles.bottomContainer}>
        <span className={styles.descriptionStyle}>{props.description}</span>
        <div className={styles.toggleWrapper}>
          <Switch
            className={styles.toggleStyle}
            onChange={() => setToggleState((prev) => !prev)}
          />
        </div>
      </div>
    </div>
  );
};

export default NotificationContainer;
