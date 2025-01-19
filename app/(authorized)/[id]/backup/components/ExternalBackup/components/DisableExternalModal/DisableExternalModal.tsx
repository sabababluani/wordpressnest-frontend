import { useState } from 'react';
import { Checkbox } from 'antd';
import styles from './DisableExternalModal.module.scss';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { DisableExternalModalPropsInterface } from './interfaces/disable-external-modal-props.interface';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import ModalHeader from '@/app/components/ModalHeader/ModalHeader';

const DisableExternalModal = (props: DisableExternalModalPropsInterface) => {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const handleCheckboxChange = (e: CheckboxChangeEvent) => {
    setIsCheckboxChecked(e.target.checked);
  };

  const toggleCheckbox = () => {
    setIsCheckboxChecked((prev) => !prev);
  };

  return (
    <>
      <ModalHeader headline={'Disable AWS backups'} onClose={props.onClose} />
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
    </>
  );
};

export default DisableExternalModal;
