'use client';

import styles from './ClearCacheModal.module.scss';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { Checkbox } from 'antd';
import Image from 'next/image';
import { useState } from 'react';

const ClearCacheModal = () => {
  const [isCheckboxActive, setIsCheckboxActive] = useState<boolean>(true);

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.topContainer}>
        <span className={styles.mainCaptionStyle}>Clear cache</span>
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
        <span>
          Witch types of cache you want to clear for 2 selected environments?
        </span>
        <div className={styles.checkboxWrapper}>
          <div className={styles.checkboxWrapperStyle}>
            <Checkbox
              checked={isCheckboxActive}
              onClick={() => setIsCheckboxActive((prev: boolean) => !prev)}
            />
            <span className={styles.cacheClearStyle}>Clear server cache</span>
          </div>
          <div className={styles.checkboxWrapperStyle}>
            <Checkbox
              checked={isCheckboxActive}
              onClick={() => setIsCheckboxActive((prev: boolean) => !prev)}
            />
            <span className={styles.cacheClearStyle}>Clear CDN cache</span>
          </div>
          <div className={styles.checkboxWrapperStyle}>
            <Checkbox
              checked={isCheckboxActive}
              onClick={() => setIsCheckboxActive((prev: boolean) => !prev)}
            />
            <span className={styles.cacheClearStyle}>Clear edge cache</span>
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
            innerContent="Clear cache"
          />
        </div>
      </div>
    </div>
  );
};

export default ClearCacheModal;