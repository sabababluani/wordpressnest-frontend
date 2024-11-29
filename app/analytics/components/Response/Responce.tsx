import styles from './Responce.module.scss';
import ErrorsBarChart from './components/ErrorsBarChart/ErrorsBarChart';
import PieChartBox from './components/PieChartBox/PieChartBox';
import ResponseStats from './components/ResponseStats/ResponseStats';
import TopErrorsTable from './components/TopErrorsTable/TopErrorsTable';
import { Error300 } from './dummys/error300-dummy';
import { Error400 } from './dummys/error400-dummy';
import { Error500 } from './dummys/error500-dummy';

const labels = [
  ['Sun', '11/3'],
  ['Sun', '11/3'],
  ['Sun', '11/3'],
  ['Sun', '11/3'],
  ['Sun', '11/3'],
  ['Sun', '11/3'],
  ['Sun', '11/3'],
  ['Sun', '11/3'],
  ['Sun', '11/3'],
  ['Sun', '11/3'],
  ['Sun', '11/3'],
  ['Sun', '11/3'],
  ['Sun', '11/3'],
  ['Sun', '11/3'],
  ['Sun', '11/3'],
  ['Sun', '11/3'],
  ['Sun', '11/3'],
  ['Sun', '11/3'],
  ['Sun', '11/3'],
  ['Sun', '11/3'],
];

const Response = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <PieChartBox />
        <ResponseStats />
      </div>
      <div className={styles.errorsContainer}>
        <ErrorsBarChart
          datasets={Error500}
          labels={labels}
          heading="500 error breakdown"
        />
        <ErrorsBarChart
          datasets={Error400}
          labels={labels}
          heading="400 error breakdown"
        />
        <ErrorsBarChart
          datasets={Error300}
          labels={labels}
          heading="300 error breakdown"
        />
      </div>
      <div className={styles.table}>
        <TopErrorsTable />
      </div>
    </div>
  );
};

export default Response;
