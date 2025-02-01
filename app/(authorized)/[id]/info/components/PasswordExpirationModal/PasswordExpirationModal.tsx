import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { Radio, RadioChangeEvent } from 'antd';
import styles from './PasswordExpirationModal.module.scss';
import Image from 'next/image';
import { useState } from 'react';
import Button from '@/app/components/Button/Button';

const PasswordExpirationModal = ({ onClick }: { onClick: () => void }) => {
  const [isRadioActive, setIsRadioActive] = useState<string>('');

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.header}>
        <span className={styles.headline}>Change password expiration</span>
        <Image
          onClick={onClick}
          src="/icons/close-mini.svg"
          width={24}
          height={24}
          alt="close"
          className={styles.close}
        />
      </div>
      <div className={styles.middleContainer}>
        <Radio.Group
          onChange={(e: RadioChangeEvent) => setIsRadioActive(e.target.value)}
          value={isRadioActive}
        >
          <div className={styles.radioLabelmainWrapper}>
            <div className={styles.wrapper1}>
              <div className={styles.types}>
                <Radio value="">None</Radio>
              </div>
            </div>
            <div className={styles.wrapper1}>
              <div className={styles.types}>
                <Radio value="24hour">24 Hours</Radio>
              </div>
            </div>
            <div className={styles.wrapper1}>
              <div className={styles.types}>
                <Radio value="7day">7 Days</Radio>
              </div>
            </div>
            <div className={styles.wrapper1}>
              <div className={styles.types}>
                <Radio value="30day">30 Days</Radio>
              </div>
            </div>
            <div className={styles.wrapper1}>
              <div className={styles.types}>
                <Radio value="90day">90 Days</Radio>
              </div>
            </div>
          </div>
        </Radio.Group>
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.buttonsWrapper}>
          <Button
            onClick={onClick}
            backgroundColor={buttonbackgroundColorEnum.grey}
            innerContent="Cancel"
          />
          <Button
            backgroundColor={buttonbackgroundColorEnum.black}
            innerContent="Apply labels"
          />
        </div>
      </div>
    </div>
  );
};

export default PasswordExpirationModal;
