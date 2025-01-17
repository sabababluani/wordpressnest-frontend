import styles from './SuccessNotification.module.scss';
import { SuccessNotificationPropsInterface } from './interfaces/success-notification-props.interface';
import Image from 'next/image';

const SuccessNotification = (props: SuccessNotificationPropsInterface) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.checkbox}>
        <Image
          src={'/icons/successCheck.svg'}
          alt="toggleMessage"
          width={20}
          height={20}
        />
      </div>
      <div className={styles.container}>
        <span className={styles.done}>Done</span>
        <span className={styles.notification}>{props.message}</span>
      </div>
    </div>
  );
};

export default SuccessNotification;
