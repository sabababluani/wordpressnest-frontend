import BarMbChart from '../Resource/components/BarMbChart/BarMbChart';
import CurlyBandwidth from '../Resource/components/CurlyBandWidth/CurlyBandWidth';
import TopRequestsTable from '../Resource/components/TopRequestsTable/TopRequestsTable';
import styles from './Performance.module.scss';

const Performance = () => {
  return (
    <div className={styles.wrapper}>
      <CurlyBandwidth
        visitsText={'Average PHP + MySQL response time'}
        quantify={'4.51 MB'}
        text={''}
      />
      <div className={styles.cachingContainer}>
        <CurlyBandwidth
          visitsText={'Edge cache bandwidth'}
          quantify={'5.25 MB'}
          text={
            'This is the amount of data served by the edge cache. Unlimited edge cache bandwidth is included in all Hosting plans. Chart reflects GMT/UTC time.'
          }
        />
      </div>
      <div>
        <TopRequestsTable
          heading={'Top files by requests'}
          textContent="These are the most requested files served by the CDN."
        />
      </div>
      <BarMbChart quantify="714" heading="AJAX usage" />
      <BarMbChart quantify="362" heading="PHP memory limit reached" />
    </div>
  );
};

export default Performance;
