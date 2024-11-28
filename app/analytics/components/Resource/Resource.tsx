import CurlyBandwidth from '../CurlyBandWidth/CurlyBandWidth';
import BarMbChart from './components/BarMbChart/BarMbChart';
import ResourceInfoBox from './components/ResourceInfoBox/ResourceInfoBox';
import styles from './Resource.module.scss';

const Resource = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <ResourceInfoBox title="Visits" used={300} full={1000} />
        <ResourceInfoBox title="CDN Usage" used={120} full={500} />
        <ResourceInfoBox title="Disk usage" used={450} full={1000} />
        <ResourceInfoBox title="Wordpress sites" used={800} full={1500} />
      </div>
      <CurlyBandwidth
        visitsText={'Visits'}
        quantify={'3,908'}
        text={'This section provides an overview of your plan usege'}
      />
      <BarMbChart />
      <CurlyBandwidth
        visitsText={'Bandwidth'}
        quantify={'351.51 MB'}
        text={
          'The bandwidth report shows the Total data your site has transmitted. Chart reflects GMT/UTC'
        }
      />
    </div>
  );
};

export default Resource;
