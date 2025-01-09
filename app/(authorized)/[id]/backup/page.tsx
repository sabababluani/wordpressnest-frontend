import styles from './page.module.scss';
import Tabs from '@/app/components/Tabs/Tabs';
import HourlyBackup from './components/HourlyBackup/HourlyBackup';
import ExternalBackup from './components/ExternalBackup/ExternalBackup';
import SystemGeneratedBackup from './components/SystemGeneratedBackup/SystemGeneratedBackup';
import DownloadBackup from './components/DownloadBackup/DownloadBackup';
import DailyBackup from './components/DailyBackup/DailyBackup';
import ManualBackup from './components/ManualBackup/ManualBackup';

const backup = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Tabs
        uniqueKey={'backup'}
        tabNames={[
          'Daily',
          'Hourly',
          'Manual',
          'System-generated',
          'External',
          'Download',
        ]}
        tabContent={[
          <div key={'daily'} className={styles.content}>
            <DailyBackup />
          </div>,
          <div key={'hourly'}>
            <HourlyBackup />
          </div>,
          <div key={'manual'}>
            <ManualBackup />
          </div>,
          <div key={'system'}>
            <SystemGeneratedBackup />
          </div>,
          <div key={'external'}>
            <ExternalBackup />
          </div>,
          <div key={'download'}>
            <DownloadBackup />
          </div>,
        ]}
      />
    </div>
  );
};

export default backup;
