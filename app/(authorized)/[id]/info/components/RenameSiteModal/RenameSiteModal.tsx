import React, { ChangeEvent, useState } from 'react';
import styles from './RenameSiteModal.module.scss';
import Button from '@/app/components/Button/Button';
import ExitButton from '../ProxyModule/component/ExitButton/ExitButton';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { patchData } from '@/app/api/crudService';
import { useParams } from 'next/navigation';

const RenameSiteModal = (props: { onCancel: () => void }) => {
  const { id } = useParams();
  const numberId = +id;
  const [inputValue, setInputValue] = useState('');

  const handleRenameSite = async () => {
    await patchData('wordpress/site-name', numberId, { siteName: inputValue });
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.topContainer}>
        <span className={styles.mainCaptionStyle}>Rename Site</span>
        <ExitButton onClick={props.onCancel} />
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
          onClick={props.onCancel}
          backgroundColor={buttonbackgroundColorEnum.white}
          innerContent={'Cancel'}
        />
        <Button
          backgroundColor={buttonbackgroundColorEnum.black}
          innerContent={'Rename site'}
          onClick={handleRenameSite}
        />
      </div>
    </div>
  );
};

export default RenameSiteModal;
