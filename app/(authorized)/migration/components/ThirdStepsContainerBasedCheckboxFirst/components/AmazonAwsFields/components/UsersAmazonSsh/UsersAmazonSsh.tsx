import styles from './UsersAmazonSsh.module.scss';

const UsersAmazonSsh = () => {
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
          <div className={styles.ftpUsernameWrapper}>
            <span className={styles.inputLabel}>Username</span>
            <input type="text" className={styles.ftpPassowordInputStyle} />
          </div>
        </div>
        <div className={styles.lastWordPressWrapper}>
          <span className={styles.inputLabel}>SSH key</span>
          <textarea className={styles.textarea}></textarea>
        </div>
      </div>
    </div>
  );
};

export default UsersAmazonSsh;
