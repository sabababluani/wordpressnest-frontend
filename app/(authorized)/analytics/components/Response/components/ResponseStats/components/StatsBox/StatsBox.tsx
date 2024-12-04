import styles from './StatsBox.module.scss';
import { StatsBoxPropsInterface } from './interfaces/stats-box-props.interface';

const StatsBox = (props: StatsBoxPropsInterface) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.quantify}>{props.quantify}</span>
      <span className={styles.info}>{props.info}</span>
    </div>
  );
};

export default StatsBox;
