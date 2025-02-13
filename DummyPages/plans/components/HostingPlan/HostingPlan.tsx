import Button from '@/app/components/Button/Button';
import styles from './HostingPlan.module.scss';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';

const HostingPlan = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.headline}>
          WordPress Hosting plan and add-ons
        </span>
        <Button
          innerContent="Update plan"
          backgroundColor={buttonbackgroundColorEnum.whitelight}
        />
      </div>
      <div className={styles.container}>
        <div className={styles.sectionWrapper}>
          <div className={styles.section}>
            <span className={styles.title}>Name</span>
            <span className={styles.info}>Single 35k Monthly</span>
          </div>
          <div className={styles.border}></div>
        </div>
        <div className={styles.sectionWrapper}>
          <div className={styles.section}>
            <span className={styles.title}>Type</span>
            <span className={styles.info}>Monthly</span>
          </div>
          <div className={styles.border}></div>
        </div>
        <div className={styles.sectionWrapper}>
          <div className={styles.section}>
            <span className={styles.title}>Price</span>
            <span className={styles.info}>35USD</span>
          </div>
          <div className={styles.border}></div>
        </div>
        <div className={styles.sectionWrapper}>
          <div className={styles.section}>
            <span className={styles.title}>Renewal date</span>
            <span className={styles.info}>Nov 26, 2024</span>
          </div>
          <div className={styles.border}></div>
        </div>
      </div>
    </div>
  );
};

export default HostingPlan;
