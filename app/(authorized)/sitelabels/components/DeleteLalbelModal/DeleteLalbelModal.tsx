import Button from '@/app/components/Button/Button';
import styles from './DeleteLalbelModal.module.scss';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { SharedSiteLabelsPropsInterface } from '../../interfaces/shared-site-labels-props.interfaces';
import ModalHeader from '@/app/components/ModalHeader/ModalHeader';

const DeleteLalbelModal = (props: SharedSiteLabelsPropsInterface) => {
  return (
    <div className={styles.wrapper}>
      <ModalHeader headline="Add Domain" onClose={props.onClose} />
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
