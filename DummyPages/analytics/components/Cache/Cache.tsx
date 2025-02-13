import PieChartBox from '../Response/components/PieChartBox/PieChartBox';
import { labels } from './cache-dummy/cache-dummy-data';
import styles from './Cache.module.scss';
import CacheBarChart from './components/CacheBarChart/CacheBarChart';
import { CacheBarChartData } from './components/cacheDummy/cache-dummy';
import CacheTable from './components/CacheTable/CacheTable';

const Cache = () => {
  return (
    <div className={styles.wrapper}>
      <CacheBarChart
        datasets={CacheBarChartData}
        labels={labels}
        heading={'Cache component stack'}
      />
      <div className={styles.container}>
        <PieChartBox />
        <CacheTable />
      </div>
    </div>
  );
};

export default Cache;
