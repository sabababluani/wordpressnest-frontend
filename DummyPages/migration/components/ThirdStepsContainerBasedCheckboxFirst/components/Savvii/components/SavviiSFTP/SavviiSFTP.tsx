import styles from './SavviiSFTP.module.scss';

const SavviiSFTP = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        <div className={styles.inputContainer}>
          <span className={styles.headline}>Server address</span>
          <input type="text" className={styles.input} />
        </div>
        <div className={styles.inputContainer}>
          <span className={styles.headline}>Port</span>
          <input type="text" className={styles.input} />
        </div>
      </div>
      <div className={styles.inputWrapper}>
        <div className={styles.inputContainer}>
          <span className={styles.headline}>SFTP Username</span>
          <input type="text" className={styles.input} />
        </div>
        <div className={styles.inputContainer}>
          <span className={styles.headline}>SFTP Password</span>
          <input type="text" className={styles.input} />
        </div>
      </div>
      <div className={styles.inputContainer}>
        <span className={styles.headline}>WordPress site path</span>
        <input type="text" className={styles.bigInput} />
      </div>
    </div>
  );
};

export default SavviiSFTP;
