import styles from './Responce.module.scss';
import PieChartBox from './components/PieChartBox/PieChartBox';
import ResponseStats from './components/ResponseStats/ResponseStats';

const Response = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <PieChartBox />
        <ResponseStats />
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Response;
