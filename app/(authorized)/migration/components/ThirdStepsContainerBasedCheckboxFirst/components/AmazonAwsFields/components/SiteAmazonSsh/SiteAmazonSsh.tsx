import styles from './SiteAmazonSsh.module.scss';

const SiteAmazonSsh = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.externalWrapper}>
        <span className={styles.description}>
          We will provide you the Kinsta public SSH key after the migration
          request has been submitted. Feel free to proceed and we&apos;ll get
          back to you with the details.
        </span>
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

export default SiteAmazonSsh;
