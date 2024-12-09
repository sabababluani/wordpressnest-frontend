'use client';

import { useEffect, useState } from 'react';
import SelectionsWrapper from './components/SelectionsWrapper/SelectionsWrapper';
import StepFlow from './components/StepFlow/StepFlow';
import styles from './page.module.scss';
import FirstCheckContainer from './components/FirstChecksContainer/FirstChecksContainer';
import MainBottomContainer from './components/MainBottomContainer/MainBottomContainer';
import SecondChecksContainer from './components/SecondChecksContainer/SecondChecksContainer';
import ThirdChecksContainer from './components/ThirdChecksContainer/ThirdChecksContainer';
import StepFlowSecond from './components/StepFlowSecond/StepFlowSecond';
import ThirdStepsContainerBasedCheckboxFirst from './components/ThirdStepsContainerBasedCheckboxFirst/ThirdStepsContainerBasedCheckboxFirst';

const RequestMigration = () => {
  const [stepFlow, setStepFlow] = useState<number>(1);
  const [activeCheckbox, setActiveCheckbox] = useState<number | null>(1);
  const [time, setTime] = useState<string>('');
  const [, setDate] = useState<string>('');
  const [, setTimezone] = useState<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      const savedStepFlow = sessionStorage.getItem('stepFlow');
      if (savedStepFlow) {
        setStepFlow(Number(savedStepFlow));
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      sessionStorage.setItem('stepFlow', stepFlow.toString());
    }
  }, [stepFlow]);

  const onNextButtonClick = (): void => {
    setStepFlow((prev) => (prev + 1 > 5 ? prev : prev + 1));
  };

  const onBackButtonClick = (): void => {
    setStepFlow((prev) => (prev === 1 ? prev : prev - 1));
  };

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.unChangableWrapper}>
        <div className={styles.mainCaptionAndStepsWrapper}>
          <span className={styles.mainCaptionStyle}>Request a Migration</span>
          <StepFlow stepNum={stepFlow} />
        </div>
      </div>
      {stepFlow === 1 && (
        <>
          <SelectionsWrapper
            onCheckboxChange={setActiveCheckbox}
            initialActiveCheckbox={activeCheckbox}
          />
          <div className={styles.mainMiddleContainer}>
            <FirstCheckContainer activeCheckbox={activeCheckbox === 1} />
            <SecondChecksContainer
              timeValue={time}
              date={setDate}
              time={setTime}
              timezone={setTimezone}
              activecheckbox={activeCheckbox === 2}
            />
            <ThirdChecksContainer checkboxActive={activeCheckbox === 3} />
          </div>
          <MainBottomContainer />
        </>
      )}
      {stepFlow === 2 && (
        <StepFlowSecond
          activedCheckboxNum={(index) =>
            sessionStorage.setItem(
              'SecondStepsSpecificCheckbox',
              index ? index.toString() : JSON.stringify(undefined),
            )
          }
        />
      )}
      {stepFlow == 3 &&
        Number(sessionStorage.getItem('SecondStepsSpecificCheckbox')) == 1 && (
          <ThirdStepsContainerBasedCheckboxFirst />
        )}
      <div className={styles.buttonsWrapper}>
        <div className={styles.buttonsInnerWrapper}>
          {stepFlow > 1 && (
            <button
              className={styles.backButtonStyle}
              onClick={onBackButtonClick}
            >
              Back
            </button>
          )}
          <button
            className={styles.NextButtonStyle}
            onClick={onNextButtonClick}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestMigration;
