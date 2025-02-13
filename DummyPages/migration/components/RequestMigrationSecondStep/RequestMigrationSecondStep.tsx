import { Checkbox } from 'antd';
import styles from './RequestMigrationSecondStep.module.scss';
import { useState } from 'react';

const RequestMigrationSecondStep = (): JSX.Element => {
  const [activeCheckboxIndex, setActiveCheckboxIndex] = useState<number | null>(
    1,
  );

  const checkboxDetector = (index: number): void => {
    if (activeCheckboxIndex === index) {
      return;
    }
    setActiveCheckboxIndex(index);
  };

  const onButtonClick = (): void => {
    console.log('////');
  };

  return (
    <div className={styles.mainContainer}>
      <div
        className={`${styles.containerWrapper} ${activeCheckboxIndex == 1 ? styles.containerWrapperActive : styles.containerWrapperInActive}`}
        onClick={() => checkboxDetector(1)}
      >
        <div className={styles.checkboxWrapper}>
          <Checkbox checked={activeCheckboxIndex == 1} />
        </div>
        <div className={styles.captionAndDescriptionWrapper}>
          <span className={styles.captionStyle}>Migrate from another host</span>
          <span className={styles.descriptionStyle}>
            Moving your site from your previous hosting provider to your Hosting
            account.
          </span>
        </div>
      </div>
      <div
        className={`${styles.containerWrapper} ${activeCheckboxIndex == 2 ? styles.containerWrapperActive : styles.containerWrapperInActive}`}
        onClick={() => checkboxDetector(2)}
      >
        <div className={styles.checkboxWrapper}>
          <Checkbox checked={activeCheckboxIndex == 2} />
        </div>
        <div className={styles.captionAndDescriptionWrapper}>
          <div className={styles.captionAndButtonWrapper}>
            <span className={styles.captionStyle}>Migrate from backup</span>
            <button className={styles.buttonStyle} onClick={onButtonClick}>
              Choose
            </button>
          </div>
          <span className={styles.descriptionStyle}>
            We can migrate your site using several different backup sources and
            formats.
          </span>
        </div>
      </div>
    </div>
  );
};

export default RequestMigrationSecondStep;
