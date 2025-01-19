import React from 'react';
import styles from './ExternalFirstStepForm.module.scss';
import { Checkbox } from 'antd';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { ExternalFirstStepFormPropsInterface } from './interfaces/external-first-step-form-props.interface';

const ExternalFirstStepForm = (props: ExternalFirstStepFormPropsInterface) => {
  return (
    <div className={styles.firstStep}>
      <div className={styles.inputContainer}>
        <span>AWS S3 bucket name</span>
        <input
          type="text"
          {...props.register('bucket')}
          placeholder="Enter bucket name"
        />
      </div>
      <div className={styles.inputContainer}>
        <span>AWS access key ID</span>
        <input
          type="text"
          {...props.register('accessKey')}
          placeholder="Enter access key ID"
        />
      </div>
      <div className={styles.inputContainer}>
        <span>AWS secret access key</span>
        <input
          type="text"
          {...props.register('accessSecretKey')}
          placeholder="Enter secret access key"
        />
      </div>
      <div className={styles.checkWrapper}>
        <div className={styles.check}>
          <Checkbox
            checked={props.watch('createSubfolder')}
            onChange={(e) =>
              props.setValue('createSubfolder', e.target.checked)
            }
          ></Checkbox>
        </div>
        <span>Create Zddzma Subfolder</span>
      </div>
      <div className={styles.buttons}>
        <Button
          backgroundColor={buttonbackgroundColorEnum.grey}
          innerContent="Cancel"
          onClick={props.onCancel}
        />
        <Button
          backgroundColor={buttonbackgroundColorEnum.black}
          innerContent="Next"
          onClick={props.onNext}
        />
      </div>
    </div>
  );
};

export default ExternalFirstStepForm;
