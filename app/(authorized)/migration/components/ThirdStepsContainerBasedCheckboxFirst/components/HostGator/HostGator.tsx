import TabsAnt from '@/app/components/Tabs/Tabs';
import styles from './HostGator.module.scss';
import HostGatorPortal from './components/HostGatorPortal/HostGatorPortal';
import Cpanel from './components/Cpanel/Cpanel';
import Sftp from './components/Sftp/Sftp';

const HostGator = () => {
  return (
    <div className={styles.mainWrapper}>
      <span>
        We will need to access your <u>HostGator Portal</u> or cPanel to export
        your site data for moving it over to your Kinsta account. If you have a
        WordPress managed hosting plan at HostGator it is okay to provide SFTP
        connection details.
      </span>
      <TabsAnt
        withoutBorder
        uniqueKey={'tabsAnt'}
        tabNames={['HostGator Portal', 'cPanel', 'SFTP']}
        tabContent={[
          <HostGatorPortal key={'hostgatorportal'} />,
          <Cpanel key={'cpanel'} />,
          <Sftp key={'sftp'} />,
        ]}
      />
    </div>
  );
};

export default HostGator;
