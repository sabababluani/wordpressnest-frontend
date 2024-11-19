import styles from './page.module.scss';
import Tabs from '@/app/components/Tabs/Tabs';
import DailyBackup from '@/app/backup/components/DailyBackup/DailyBackup';
import ManualBackup from '@/app/backup/components/ManualBackup/ManualBackup';

const backup = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Tabs
        uniqueKey={'backup'}
        tabNames={['Daily', 'Manual']}
        tabContent={[
          <div key={'daily'} className={styles.content}>
            <DailyBackup />
          </div>,
          <div key={'manual'}>
            <ManualBackup />
          </div>,
        ]}
      />
    </div>
  );
};

export default backup;
