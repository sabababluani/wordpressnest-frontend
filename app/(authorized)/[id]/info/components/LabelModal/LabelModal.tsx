import React, { ChangeEvent } from 'react';
import styles from './LabelModal.module.scss';
import Button from '@/app/components/Button/Button';
import ExitButton from '../ProxyModule/component/ExitButton/ExitButton';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';

const LabelModal = ({
  onClick,
}: {
  onClick: () => void;
}): React.JSX.Element => {
  const [inputValue, setInputValue] = React.useState<string>('');

  return (
    <div className={styles.mainContainer}>
      <div className={styles.topContainer}>
        <span className={styles.mainCaptionStyle}>Label Site</span>
        <ExitButton onClick={onClick} />
      </div>
      <div className={styles.bottomContainer}>
        <input
          type="text"
          value={inputValue}
          className={styles.inputStyle}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setInputValue(e.target.value)
          }
        />
      </div>
      <div className={styles.furtherBottomContainer}>
        <Button
          onClick={onClick}
          backgroundColor={buttonbackgroundColorEnum.white}
          innerContent={'Cancel'}
        />
        <Button
          backgroundColor={buttonbackgroundColorEnum.black}
          innerContent={'Apply labels'}
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default LabelModal;
