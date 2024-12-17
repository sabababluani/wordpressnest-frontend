import TabsAnt from '@/app/components/Tabs/Tabs';
import styles from './Other.module.scss';
import FTP from '../FTP/FTP';
import SFTP from '../SFTP/SFTP';
import SSH from '../SSH/SSH';

const Other = () => {
  return (
    <div className={styles.mainWrapper}>
      <span className={styles.mainCaptionStyle}>
        Enter the URL and access details to your hosting panel below. Your
        hosting panel is where you currently log in to manage your domains and
        other hosting details. Depending on your host they may call the hosting
        panel <span className={styles.boldContent}>cPanel, WHM, Plesk</span> or
        other names.
      </span>
      <div className={styles.inputAndCaptionWrapper}>
        <div className={styles.usernameWrapper}>
          <span className={styles.inputLabel}>Username</span>
          <input type="text" className={styles.usernameInputStyle} />
        </div>
        <div className={styles.passwordWrapper}>
          <span className={styles.inputLabel}>Password</span>
          <input type="password" className={styles.passwordInputStyle} />
        </div>
      </div>
      <div className={styles.tabs}>
        <TabsAnt
          withoutBorder
          uniqueKey={'ftpsftpssh'}
          tabNames={['FTP', 'SFTP', 'SSH']}
          tabContent={[
            <FTP key={'ftp'} />,
            <SFTP key={'sftp'} />,
            <SSH key={'ssh'} />,
          ]}
        />
      </div>
    </div>
  );
};

export default Other;
