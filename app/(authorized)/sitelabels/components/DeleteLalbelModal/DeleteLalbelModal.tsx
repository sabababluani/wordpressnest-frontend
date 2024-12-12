import Button from '@/app/components/Button/Button';
import styles from './DeleteLalbelModal.module.scss';
import Image from 'next/image';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { SharedSiteLabelsPropsInterface } from '../../interfaces/shared-site-labels-props.interfaces';

const DeleteLalbelModal = (props: SharedSiteLabelsPropsInterface) => {
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
        <div className={styles.spansContainer}>
          <span className={styles.labels}>
            Are you sure you want to delete the label{' '}
            <span className={styles.bold}>jigaro2</span>?
          </span>
        </div>
        <div className={styles.buttons}>
          <Button
            backgroundColor={buttonbackgroundColorEnum.grey}
            innerContent="Cancel"
            onClick={props.onClose}
          />
          <Button
            backgroundColor={buttonbackgroundColorEnum.red}
            innerContent="Delete"
          />
        </div>
      </div>
    </div>
  );
};

export default DeleteLalbelModal;
