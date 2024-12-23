import { useState } from 'react';
import { Checkbox } from 'antd';
import styles from './DeleteSiteModal.module.scss';
import Image from 'next/image';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { DeleteSiteModalPropsInterface } from './interfaces/delete-site-modal-props.interface';

const DeleteSiteModal = (props: DeleteSiteModalPropsInterface) => {
  const [checkbox1, setCheckbox1] = useState<boolean>(false);
  const [checkbox2, setCheckbox2] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');

  const isButtonEnabled =
    checkbox1 && checkbox2 && inputValue === 'jigaro-live';

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.headline}>Add Domains</span>
        <Image
          src="/icons/close-mini.svg"
          alt="close"
          width={24}
          height={24}
          className={styles.close}
          onClick={props.onClose}
        />
      </div>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.heading}>
            By deleting jigaro, all of its data will be destroyed. This is not
            recoverable.
          </span>
          <span className={styles.confirm}>
            Confirm that you understand the following:
          </span>
        </div>
        <div className={styles.check}>
          <div className={styles.checkbox}>
            <Checkbox
              checked={checkbox1}
              onChange={(e) => setCheckbox1(e.target.checked)}
            />
          </div>
          <div>
            <span className={styles.deleted}>
              Files and database for{' '}
              <span className={styles.title}>jigaro</span> will be deleted
            </span>
          </div>
        </div>
        <div className={styles.check}>
          <div className={styles.checkbox}>
            <Checkbox
              checked={checkbox2}
              onChange={(e) => setCheckbox2(e.target.checked)}
            />
          </div>
          <div>
            <span className={styles.deleted}>
              Removing this site does not cancel the WordPress hosting plan
            </span>
          </div>
        </div>
        <div className={styles.inputContainer}>
          <span className={styles.deleted}>
            Enter the text <span className={styles.title}>jigaro-live</span>{' '}
            here to reset your site:
          </span>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <div className={styles.buttons}>
          <Button
            backgroundColor={buttonbackgroundColorEnum.grey}
            innerContent="Back"
            onClick={props.onClose}
          />
          <Button
            backgroundColor={buttonbackgroundColorEnum.black}
            innerContent="Delete WordPress site"
            disableButton={!isButtonEnabled}
          />
        </div>
      </div>
    </div>
  );
};

export default DeleteSiteModal;
