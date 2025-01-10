import { Checkbox } from 'antd';
import styles from './ExternalBackupBox.module.scss';
import { ExternalBackupBoxPropsInterface } from './interfaces/external-backup-box-props.interface';
import Image from 'next/image';

const ExternalBackupBox = (props: ExternalBackupBoxPropsInterface) => {
  return (
    <div
      className={`${styles.container} ${
        props.isActive && styles.activeContainer
      }`}
      onClick={props.onClick}
    >
      <div className={styles.checkbox}>
        <Checkbox checked={props.isActive}></Checkbox>
      </div>
      <div className={styles.containerContent}>
        <Image src={props.image} alt="aws" width={48} height={48} />
        <div className={styles.containerWrapper}>
          <span className={styles.heading}>{props.title}</span>
          <span className={styles.freeDuring}>Free during the first month</span>
          <div className={styles.price}>
            <div className={styles.usdPrice}>
              <span className={styles.priceSpan}>{props.price}</span>
            </div>
            <span className={styles.firstMonth}>after first month</span>
          </div>
          <span className={styles.offer}>
            + 1 USD / GB external bandwidth used monthly
          </span>
          <span className={styles.text}>{props.description}</span>
        </div>
      </div>
    </div>
  );
};

export default ExternalBackupBox;
