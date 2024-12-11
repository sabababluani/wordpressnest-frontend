import { Select } from 'antd';
import styles from './ThirdStepsContainerBasedCheckboxFirst.module.scss';

const ThirdStepsContainerBasedCheckboxFirst = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.descriptionWrapper}>
        <span className={styles.mainCaptionStyle}>
          Migrate from another host
        </span>
        <span className={styles.descriptionStyle}>
          Moving your site from your previous hosting provider to your Hosting
          account.
        </span>
      </div>
      <Select placeholder={'Select a hosting provider'} />
    </div>
  );
};

export default ThirdStepsContainerBasedCheckboxFirst;
