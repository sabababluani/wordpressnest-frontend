import Button from '@/app/components/Button/Button';
import styles from './DiskSpace.module.scss';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';

const DiskSpace = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.headline}>Additional disk space </span>
      </div>
      <div className={styles.container}>
        <p className={styles.text}>
          Increase the storage space in your account, shared across all sites,
          your hosting plan includes 10GB of disk space
        </p>
        <Button
          innerContent="Add to plan"
          backgroundColor={buttonbackgroundColorEnum.whitelight}
        />
      </div>
    </div>
  );
};

export default DiskSpace;
