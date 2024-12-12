import Button from '@/app/components/Button/Button';
import styles from './RenameLabelModal.module.scss';
import Image from 'next/image';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { SharedSiteLabelsPropsInterface } from '../../interfaces/shared-site-labels-props.interfaces';

const RenameLabelModal = (props: SharedSiteLabelsPropsInterface) => {
  return (
    <div>
      <div className={styles.header}>
        <span className={styles.headline}>Rename label</span>
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
          <span className={styles.labels}>Edit label`s content</span>
          <span className={styles.validate}>
            The label will be updated on all sites using this label
          </span>
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
            innerContent="Rename Label"
          />
        </div>
      </div>
    </div>
  );
};

export default RenameLabelModal;
