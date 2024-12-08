import styles from './StepFlow.module.scss';

interface www {
  stepNum: number;
}

const StepFlow = (props: www) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.stepWrapper}>
        <span className={styles.captionStyle}>Set migration source</span>
        <div className={styles.stepIconWrapper}>
          <div className={`${styles.circleStyle} ${styles.activeStyle}`}></div>
          <div className={`${styles.lineStyle} ${styles.activeStyle}`}></div>
        </div>
      </div>
      <div className={styles.stepWrapper}>
        <span className={styles.captionStyle}>Source details</span>
        <div
          className={`${styles.stepIconWrapper} ${props.stepNum > 1 ? styles.ActiveFontColor : styles.inActiveFontColor}`}
        >
          <div
            className={`${styles.circleStyle} ${props.stepNum > 1 ? styles.activeStyle : styles.inActiveStyle}`}
          ></div>
          <div
            className={`${styles.lineStyle} ${props.stepNum > 1 ? styles.activeStyle : styles.inActiveStyle}`}
          ></div>
        </div>
      </div>
      <div className={styles.stepWrapper}>
        <span className={styles.captionStyle}>Site details</span>
        <div
          className={`${styles.stepIconWrapper} ${props.stepNum > 2 ? styles.ActiveFontColor : styles.inActiveFontColor}`}
        >
          <div
            className={`${styles.circleStyle} ${props.stepNum > 2 ? styles.activeStyle : styles.inActiveStyle}`}
          ></div>
          <div
            className={`${styles.lineStyle} ${props.stepNum > 2 ? styles.activeStyle : styles.inActiveStyle}`}
          ></div>
        </div>
      </div>
      <div className={styles.stepWrapper}>
        <span className={styles.captionStyle}>Our settings</span>
        <div
          className={`${styles.stepIconWrapper} ${props.stepNum > 3 ? styles.ActiveFontColor : styles.inActiveFontColor}`}
        >
          <div
            className={`${styles.circleStyle} ${props.stepNum > 3 ? styles.activeStyle : styles.inActiveStyle}`}
          ></div>
          <div
            className={`${styles.lineStyle} ${props.stepNum > 3 ? styles.activeStyle : styles.inActiveStyle}`}
          ></div>
        </div>
      </div>
      <div className={styles.stepWrapper}>
        <span className={styles.captionStyle}>Review & submit</span>
        <div
          className={`${styles.stepIconWrapper} ${props.stepNum > 4 ? styles.ActiveFontColor : styles.inActiveFontColor}`}
        >
          <div
            className={`${styles.circleStyle} ${props.stepNum > 4 ? styles.activeStyle : styles.inActiveStyle}`}
          ></div>
          <div
            className={`${styles.lineStyle} ${props.stepNum > 4 ? styles.activeStyle : styles.inActiveStyle}`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default StepFlow;
