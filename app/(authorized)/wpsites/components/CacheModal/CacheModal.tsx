import { Radio } from 'antd';
import styles from './CacheModal.module.scss';
import Image from 'next/image';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';

const CacheModal = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.header}>
        <span className={styles.headline}>Clear cache</span>
        <Image
          src="/icons/close-mini.svg"
          width={24}
          height={24}
          alt="close"
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
            innerContent="Change edge caching"
          />
        </div>
      </div>
    </div>
  );
};

export default CacheModal;
