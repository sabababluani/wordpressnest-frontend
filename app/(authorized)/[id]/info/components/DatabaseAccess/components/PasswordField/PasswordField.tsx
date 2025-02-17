import { useState } from 'react';
import { PasswordField } from '../../interfaces/data-base-access-props.interface';
import styles from './PasswordField.module.scss';
import Image from 'next/image';

const PasswordFieldComp = (props: PasswordField) => {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const onClickEyeIcon = () => {
    setIsVisiblePassword((prev) => !prev);
  };

  return (
    <div className={styles.mainContainer}>
      <span className={styles.captionStyle}>{props.caption}</span>
      <div className={styles.mainWrapper}>
        <div className={styles.innerWrapper}>
          <span>{isVisiblePassword ? props.innerContent : '*****'}</span>
          <div className={styles.iconsWrapper}>
            <Image
              height={24}
              width={24}
              src={
                isVisiblePassword ? props.additionalHref2 : props.additionalHref
              }
              alt={'eye closed icon'}
              onClick={onClickEyeIcon}
            />
            <Image
              height={24}
              width={24}
              src={props.additionalHref3}
              alt={'copy icon'}
              onClick={props.onClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordFieldComp;
