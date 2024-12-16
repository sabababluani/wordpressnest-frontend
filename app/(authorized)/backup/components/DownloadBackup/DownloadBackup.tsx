import Button from '@/app/components/Button/Button';
import styles from './DownloadBackup.module.scss';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';

const DownloadBackup = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.download}>
          <h1>Download backups</h1>
          <span>
            Create a downloadable archive file containing your entire website,
            once per week. The downloadable backup will be available for you to
            download for 24 hours.
          </span>
        </div>
        <Button
          backgroundColor={buttonbackgroundColorEnum.black}
          innerContent="Create Backup now"
        />
      </div>
    </div>
  );
};

export default DownloadBackup;
