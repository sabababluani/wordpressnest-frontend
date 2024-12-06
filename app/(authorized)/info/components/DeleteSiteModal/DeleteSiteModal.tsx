import { Checkbox } from 'antd';
import styles from './DeleteSiteModal.module.scss';
import Image from 'next/image';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';

const DeleteSiteModal = () => {
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
            <Checkbox></Checkbox>
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
            <Checkbox></Checkbox>
          </div>
          <div>
            <span className={styles.deleted}>
              Removing this site does not cancel the wordpress hosting plan
            </span>
          </div>
        </div>
        <div className={styles.inputContainer}>
          <span className={styles.deleted}>
            Enter the text <span className={styles.title}>jigaro-live</span>{' '}
            here to reset your site:
          </span>
          <input />
        </div>
        <div className={styles.buttons}>
          <Button
            backgroundColor={buttonbackgroundColorEnum.grey}
            innerContent="Back"
          />
          <Button
            backgroundColor={buttonbackgroundColorEnum.black}
            innerContent="Reset WordPress site"
          />
        </div>
      </div>
    </div>
  );
};

export default DeleteSiteModal;
