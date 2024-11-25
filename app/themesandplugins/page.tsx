import styles from './page.module.scss';
import Search from '@/app/components/Search/Search';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import PluginTable from '@/app/themesandplugins/components/PluginTable/PluginTable';
import ThemeTable from '@/app/themesandplugins/components/ThemeTable/ThemeTable';

const themesandplugins = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <h2>Installed Plugins</h2>
        <div>
          <PluginTable />
        </div>
      </div>
      <div className={`${styles.contentWrapper} ${styles.belowWrapper}`}>
        <h2>Installed Themes</h2>
        <div>
          <ThemeTable />
        </div>
      </div>
    </div>
  );
};

export default themesandplugins;
