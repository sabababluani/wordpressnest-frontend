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
import StepFlowFifth from './components/StepFlowFifth/StepFlowFifth';
import StepFlowSix from './components/StepFlowSix/StepFlowSix';

const RequestMigration: () => JSX.Element | null = (): JSX.Element | null => {
  const [stepFlow, setStepFlow] = useState<number>((): number => {
    const savedStepFlow: string | undefined = Cookies.get('stepFlow');
    return savedStepFlow ? Number(savedStepFlow) : 1;
  });

  const [activeCheckbox, setActiveCheckbox] = useState<number>((): number => {
    const savedCheckbox: string | undefined = Cookies.get('activeCheckbox');
    return savedCheckbox ? Number(savedCheckbox) : 1;
  });

  console.log('33');
  console.log('44');
  console.log('55');

  const [isClient, setIsClient] = useState<boolean>(false);
  const [time, setTime] = useState<string>('');
  const [, setDate] = useState<string>('');
  const [, setTimezone] = useState<string>('');

  useEffect((): void => {
    setIsClient(true);
  }, []);

  useEffect((): void => {
    if (isClient) {
      Cookies.set('stepFlow', stepFlow.toString(), { expires: 1 });
      Cookies.set('activeCheckbox', activeCheckbox.toString(), { expires: 1 });
    }
  }, [stepFlow, activeCheckbox, isClient]);

  const onNextButtonClick: () => void = (): void => {
    setStepFlow((prev: number): number => Math.min(prev + 1, 7));
  };

  const onBackButtonClick: () => void = (): void => {
    setStepFlow((prev: number): number => Math.max(prev - 1, 1));
  };

  const renderStepFlowContent: () => false | JSX.Element | null = ():
    | false
    | JSX.Element
    | null => {
    switch (stepFlow) {
      case 1:
        return (
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
        );
      case 2:
        return (
          <StepFlowSecond
            activedCheckboxNum={(
              index: number | undefined,
            ): string | undefined =>
              Cookies.set(
                'SecondStepsSpecificCheckbox',
                index ? index.toString() : JSON.stringify(undefined),
                { expires: 1 },
              )
            }
          />
        );
      case 3:
        return (
          Number(Cookies.get('SecondStepsSpecificCheckbox')) === 1 && (
            <ThirdStepsContainerBasedCheckboxFirst />
          )
        );
      case 4:
        return <StepFlowFourth />;
      case 5:
        return <StepFlowFifth />;
      case 6:
        return <StepFlowSix />;
      default:
        return null;
    }
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
      {renderStepFlowContent()}
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
