'use client';

import { useState } from 'react';
import SelectionsWrapper from './components/SelectionsWrapper/SelectionsWrapper';
import StepFlow from './components/StepFlow/StepFlow';
import styles from './page.module.scss';
import FirstCheckContainer from './components/FirstChecksContainer/FirstChecksContainer';
import MainBottomContaiener from './components/MainBottomContainer/MainBottomContainer';
import SecondChecksContainer from './components/SecondChecksContainer/SecondChecksContainer';
import RequestMigrationSecondStep from './components/RequestMigrationSecondStep/RequestMigrationSecondStep';

const RequestMigration = () => {
  const [stepFlow, setStepFlow] = useState<number>(1);
  const [activeCheckbox, setActiveCheckbox] = useState<number | null>(0);
  const [, setDate] = useState<string>('');
  const [time, setTime] = useState<string>('');
  const [, setTimezone] = useState<string>('');


  return (
    <div className={styles.mainWrapper}>
      <div className={styles.unChangableWrapper}>
        <div className={styles.mainCaptionAndStepsWrapper}>
          <span className={styles.mainCaptionStyle}>Request a Migration</span>
          <StepFlow stepNum={stepFlow} />
        </div>
      </div>
      {
        stepFlow == 2 ?
          <>
            <RequestMigrationSecondStep />
          </>
          :
          <>
            <SelectionsWrapper
              onCheckboxChange={(activeIndex: number | null) =>
                setActiveCheckbox(activeIndex)
              }
              initialActiveCheckbox={activeCheckbox}
            />
             <>
              <div className={styles.mainMiddleContainer}>
                {activeCheckbox === 1 && (
                  <>
                    <FirstCheckContainer />
                  </>
                )}
                {activeCheckbox === 2 && (
                  <>
                    <SecondChecksContainer
                      timeValue={time}
                      date={(value: string): void => setDate(value)}
                      time={(value: string): void => setTime(value)}
                      timezone={(value: string): void => setTimezone(value)}
                    />
                  </>
                )}
                {activeCheckbox === 3 && (
                  <>
                    <div className={styles.thirdCheckboxBottomContainer}>
                      <span className={styles.thirdChecksMainCaptionStyle}>
                        We offer unlimited free migrations from all hosting providers
                        including: A2 Hosting, Bluehost, Cloudways, DreamHost, Flywheel,
                        GoDaddy, HostGator, Pagely, Pantheon, SiteGround, tsoHost, WP
                        Engine, or WPX Hosting.
                      </span>
                    </div>
                  </>
                )}
              </div>
              <MainBottomContaiener />
            </>
          </>
      }
      <div className={styles.buttonsWrapper}>
        <div className={styles.buttonsInnerWrapper}>
          {stepFlow == 1 ? null : (
            <>
              <button
                className={styles.backButtonStyle}
                onClick={() =>
                  setStepFlow((prev: number) => (prev == 1 ? prev : prev - 1))
                }
              >
                Back
              </button>
            </>
          )}
          <button
            className={styles.NextButtonStyle}
            onClick={() => {
              setStepFlow((prev: number) => (prev + 1 > 5 ? prev : prev + 1));
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestMigration;
