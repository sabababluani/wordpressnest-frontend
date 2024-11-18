import styles from './page.module.scss';
import Search from "@/app/components/Search/Search";
import Button from "@/app/components/Button/Button";
import {buttonbackgroundColorEnum} from "@/app/components/Button/enum/button.enum";
import PluginTable from "@/app/themesandplugins/components/PluginTable/PluginTable";
import ThemeTable from "@/app/themesandplugins/components/ThemeTable/ThemeTable";

const themesandplugins = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <h2>Installed Plugins</h2>
        <div className={styles.container}>
          <Search placeholder={'Search By Plugin name '} isPadded />
          <div className={styles.reloadWrap}>
            <span>Update 2 Days Ago</span>
            <Button
              backgroundColor={buttonbackgroundColorEnum.grey}
              innerContent={'Reload'}
              innerContentIconActive
              innerContentIcon={'icons/reload.svg'}
            />
          </div>
        </div>
        <div>
          <PluginTable />
        </div>
      </div>
      <div className={`${styles.contentWrapper} ${styles.belowWrapper}`}>
        <h2>Installed Themes</h2>
        <div className={styles.container}>
          <Search placeholder={'Search By Theme name'} isPadded />
          <div className={styles.reloadWrap}>
            <span>Update 2 Days Ago</span>
            <Button
              backgroundColor={buttonbackgroundColorEnum.grey}
              innerContent={'Reload'}
              innerContentIconActive
              innerContentIcon={'icons/reload.svg'}
            />
          </div>
        </div>
        <div>
          <ThemeTable />
        </div>
      </div>
    </div>
  );
};

export default themesandplugins;
