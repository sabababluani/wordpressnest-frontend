import ClientApiTable from './components/ClientApiTable/ClientApiTable';
import GeoApiTable from './components/GeoApiTable/GeoApiTable';
import styles from './GeoApi.module.scss';

const GeoApi = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <GeoApiTable />
        <GeoApiTable />
      </div>
      <div className={styles.containerWrapper}>
        <div className={styles.clientContainer}>
          <ClientApiTable />
        </div>
        <div className={styles.clientContainer}>
          <ClientApiTable />
        </div>
      </div>
    </div>
  );
};

export default GeoApi;
