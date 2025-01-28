'use client';

import styles from './LabelModal.module.scss';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { Checkbox } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox/Checkbox';
import Image from 'next/image';
import { useState } from 'react';

const LabelModal = ({
  siteName,
  onClick,
}: {
  siteName: string;
  onClick: () => void;
}) => {
  const [isCheckboxActive, setIsCheckboxActive] = useState<boolean>(true);

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.header}>
        <span className={styles.headline}>Label sites</span>
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
        <div className={styles.checkbox}>
          <Checkbox
            checked={isCheckboxActive}
            onChange={(e: CheckboxChangeEvent) =>
              setIsCheckboxActive(e.target.checked)
            }
          />
          <span className={styles.siteNameStyle}>{siteName}</span>
        </div>
        <div>
          <button className={styles.buttonStyle}>
            <Image
              width={10}
              height={10}
              src={'/icons/Group444.svg'}
              alt={'icon'}
            />
            <span className={styles.buttonInnerContentStyle}>
              Add new label
            </span>
          </button>
        </div>
        <span className={styles.manageCatpionStyle}>
          Manage all label company settings
        </span>
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

export default LabelModal;
