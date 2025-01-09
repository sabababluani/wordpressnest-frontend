import styles from './SystemGeneratedBackup.module.scss';
import SystemGeneratedTable from './components/SystemGeneratedTable/SystemGeneratedTable';

const SystemGeneratedBackup = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1>System generated backups</h1>
        <div className={styles.text}>
          <span>We automatically create backups before specific actions.</span>
          <span>
            We store your system generated backups for 2 hours to 14 days
            depending on its type.
          </span>
        </div>
      </div>
      <SystemGeneratedTable />
    </div>
  );
};

export default SystemGeneratedBackup;
