import styles from './Steps.module.scss';
import { stepsPropsInterface } from './interface/steps-interface';

const Steps = (props: stepsPropsInterface) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.firstWrapper}>
        <span className={styles.captionStyle}>Settings</span>
        <div className={styles.circleAndLineStyle}>
          <div className={styles.circleStyle}></div>
          <div className={styles.lineStyle}></div>
        </div>
      </div>
      <div className={styles.secondWrapper}>
        <span
          className={`${styles.secondCaptionStyle} ${
            props.confirmation ? styles.black : styles.greyColor
          }`}
        >
          Confirmation
        </span>
        <div className={styles.circleAndLineStyle}>
          <div
            className={`${
              props.confirmation
                ? styles.circleStyle
                : styles.circleStyleTillConfirmation
            }`}
          ></div>
          <div
            className={`${
              props.confirmation
                ? styles.lineStyle
                : styles.lineStyleTillConfirmation
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
