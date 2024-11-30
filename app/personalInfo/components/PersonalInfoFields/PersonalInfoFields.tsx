import { Select } from 'antd';
import styles from './PersonalInfoFields.module.scss';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';

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
        <div className={styles.inputContainer}>
          <span>Email address *</span>
          <input type="text" />
        </div>
        <div className={styles.inputContainer}>
          <span>Country *</span>
          <Select className={styles.select} />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.inputContainer}>
          <span>Current Password *</span>
          <input type="text" />
        </div>
        <div className={styles.inputContainer}>
          <span>New Password *</span>
          <input type="text" />
        </div>
      </div>
      <div className={styles.buttons}>
        <div className={styles.grayButton}>
          <Button
            backgroundColor={buttonbackgroundColorEnum.grey}
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
