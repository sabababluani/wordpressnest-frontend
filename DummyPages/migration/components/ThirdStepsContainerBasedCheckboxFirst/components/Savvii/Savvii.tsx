import TabsAnt from '@/app/components/Tabs/Tabs';
import styles from './Savvii.module.scss';
import SavviiSFTP from './components/SavviiSFTP/SavviiSFTP';

const Savvii = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <p className={styles.text}>
          We will need to access your WPX Hosting account to export your site
          data for movign it over to hyour hosting account. if you have 2-
          factor authetication enabled, plaze disable it now for the time of
          migration
        </p>
        <div className={styles.inputWrapper}>
          <div className={styles.inputContainer}>
            <span className={styles.headline}>Savvii username</span>
            <input type="text" className={styles.input} />
          </div>
          <div className={styles.inputContainer}>
            <span className={styles.headline}>Savvii password</span>
            <input type="text" className={styles.input} />
          </div>
        </div>
      </div>
      <TabsAnt
        withoutBorder
        uniqueKey={'SavviiSFTP'}
        tabNames={['SFTP']}
        tabContent={[<SavviiSFTP key="SavviiSFTP" />]}
      />
    </div>
  );
};

export default Savvii;
