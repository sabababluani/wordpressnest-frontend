'use client';

import styles from './ManualBackup.module.scss';
import ManualBackupTable from './components/ManualBackupTable/ManualBackupTable';

const ManualBackup = (): JSX.Element => {
  return (
    <div className={styles.app}>
      <ManualBackupTable />
    </div>
  );
};

export default ManualBackup;
