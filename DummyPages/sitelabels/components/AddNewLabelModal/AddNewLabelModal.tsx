import styles from './AddNewLabelModal.module.scss';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { SharedSiteLabelsPropsInterface } from '../../interfaces/shared-site-labels-props.interfaces';
import ModalHeader from '@/app/components/ModalHeader/ModalHeader';

const AddNewLabelModal = (props: SharedSiteLabelsPropsInterface) => {
  return (
    <div className={styles.wrapper}>
      <ModalHeader headline="Add new label" onClose={props.onClose} />
      <div className={styles.container}>
        <div className={styles.spansContainer}>
          <span className={styles.labels}>Label&apos;s content</span>
          <span className={styles.validate}>Enter up to 20 characters</span>
        </div>
        <input type="text" />
        <div className={styles.buttons}>
          <Button
            backgroundColor={buttonbackgroundColorEnum.grey}
            innerContent="Cancel"
            onClick={props.onClose}
          />
          <Button
            backgroundColor={buttonbackgroundColorEnum.black}
            innerContent="Add new label"
          />
        </div>
      </div>
    </div>
  );
};

export default AddNewLabelModal;
