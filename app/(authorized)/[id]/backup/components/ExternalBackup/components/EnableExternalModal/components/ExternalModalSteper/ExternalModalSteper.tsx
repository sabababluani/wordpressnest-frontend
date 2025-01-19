import React from 'react';
import styles from './ExternalModalSteper.module.scss';
import { ExternalModalSteperPropsInterface } from './interfaces/external-modal-steper-props.interface';

const ExternalModalSteper = (props: ExternalModalSteperPropsInterface) => {
  return (
    <div className={styles.container}>
      {props.steps.map((step, index) => (
        <div key={index} className={styles.steper}>
          <span>{step.label}</span>
          <div className={styles.progress}>
            <div
              className={
                step.isActive || step.isCompleted
                  ? styles.circle
                  : styles.grayCircle
              }
            ></div>
            {index < props.steps.length && (
              <div
                className={
                  step.isActive || step.isCompleted
                    ? styles.line
                    : styles.lineCircle
                }
              ></div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExternalModalSteper;
