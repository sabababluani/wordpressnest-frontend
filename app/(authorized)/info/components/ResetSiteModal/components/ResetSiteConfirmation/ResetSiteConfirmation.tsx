import { Checkbox } from 'antd';
import styles from './ResetSiteConfirmation.module.scss';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';

const ResetSiteConfirmation = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.deleted}>
        By resetting <span className={styles.title}>jigaro</span> all of its
        files, database will be destroyed.
      </span>
      <div>
        <div className={styles.list}>
          <div className={styles.circle}></div>
          <span className={styles.textContent}>
            A new WordPress is being installed on Live environment
          </span>
        </div>
        <div className={styles.list}>
          <div className={styles.circle}></div>
          <span className={styles.textContent}>
            Staging Environment will be deleted
          </span>
        </div>
        <div className={styles.list}>
          <div className={styles.circle}></div>
          <span className={styles.textContent}>
            Premium Staging Environment will be deleted
          </span>
        </div>
      </div>
      <div className={styles.check}>
        <div className={styles.checkbox}>
          <Checkbox></Checkbox>
        </div>
        <div>
          <span className={styles.acknowledge}>
            Install Easy Digital Downloads
          </span>
        </div>
      </div>
      <div className={styles.siteTitleContainer}>
        <span>WordPress admin username</span>
        <input type="text" />
      </div>
      <div className={styles.buttons}>
        <Button
          backgroundColor={buttonbackgroundColorEnum.grey}
          innerContent="Back"
        />
        <Button
          backgroundColor={buttonbackgroundColorEnum.black}
          innerContent="Reset WordPress site"
        />
      </div>
    </div>
  );
};

export default ResetSiteConfirmation;
