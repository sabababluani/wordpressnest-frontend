import TabsAnt from '@/app/components/Tabs/Tabs';
import styles from './Vultr.module.scss';
import VultrSsh from './components/VultrSsh/VultrSsh';

const Vultr = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.content}>
        We will need to access your WPX Hosting account to export your site data
        for movign it over to hyour hosting account. if you have 2- factor
        authetication enabled, plaze disable it now for the time of migration
      </span>
      <div className={styles.wrapper}>
        <div className={styles.inputAndCaptionWrapper}>
          <div className={styles.serverWrapper}>
            <span className={styles.inputLabel}>WPX Hosting username</span>
            <input type="text" className={styles.serverInputStyle} />
          </div>
          <div className={styles.serverWrapper}>
            <span className={styles.inputLabel}>WPX Hosting password</span>
            <input type="password" className={styles.serverInputStyle} />
          </div>
        </div>
      </div>
      <TabsAnt
        withoutBorder
        uniqueKey={'vultrssh'}
        tabNames={['SSH']}
        tabContent={[<VultrSsh key={'liquidftp'} />]}
      />
    </div>
  );
};

export default Vultr;
