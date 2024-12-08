import Image from 'next/image';
import { buttonbackgroundColorEnum } from './enum/button.enum';
import styles from './Button.module.scss';
import { ButtonDataInterface } from './interfaces/button-props.inteface';

const Button = (props: ButtonDataInterface): JSX.Element => {
  return (
    <div>
      <button
        onClick={props.onClick}
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
                      : styles.backgroundDomainsRed
          } ${props.disableButton && styles.disabledButton}`}
      >
        {props.innerContentIconActive && (
          <Image
            width={24}
            height={24}
            src={props.innerContentIcon!}
            alt="icon"
          />
        )}
        {props.innerContent}
      </button>
    </div>
  );
};

export default Button;
