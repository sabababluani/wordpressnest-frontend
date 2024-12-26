import styles from './page.module.scss';
import PluginTable from '@/app/(authorized)/themesandplugins/components/PluginTable/PluginTable';
import ThemeTable from '@/app/(authorized)/themesandplugins/components/ThemeTable/ThemeTable';

const themesandplugins = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <div>
          <PluginTable />
        </div>
      </div>
      <div className={`${styles.contentWrapper} ${styles.belowWrapper}`}>
        <div>
          <ThemeTable />
        </div>
      </div>
    </div>
  );
};

export default themesandplugins;
