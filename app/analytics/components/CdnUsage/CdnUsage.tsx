import CurlyBandwidth from '../Resource/components/CurlyBandWidth/CurlyBandWidth';
import TopRequestsTable from '../Resource/components/TopRequestsTable/TopRequestsTable';
import styles from './CdnUsage.module.scss';
import FilesFromSitesTable from './components/FilesFromSitesTable/FilesFromSitesTable';

const CdnUsage = () => {
  return (
    <div className={styles.wrapper}>
      <CurlyBandwidth
        visitsText={'CDN bandwidth'}
        quantify={'4.51 MB'}
        text={
          'This is the amount of data served by the CDN cache. Chart reflects GMT/UTC time.'
        }
      />
      <div className={styles.cachingContainer}>
        <CurlyBandwidth
          visitsText={'Edge cache bandwidth'}
          quantify={'351.51 MB'}
          text={
            'This is the amount of data served by the edge cache. Unlimited edge cache bandwidth is included in all Hosting plans. Chart reflects GMT/UTC time.'
          }
        />
      </div>
      <div className={styles.filesContainer}>
        <div className={styles.filesTableWrapper}>
          <FilesFromSitesTable />
        </div>
        <div className={styles.secondFilesTableWrapper}>
          <FilesFromSitesTable />
        </div>
        <TopRequestsTable heading={'Top file extensions by bytes'} />
      </div>
    </div>
  );
};

export default CdnUsage;
