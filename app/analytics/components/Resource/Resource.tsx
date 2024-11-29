import CurlyBandwidth from './components/CurlyBandWidth/CurlyBandWidth';
import BarMbChart from './components/BarMbChart/BarMbChart';
import ResourceInfoBox from './components/ResourceInfoBox/ResourceInfoBox';
import styles from './Resource.module.scss';
import TopRequestsTable from './components/TopRequestsTable/TopRequestsTable';

const Resource = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <ResourceInfoBox title="Visits" used={900} full={1000} />
        <ResourceInfoBox title="CDN Usage" used={120} full={500} />
        <ResourceInfoBox title="Disk usage" used={450} full={1000} />
        <ResourceInfoBox title="Wordpress sites" used={800} full={1500} />
      </div>
      <div className={styles.curlyPadding}>
        <CurlyBandwidth
          visitsText={'Visits'}
          quantify={'3,908'}
          text={'This section provides an overview of your plan usege'}
        />
      </div>
      <div className={styles.barWrapper}>
        <BarMbChart
          text="The disk space report usage compared to the account limit."
          heading="Disk space"
          quantify={'714 MB'}
          usage
        />
      </div>
      <div className={styles.curlyPadding}>
        <CurlyBandwidth
          visitsText={'Bandwidth'}
          quantify={'351.51 MB'}
          text={
            'The bandwidth report shows the Total data your site has transmitted. Chart reflects GMT/UTC'
          }
        />
      </div>
      <div className={styles.tablePadding}>
        <TopRequestsTable
          heading={'Top requests by bytes'}
          textContent="Top requests by bytes shows which requests have used the most bandwidth"
        />
      </div>
      <div className={styles.lastChild}>
        <TopRequestsTable
          heading={'Top requests by view'}
          textContent="Top requests by views shows the most requested resources on the server"
        />
      </div>
    </div>
  );
};

export default Resource;
