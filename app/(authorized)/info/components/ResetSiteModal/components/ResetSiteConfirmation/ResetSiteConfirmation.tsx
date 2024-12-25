import { useState } from 'react';
import { Checkbox } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import styles from './ResetSiteConfirmation.module.scss';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { ResetSiteConfirmatioPropsInterface } from './interfaces/reset-site-confirmation-props.interface';

const ResetSiteConfirmation = (props: ResetSiteConfirmatioPropsInterface) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div className={styles.wrapper}>
      <span className={styles.deleted}>
        By resetting <span className={styles.title}>{props.siteTitle}</span>,
        all of its files and database will be destroyed.
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
          <Checkbox
            checked={isChecked}
            onChange={(e: CheckboxChangeEvent) =>
              setIsChecked(e.target.checked)
            }
          />
        </div>
        <div>
          <span className={styles.acknowledge}>
            I acknowledge that this is not recoverable{' '}
          </span>
        </div>
      </div>
      <div className={styles.siteTitleContainer}>
        <span>
          Enter the text <span className={styles.title}>{props.siteTitle}</span>{' '}
          here to reset your site:
        </span>
        <input
          type="text"
          value={props.siteTitleInputField}
          onChange={props.onChange}
        />
      </div>
      <div className={styles.buttons}>
        <Button
          backgroundColor={buttonbackgroundColorEnum.grey}
          innerContent="Back"
          onClick={props.onBack}
        />
        <Button
          backgroundColor={buttonbackgroundColorEnum.black}
          innerContent="Reset WordPress site"
          disableButton={!(isChecked && props.validation)}
          onClick={props.onClick}
        />
      </div>
    </div>
  );
};

export default ResetSiteConfirmation;
