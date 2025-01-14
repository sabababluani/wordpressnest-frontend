'use client';

import Image from 'next/image';
import styles from './Button.module.scss';
import { Button as AntButton } from 'antd';
import { ButtonDataInterface } from './interfaces/button-props.inteface';
import { buttonbackgroundColorEnum } from './enum/button.enum';

const Button = (props: ButtonDataInterface): JSX.Element => {
  const handleClick = (e: React.MouseEvent) => {
    if (props.onClick) props.onClick(e);
    if (props.setLoading) props.setLoading(true);
  };

  return (
    <div className={styles.buttonWrapper}>
      <AntButton
        loading={props.loading}
        onClick={handleClick}
        className={` 
          ${styles.buttonStyle} 
          ${
            props.backgroundColor === buttonbackgroundColorEnum.white
              ? styles.backgroundWhiteColor
              : props.backgroundColor === buttonbackgroundColorEnum.black
                ? styles.backgroundBlackColor
                : props.backgroundColor === buttonbackgroundColorEnum.red
                  ? styles.backgroundRedColor
                  : props.backgroundColor === buttonbackgroundColorEnum.grey
                    ? styles.backgroundGreyColor
                    : props.backgroundColor ===
                        buttonbackgroundColorEnum.greyBold
                      ? styles.backgroundGreyBoldColor
                      : props.backgroundColor ===
                          buttonbackgroundColorEnum.whitelight
                        ? styles.backgroundWhiteLightColor
                        : styles.backgroundDomainsRed
          }
          ${props.disableButton && styles.disabledButton} 
          ${props.buttonActive && styles.active}`}
        disabled={props.disableButton}
      >
        {props.innerContentIconActive && props.innerContentIcon && (
          <Image
            width={24}
            height={24}
            src={props.innerContentIcon}
            alt="icon"
          />
        )}
        {props.innerContent}
      </AntButton>
    </div>
  );
};

export default Button;
