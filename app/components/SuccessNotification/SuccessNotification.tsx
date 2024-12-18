import { Checkbox } from 'antd';
import styles from './SuccessNotification.module.scss';

const SuccessNotification = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.checkbox}>
        <Checkbox checked />
      </div>
      <div className={styles.container}>
        <span className={styles.done}>Done</span>
        <span className={styles.notification}>
          Notification settings update
        </span>
      </div>
    </div>
  );
};

export default SuccessNotification;
