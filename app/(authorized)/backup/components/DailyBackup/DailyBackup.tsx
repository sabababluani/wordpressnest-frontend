'use client';

import styles from './DailyBackup.module.scss';
import DailyBackupTable from './components/DailyBackupTable/DailyBackupTable';

const DailyBackup = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <h1>Daily Backup</h1>
      <p>
        We automatically back up your site every day. Each daily backup will be
        stored for 14 days.
      </p>
      <div>
        <DailyBackupTable />
      </div>
    </div>
  );
};

export default DailyBackup;
