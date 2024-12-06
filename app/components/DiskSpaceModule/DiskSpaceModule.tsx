'use client';

import { useState } from 'react';
import Steps from '../Steps/Steps';
import styles from './DiskSpaceModule.module.scss';
import Image from 'next/image';
import Button from '../Button/Button';
import { buttonbackgroundColorEnum } from '../Button/enum/button.enum';
import WhatWillHappenContainer from './components/WhatWillHappenContainer/WhatWillHappenContainer';
import PriceDetailsContainer from './components/PriceDetailsContainer/PriceDetailsContainer';
import { diskModulePropsInterface } from './interface/diskspace-module-interface';

const DiskSpaceModule = (props: diskModulePropsInterface): JSX.Element => {
  const [, setIsModuleVisible] = useState<boolean>(true);
  const [beforeContinueActive, setBeforeContinueActive] =
    useState<boolean>(false);
  const [coefficient, setCoefficient] = useState<number>(1);

  const handleCloseModule = () => {
    setIsModuleVisible(false);
    if (props.moduleDisable) {
      props.moduleDisable();
    }
  };

  const handleContinueClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setBeforeContinueActive(true);
    if (beforeContinueActive == true) {
      props.moduleDisable();
    }
  };

  const handleCancelClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setBeforeContinueActive(false);
  };

  return (
    <div
      className={styles.mainContainer}
      onClick={() => {
        props.moduleDisable();
      }}
    >
      <div
        className={styles.modalContainer}
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
      >
        <div className={styles.topContainer}>
          <div className={styles.captionWrapper}>
            <span className={styles.mainCaption}>
              Add additional disk space
            </span>
            <div className={styles.exitIconWrapper} onClick={handleCloseModule}>
              <Image
                className={styles.exitIconStyle}
                width={9}
                height={9}
                src={'icons/exitIcon.svg'}
                alt={'exit icon'}
              />
            </div>
          </div>
        </div>
        {beforeContinueActive ? (
          <div className={styles.middleContainerBeforeContinue}>
            <Steps confirmation={beforeContinueActive} />
            <WhatWillHappenContainer />
            <PriceDetailsContainer coefficient={coefficient} />
          </div>
        ) : (
          <div className={styles.middleContainer}>
            <Steps confirmation={false} />
            <span className={styles.middleCaptionStyle}>
              Your WordPress Hosting plan includes 10 GB of disk space, shared
              across all sites. The quantity you choose here extends that limit.
            </span>
            <div className={styles.quantityMainWrapper}>
              <div className={styles.quantityWrapper}>
                <div className={styles.quantityWrappersFirstContainerWrapper}>
                  <div className={styles.quantityWrappersFirstContainer}>
                    <span className={styles.quantityStyle}>Quantity</span>
                    <div className={styles.multiplicationWrapper}>
                      <button
                        className={styles.minusStyle}
                        onClick={() =>
                          setCoefficient((prev: number) =>
                            prev - 1 < 1 ? 1 : prev - 1
                          )
                        }
                      >
                        <Image
                          width={8}
                          height={20}
                          src={'icons/minus.svg'}
                          alt={'minus icon'}
                        />
                      </button>
                      <div className={styles.coefficientstyle}>
                        {coefficient}
                      </div>
                      <button
                        className={styles.plusStyle}
                        onClick={() =>
                          setCoefficient((prev: number) => prev + 1)
                        }
                      >
                        <Image
                          width={8}
                          height={20}
                          src={'icons/plus.svg'}
                          alt={'plus icon'}
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <div className={styles.quantityWrappersSecondContainerWrapper}>
                  <div className={styles.gbCaptionWrapper}>
                    <span className={styles.gbCaptionStyle}>
                      x 20 GB additional disk space
                    </span>
                    <span className={styles.gbMonthCaptionStyle}>
                      {20 * (coefficient + 2)} USD / month
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className={styles.bottomContainer}>
          <Button
            disableButton={!beforeContinueActive}
            innerContent="Cancel"
            backgroundColor={buttonbackgroundColorEnum.grey}
            onClick={handleCancelClick}
          />
          <Button
            innerContent="Continue"
            backgroundColor={buttonbackgroundColorEnum.black}
            onClick={handleContinueClick}
          />
        </div>
      </div>
    </div>
  );
};

export default DiskSpaceModule;
