import ActivityTable from './components/ActivityTable/ActivityTable';
import styles from './page.module.scss';

const Useractivity = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.headline}>User Activity </span>
      </div>
      <div className={styles.container}>
        <ActivityTable />
      </div>
    </div>
  );
};

export default Useractivity;
