import styles from './AddNewLabelModal.module.scss';
import Image from 'next/image';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { SharedSiteLabelsPropsInterface } from '../../interfaces/shared-site-labels-props.interfaces';

const AddNewLabelModal = (props: SharedSiteLabelsPropsInterface) => {
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
          <span className={styles.labels}>Label`s content</span>
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
