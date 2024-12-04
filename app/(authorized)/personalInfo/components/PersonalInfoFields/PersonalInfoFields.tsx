import { Select } from 'antd';
import styles from './PersonalInfoFields.module.scss';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import Image from 'next/image';

const PersonalInfoFields = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.inputContainer}>
          <span>
            First Name <span>*</span>
          </span>
          <input type="text" placeholder="Novatori" />
        </div>
        <div className={styles.inputContainer}>
          <span>Last Name *</span>
          <input type="text" placeholder="Magaria" />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.emailContainer}>
          <span>
            Email address <span>*</span>
          </span>
          <div className={styles.emailField}>
            <Image src={'/icons/mail.svg'} alt="mail" width={20} height={20} />
            <input type="email" placeholder="Novatorimagaria@gmail.com" />
          </div>
        </div>
        <div className={styles.inputContainer}>
          <span>
            Country <span>*</span>
          </span>
          <Select className={styles.select} />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.passwordContainer}>
          <span>Current Password</span>
          <div className={styles.passwordField}>
            <input type="password" />
            <Image
              src={'/icons/passwordedit.svg'}
              alt="mail"
              width={20}
              height={20}
            />
          </div>
        </div>
        <div className={styles.passwordContainer}>
          <span>New Password</span>
          <div className={styles.passwordField}>
            <input type="password" />
            <Image
              src={'/icons/passwordedit.svg'}
              alt="mail"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
      <div className={styles.buttons}>
        <div className={styles.grayButton}>
          <Button
            backgroundColor={buttonbackgroundColorEnum.white}
            innerContent="Cancel"
          />
        </div>
        <div className={styles.blackButton}>
          <Button
            backgroundColor={buttonbackgroundColorEnum.black}
            innerContent="Save"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoFields;
