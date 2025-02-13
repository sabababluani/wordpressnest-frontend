import styles from './GoogleCloud.module.scss';
import React from 'react';

const GoogleCloud = () => {
  return (
    <div className={styles.inputAndCaptionWrapper}>
      <div className={styles.serverWrapper}>
        <span className={styles.inputLabel}>Google Cloud username</span>
        <input type="text" className={styles.serverInputStyle} />
      </div>
      <div className={styles.serverWrapper}>
        <span className={styles.inputLabel}>Google Cloud password</span>
        <input type="text" className={styles.serverInputStyle} />
      </div>
    </div>
  );
};

export default GoogleCloud;
