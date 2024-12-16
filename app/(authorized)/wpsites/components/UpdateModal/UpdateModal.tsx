'use client';

import Button from '@/app/components/Button/Button';
import styles from './UpdateModal.module.scss';
import Image from 'next/image';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { Checkbox } from 'antd';
import { useState } from 'react';

const UpdateModal = () => {
  const [isCheckboxActive, setIsCheckboxActive] = useState<boolean>(true);
  const [isActiveSecondCheckbox, setIsActiveSecondCheckbox] =
    useState<boolean>(true);
  const [isActiveThirdCheckbox, setIsActiveThirdCheckbox] =
    useState<boolean>(true);

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.topContainer}>
        <span className={styles.mainCaptionStyle}>Update plugin</span>
        <div className={styles.exitButtonWrapper}>
          <Image
            width={9}
            height={9}
            src={'icons/cross.svg'}
            alt={'exit button'}
          />
        </div>
      </div>
      <div className={styles.middleContainer}>
        <span className={styles.middleContainersMainCaption}>
          Which plugins do you want to update for 2 selected environments? All
          selected plugins will be updated to their respective latest versions
          indicated below
        </span>
        <div className={styles.checkboxAndStatisticWrapper}>
          <div className={styles.firstStatisticWrapper}>
            <div className={styles.checkboxWrapper}>
              <Checkbox
                checked={isCheckboxActive}
                onClick={() => {
                  setIsCheckboxActive((prev: boolean) => !prev);
                  setIsActiveSecondCheckbox((prev: boolean) => !prev);
                  setIsActiveThirdCheckbox((prev: boolean) => !prev);
                }}
              />
            </div>
            <div className={styles.pluginCaptionStyle}>Plugin</div>
            <div className={styles.updatingStyle}>Needs updating</div>
            <div className={styles.latestStyle}>Latest</div>
          </div>
          <div className={styles.secondStatisticWrapper}>
            <div className={styles.checkboxWrapper}>
              <Checkbox
                checked={isActiveSecondCheckbox}
                onClick={() =>
                  setIsActiveSecondCheckbox((prev: boolean) => !prev)
                }
              />
            </div>
            <div className={styles.yoastSeoStyle}>Yoast SEO</div>
            <div className={styles.environmentStyle}>1 environments </div>
            <div className={styles.latestStyle}>22.6</div>
          </div>
          <div className={styles.thirdStatisticWrapper}>
            <div className={styles.checkboxWrapper}>
              <Checkbox
                checked={isActiveThirdCheckbox}
                onClick={() =>
                  setIsActiveThirdCheckbox((prev: boolean) => !prev)
                }
              />
            </div>
            <div className={styles.akismetStyle}>
              Akismet Anti-spam spam protection
            </div>
            <div className={styles.environmentStyle}>1 environments </div>
            <div className={styles.latestStyle}>22.6</div>
          </div>
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.buttonsWrapper}>
          <Button
            backgroundColor={buttonbackgroundColorEnum.grey}
            innerContent="Back"
          />
          <Button
            backgroundColor={buttonbackgroundColorEnum.black}
            innerContent="Update plugins"
          />
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
