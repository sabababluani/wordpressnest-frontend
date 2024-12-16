'use client';

import Button from '@/app/components/Button/Button';
import styles from './ChangeCdnModal.module.scss';
import Image from 'next/image';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { Radio } from 'antd';

const ChangeCdnModal = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.topContainer}>
        <span className={styles.mainCaptionStyle}>Change CDN</span>
        <Image
          src="/icons/close-mini.svg"
          alt="close"
          width={24}
          height={24}
          className={styles.close}
        />
      </div>
      <div className={styles.middleContainer}>
        <span className={styles.middleContainersCaption}>
          How do you want to set edge caching for jigaro Live?
        </span>
        <div className={styles.radioWrapperAndCaption}>
          <Radio.Group defaultValue="enable">
            <div className={styles.radioWrapper}>
              <Radio value="enable">
                <span className={styles.radioSpan}>Enable</span>
              </Radio>
              <Radio value="disable">
                <span className={styles.radioSpan}>Disable</span>
              </Radio>
            </div>
          </Radio.Group>
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
            innerContent="Change CDN"
          />
        </div>
      </div>
    </div>
  );
};

export default ChangeCdnModal;
