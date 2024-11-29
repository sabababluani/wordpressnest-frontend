import styles from './ResponseStats.module.scss';
import StatsBox from './components/StatsBox/StatsBox';

const ResponseStats = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <h2>Response stats</h2>
      </div>
      <div className={styles.container}>
        <StatsBox />
        <StatsBox />
        <StatsBox />
        <StatsBox />
      </div>
    </div>
  );
};

export default ResponseStats;
