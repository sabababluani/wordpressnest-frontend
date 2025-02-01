import { Radio } from 'antd';
import styles from './CacheModal.module.scss';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import ModalHeader from '@/app/components/ModalHeader/ModalHeader';

const CacheModal = () => {
  return (
    <div className={styles.mainWrapper}>
      <ModalHeader
        headline={'Clear cache'}
        onClose={() => console.log('Modal closed')}
      />
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
