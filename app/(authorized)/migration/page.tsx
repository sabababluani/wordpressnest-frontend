'use client';

import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import SelectionsWrapper from './components/SelectionsWrapper/SelectionsWrapper';
import StepFlow from './components/StepFlow/StepFlow';
import styles from './page.module.scss';
import FirstCheckContainer from './components/FirstChecksContainer/FirstChecksContainer';
import MainBottomContainer from './components/MainBottomContainer/MainBottomContainer';
import SecondChecksContainer from './components/SecondChecksContainer/SecondChecksContainer';
import ThirdChecksContainer from './components/ThirdChecksContainer/ThirdChecksContainer';
import StepFlowSecond from './components/StepFlowSecond/StepFlowSecond';
import ThirdStepsContainerBasedCheckboxFirst from './components/ThirdStepsContainerBasedCheckboxFirst/ThirdStepsContainerBasedCheckboxFirst';
import StepFlowFourth from './components/StepFlowFourth/StepFlowFourth';

const RequestMigration = () => {
  const [stepFlow, setStepFlow] = useState<number>(1);
  const [activeCheckbox, setActiveCheckbox] = useState<number | null>(null);
  const [time, setTime] = useState<string>('');
  const [, setDate] = useState<string>('');
  const [, setTimezone] = useState<string>('');
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const savedStepFlow: string | undefined = Cookies.get('stepFlow');
    const savedCheckbox: string | undefined = Cookies.get('activeCheckbox');

    if (savedStepFlow) {
      setStepFlow(Number(savedStepFlow));
    }

    if (savedCheckbox) {
      setActiveCheckbox(Number(savedCheckbox));
    }
  }, []);

  useEffect(() => {
    if (isClient) {
      Cookies.set('stepFlow', stepFlow.toString(), { expires: 1 });
      if (activeCheckbox !== null) {
        Cookies.set('activeCheckbox', activeCheckbox.toString(), {
          expires: 1,
        });
      }
    }
  }, [stepFlow, activeCheckbox, isClient]);

  const onNextButtonClick = (): void => {
    setStepFlow((prev: number) => (prev + 1 > 5 ? prev : prev + 1));
  };

  const onBackButtonClick = (): void => {
    setStepFlow((prev: number) => (prev === 1 ? prev : prev - 1));
  };

  if (!isClient) {
    return null;
  }

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
          activedCheckboxNum={(index: number | undefined) =>
            Cookies.set(
              'SecondStepsSpecificCheckbox',
              index ? index.toString() : JSON.stringify(undefined),
              { expires: 1 },
            )
          }
        />
      )}
      {stepFlow === 3 &&
        Number(Cookies.get('SecondStepsSpecificCheckbox')) === 1 && (
          <ThirdStepsContainerBasedCheckboxFirst />
        )}
      {stepFlow == 4 && (
        <>
          <StepFlowFourth />
        </>
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
