import { useState } from 'react';
import { PasswordField } from '../../interfaces/data-base-access-props.interface';
import styles from './PasswordField.module.scss';
import Image from 'next/image';

const PasswordFieldComp = (props: PasswordField) => {
  const [isOccured, setIsOccured] = useState<boolean>(false);

  const onClickEyeIcon = () => {
    setIsOccured(!isOccured);
  };

  return (
    <div className={styles.mainContainer}>
      <span className={styles.captionStyle}>{props.caption}</span>
      <div className={styles.mainWrapper}>
        <div className={styles.innerWrapper}>
          <input
            className={styles.inputStyle}
            type={isOccured ? 'text' : 'password'}
          />
          <div className={styles.iconsWrapper}>
            <Image
              height={24}
              width={24}
              src={props.additionalHref}
              alt={'eye closed icon'}
              onClick={onClickEyeIcon}
            />
            <Image
              height={24}
              width={24}
              src={props.additionalHref2}
              alt={'copy icon'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordFieldComp;
