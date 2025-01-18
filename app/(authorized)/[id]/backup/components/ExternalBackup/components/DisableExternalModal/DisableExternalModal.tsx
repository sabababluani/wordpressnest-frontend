import { useState } from 'react';
import { Checkbox } from 'antd';
import styles from './DisableExternalModal.module.scss';
import Image from 'next/image';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { DisableExternalModalPropsInterface } from './interfaces/disable-external-modal-props.interface';
import { CheckboxChangeEvent } from 'antd/es/checkbox';

const DisableExternalModal = (props: DisableExternalModalPropsInterface) => {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const handleCheckboxChange = (e: CheckboxChangeEvent) => {
    setIsCheckboxChecked(e.target.checked);
  };

  const toggleCheckbox = () => {
    setIsCheckboxChecked((prev) => !prev);
  };

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.headerContainer}>
          <span className={styles.headline}>Disable AWS backups</span>
        </div>
        <Image
          src="/icons/close-mini.svg"
          alt="close"
          width={24}
          height={24}
          onClick={props.onClose}
        />
      </div>
      <div className={styles.container}>
        <p>
          You&apos;ve chosen to disable AWS backups. Your next invoice will
          still include External backups from the time of your last invoice
          until now.
        </p>
        <div className={styles.checkboxWrapper}>
          <div className={styles.check}>
            <Checkbox
              checked={isCheckboxChecked}
              onChange={handleCheckboxChange}
            />
          </div>
          <span onClick={toggleCheckbox}>
            I acknowledge that the current available backups will be deleted
          </span>
        </div>
        <div className={styles.buttons}>
          <Button
            backgroundColor={buttonbackgroundColorEnum.grey}
            innerContent="Cancel"
            onClick={props.onClose}
          />
          <Button
            backgroundColor={buttonbackgroundColorEnum.black}
            innerContent="Remove AWS Backups"
            disableButton={!isCheckboxChecked}
            onClick={props.onSuccess}
          />
        </div>
      </div>
    </div>
  );
};

export default DisableExternalModal;
