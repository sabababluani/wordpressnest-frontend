import { StepFlowPropsInterface } from '../../interface/step-flow-props.interface.js';
import { useEffect, useState } from 'react';
import styles from './StepFlow.module.scss';

const StepFlow = (props: StepFlowPropsInterface): JSX.Element => {
  const [currentStep, setCurrentStep] = useState<number>(props.stepNum);

  useEffect(() => {
    setCurrentStep(props.stepNum);
  }, [props.stepNum]);

  const steps: string[] = [
    'Introduction',
    'Set migration source',
    'Source details',
    'Site details',
    'Our settings',
    'Review & submit',
  ];

  return (
    <div className={styles.mainContainer}>
      {steps.map((caption: string, index: number) => {
        const isActive = currentStep === index + 1;
        const isPastStep = currentStep > index + 1;

        return (
          <div
            key={index}
            className={`${styles.stepWrapper} ${
              isActive
                ? styles.activeStep
                : isPastStep
                  ? styles.completedStep
                  : styles.inactiveStep
            }`}
          >
            <span className={styles.captionStyle}>{caption}</span>
            <div
              className={
                isActive || isPastStep
                  ? styles.stepIconWrapper
                  : styles.inactiveStepIconWrapper
              }
            >
              <div
                className={`${styles.circleStyle} ${
                  isActive || isPastStep
                    ? styles.activeStyle
                    : styles.inActiveStyle
                }`}
              ></div>

              <div
                className={`${styles.lineStyle} ${
                  isPastStep ? styles.completedLine : styles.inActiveLine
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
