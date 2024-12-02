import Search from '../components/Search/Search';
import SitesSelect from '../components/SitesSelect/SitesSelect';
import ActivityTable from './components/ActivityTable/ActivityTable';
import styles from './page.module.scss';

const Useractivity = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.headline}>User Activity</span>
      </div>
      <div className={styles.container}>
        <div className={styles.searchWrapper}>
          <div className={styles.select}>
            <Search placeholder="Search Sites" />
          </div>
          <div className={styles.select}>
            <SitesSelect />
          </div>
        </div>
        <ActivityTable />
      </div>
    </div>
  );
};

export default Useractivity;
