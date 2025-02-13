import Button from '@/app/components/Button/Button';
import styles from './DiskSpace.module.scss';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { DiskSpacePropsInterface } from './interfaces/disk-space-props.interface';

const DiskSpace = (props: DiskSpacePropsInterface) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.headline}>{props.heading}</span>
      </div>
      <div className={styles.container}>
        <p className={styles.text}>{props.text}</p>
        <Button
          innerContent="Add to plan"
          backgroundColor={buttonbackgroundColorEnum.whitelight}
        />
      </div>
    </div>
  );
};

export default DiskSpace;
