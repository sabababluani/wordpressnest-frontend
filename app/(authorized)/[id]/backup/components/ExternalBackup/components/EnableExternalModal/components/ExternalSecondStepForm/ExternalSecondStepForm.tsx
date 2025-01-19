import { Checkbox, Radio } from 'antd';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import styles from './ExternalSecondStepForm.module.scss';
import { ExternalSecondStepFormPropsInterface } from './interfaces/external-second-step-form-props.interface';

const ExternalSecondStepForm = (
  props: ExternalSecondStepFormPropsInterface,
) => {
  return (
    <div className={styles.secondStep}>
      <div className={styles.secondStepContainer}>
        <span>What do you want to backup?</span>
        <div className={styles.checkContainer}>
          <div className={styles.checkWrapper}>
            <div className={styles.check}>
              <Checkbox
                checked={props.watch('files')}
                onChange={(e) => props.setValue('files', e.target.checked)}
              ></Checkbox>
            </div>
            <span>Files</span>
          </div>
          <div className={styles.checkWrapper}>
            <div className={styles.check}>
              <Checkbox
                checked={props.watch('database')}
                onChange={(e) => props.setValue('database', e.target.checked)}
              ></Checkbox>
            </div>
            <span>Database</span>
          </div>
        </div>
      </div>
      <div className={styles.secondStepContainer}>
        <span>How often do you want to backup?</span>
        <div className={styles.types}>
          <Radio.Group
            value={props.watch('uploadFrequency')}
            onChange={(e) => props.setValue('uploadFrequency', e.target.value)}
          >
            <div className={styles.radios}>
              <Radio value="monthly">Monthly</Radio>
              <Radio value="weekly">Weekly</Radio>
            </div>
          </Radio.Group>
        </div>
      </div>
      <span className={styles.nextBackup}>
        Your next backup will start tomorrow at 5:00 AM
      </span>
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

export default ExternalSecondStepForm;
