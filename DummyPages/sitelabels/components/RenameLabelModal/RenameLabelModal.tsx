import Button from '@/app/components/Button/Button';
import styles from './RenameLabelModal.module.scss';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { SharedSiteLabelsPropsInterface } from '../../interfaces/shared-site-labels-props.interfaces';
import { useState } from 'react';
import ModalHeader from '@/app/components/ModalHeader/ModalHeader';

const RenameLabelModal = (props: SharedSiteLabelsPropsInterface) => {
  const [inputValue, setInputValue] = useState<string>('');

  return (
    <div>
      <ModalHeader headline="Rename Label" onClose={props.onClose} />
      <div className={styles.container}>
        <div className={styles.spansContainer}>
          <span className={styles.labels}>Edit label`s content</span>
          <span className={styles.validate}>
            The label will be updated on all sites using this label
          </span>
        </div>
        <input type="text" onChange={(e) => setInputValue(e.target.value)} />
        <div className={styles.buttons}>
          <Button
            backgroundColor={buttonbackgroundColorEnum.grey}
            innerContent="Cancel"
            onClick={props.onClose}
          />
          <Button
            backgroundColor={buttonbackgroundColorEnum.black}
            innerContent="Rename Label"
            disableButton={!inputValue.trim()}
          />
        </div>
      </div>
    </div>
  );
};

export default RenameLabelModal;
