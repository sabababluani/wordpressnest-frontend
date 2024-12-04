import styles from './ResponseStats.module.scss';
import StatsBox from './components/StatsBox/StatsBox';

const ResponseStats = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <h2>Response stats</h2>
      </div>
      <div className={styles.container}>
        <StatsBox quantify={'2,513'} info={'Redirects'} />
        <StatsBox quantify={'17.1%'} info={'Error ratio'} />
        <StatsBox quantify={'16,625'} info={'Errors'} />
        <StatsBox quantify={'82.5%'} info={'Success rate'} />
      </div>
    </div>
  );
};

export default ResponseStats;
