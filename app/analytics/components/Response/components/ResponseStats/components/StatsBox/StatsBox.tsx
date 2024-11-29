import styles from './StatsBox.module.scss';

const StatsBox = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.quantify}>2455</span>
      <span className={styles.info}>Redirects</span>
    </div>
  );
};

export default StatsBox;
