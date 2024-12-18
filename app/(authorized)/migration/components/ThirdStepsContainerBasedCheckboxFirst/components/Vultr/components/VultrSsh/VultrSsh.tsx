import styles from './VultrSsh.module.scss';

const VultrSsh = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.externalWrapper}>
        <div className={styles.inputAndCaptionWrapper}>
          <div className={styles.serverWrapper}>
            <span className={styles.inputLabel}>Server address</span>
            <input type="text" className={styles.serverInputStyle} />
          </div>
          <div className={styles.portWrapper}>
            <span className={styles.inputLabel}>Port</span>
            <input type="text" className={styles.portInputStyle} />
          </div>
        </div>
        <div className={styles.inputAndCaptionWrapper}>
          <div className={styles.serverWrapper}>
            <span className={styles.inputLabel}>SETP Username</span>
            <input type="text" className={styles.serverInputStyle} />
          </div>
          <div className={styles.portWrapper}>
            <span className={styles.inputLabel}>STEP Password</span>
            <input type="text" className={styles.portInputStyle} />
          </div>
        </div>
        <div className={styles.inputAndCaptionWrapper}>
          <div className={styles.ftpUsernameWrapper}>
            <span className={styles.inputLabel}>WordPress site path</span>
            <input type="text" className={styles.ftpPassowordInputStyle} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VultrSsh;
