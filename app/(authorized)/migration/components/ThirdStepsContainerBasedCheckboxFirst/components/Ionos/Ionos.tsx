import TabsAnt from '@/app/components/Tabs/Tabs';
import styles from './Ionos.module.scss';
import IonosFtp from './IonosFtp/IonosFtp';
import IonosSftp from './IonosSftp/IonosSftp';

const Ionos = () => {
  return (
    <div className={styles.mainContainer}>
      <span className={styles.mainCaptionStyle}>
        We will need to access your <u>Ionos account</u> to export your site
        data for moving it over to your Kinsta account. If you have 2-factor
        authentication enabled, please disable it now for the time of the
        migration.
      </span>
      <div className={styles.inputStyle}>
        <div className={styles.wrapper}>
          <span className={styles.inputsLabelStyle}>Ionos username</span>
          <input type="text" className={styles.inputContainer} />
        </div>
        <div className={styles.wrapper}>
          <span className={styles.inputsLabelStyle}>Ionos password</span>
          <input type="text" className={styles.inputContainer} />
        </div>
      </div>
      <TabsAnt
        withoutPadding
        uniqueKey={'ionos'}
        withoutBorder
        tabNames={['FTP', 'SFTP']}
        tabContent={[
          <IonosFtp key="ionosfftp" />,
          <IonosSftp key="ionossftp" />,
        ]}
      />
    </div>
  );
};

export default Ionos;
