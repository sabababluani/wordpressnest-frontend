import { StepFlowPropsInterface } from '../../interface/step-flow-interface.ts';
import styles from './StepFlow.module.scss';

const StepFlow = (props: StepFlowPropsInterface) => {
  return (
    <div className={styles.mainContainer}>
      {[
        "Introduction",
        "Set migration source",
        "Source details",
        "Site details",
        "Our settings",
        "Review & submit",
      ].map((caption: string, index: number) => {
        const isActive = props.stepNum === index + 1;
        const isPastStep = props.stepNum > index + 1;
        const stepClass = isActive
          ? styles.activeStep
          : isPastStep
          ? styles.completedStep
          : styles.inactiveStep;

        return (
          <div key={index} className={`${styles.stepWrapper} ${stepClass}`}>
            <span className={styles.captionStyle}>{caption}</span>
            <div
              className={`${styles.stepIconWrapper} ${
                isActive ? styles.ActiveFontColor : styles.inActiveFontColor
              }`}
            >
              <div
                className={`${styles.circleStyle} ${
                  isPastStep ? styles.activeStyle : styles.inActiveStyle
                }`}
              ></div>
              <div
                className={`${styles.lineStyle} ${
                  isPastStep ? styles.activeStyle : styles.inActiveStyle
                }`}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StepFlow;
