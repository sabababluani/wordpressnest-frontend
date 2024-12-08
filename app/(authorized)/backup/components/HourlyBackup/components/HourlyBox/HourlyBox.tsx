import { Checkbox } from 'antd';
import styles from './HourlyBox.module.scss';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { HourlyBoxPropsInterface } from './interfaces/hourly-box-props.interface';

const HourlyBox = (props: HourlyBoxPropsInterface) => {
  return (
    <div
      className={`${styles.container} ${
        props.isActive && styles.activeContainer
      }`}
    >
      <div className={styles.checkbox}>
        <Checkbox checked={props.isActive}></Checkbox>
      </div>
      <div className={styles.containerContent}>
        <span className={styles.sixhour}>{props.hours}</span>
        <div className={styles.containerWrapper}>
          <span className={styles.freeDuring}>Free during the first month</span>
          <div className={styles.price}>
            <div className={styles.usdPrice}>
              <span>{props.price}</span>
            </div>
            <span className={styles.firstMonth}>after first month</span>
          </div>
          <span className={styles.text}>{props.description}</span>
        </div>
        <div className={styles.button}>
          <Button
            backgroundColor={buttonbackgroundColorEnum.black}
            innerContent="Choose"
            onClick={props.onClick}
          />
        </div>
      </div>
    </div>
  );
};

export default HourlyBox;
