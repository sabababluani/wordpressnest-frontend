import { Checkbox } from 'antd';
import styles from './SuccessNotification.module.scss';
import { SuccessNotificationPropsInterface } from './interfaces/success-notification-props.interface';

const SuccessNotification = (props: SuccessNotificationPropsInterface) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.checkbox}>
        <Checkbox checked />
      </div>
      <div className={styles.container}>
        <span className={styles.done}>Done</span>
        <span className={styles.notification}>{props.message}</span>
      </div>
    </div>
  );
};

export default SuccessNotification;
