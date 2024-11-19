import Image from 'next/image';
import styles from './DatabaseAccess.module.scss';
import Button from "@/app/components/Button/Button";
import {buttonbackgroundColorEnum} from "@/app/components/Button/enum/button.enum";
import { DataBasePropsInterface } from './interfaces/data-base-access-props.interface';

const DataBaseAccess = (props: DataBasePropsInterface): JSX.Element => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.topContainer}>
        <span className={styles.mainCaptionStyle}>Database access </span>
        <Button
          backgroundColor={buttonbackgroundColorEnum.greyBold}
          innerContent="Open PHP admin"
        />
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.dataBaseWrapper}>
          <span className={styles.dataBaseCaptionStyle}>Database name</span>
          <span className={styles.dataBaseValueStyle}>{props.database}</span>
        </div>
        <div className={styles.dataBaseUsernameWrapper}>
          <span className={styles.dataBaseUsernameCaptionStyle}>
            Database Username
          </span>
          <div className={styles.dataBaseUsernameValueAndButtonWrapper}>
            <span className={styles.dataBaseUsernameValueStyle}>
              {props.databaseUsername}
            </span>
            <button className={styles.pencilButtonStyle}>
              <Image
                width={24}
                height={24}
                src={'icons/pencil.svg'}
                alt={'pencil icon'}
              />
            </button>
          </div>
        </div>
        <div className={styles.dataBasePasswordWrapper}>
          <span className={styles.dataBasePasswordCaptionStyle}>
            Database password
          </span>
          <span className={styles.dataBasePasswordValueStyle}>
            {props.databasePassword}
          </span>
        </div>
        <div className={styles.ipWrapper}>
          <span className={styles.ipCaptionStyle}>Database Username</span>
          <div className={styles.ipAndButtonWrapper}>
            <span className={styles.ipValueStyle}>{props.ip}</span>
            <button className={styles.pencilButtonStyle}>
              <Image
                width={24}
                height={24}
                src={'icons/pencil.svg'}
                alt={'pencil icon'}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataBaseAccess;
