import styles from './DailyBackupModal.module.scss';
import Image from 'next/image';

const DailyBackupModal = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.headline}>Confirm backup restoration</span>
        <Image
          src="/icons/close-mini.svg"
          alt="close"
          width={24}
          height={24}
          className={styles.close}
        />
      </div>
      <div>
        <div>
          <div>
            <span>Jigaro</span>
            <span>Environment</span>
          </div>
          <div>
            <div className={styles.circle}></div>
            <span className={styles.live}>Live</span>
          </div>
        </div>
        <Image
          src="/icons/close-mini.svg"
          alt="close"
          width={24}
          height={24}
          className={styles.close}
        />
        <div>
          <div>
            <span>Daily backup</span>
            <span>{'Dec 7, 2024, 12:46 AM "Daily Auto Backup"'}</span>
          </div>
          <div>
            <div className={styles.circle}></div>
            <span className={styles.live}>Live</span>
          </div>
        </div>
      </div>
      <div>
        <span>
          The selected backup will replace all your files, databases and
          environment settings (e.g. domains, redirects, SSL certificates) to
          your jigaro Live environment.
        </span>
        <div>
          <span>What will remain the same:</span>
          <div>
            <div>
              <div></div>
              <span>Database password</span>
            </div>
            <div>
              <div></div>
              <span>.htpasswd protection</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyBackupModal;
