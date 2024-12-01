import DiskSpace from './components/DiskSpace/DiskSpace';
import HostingPlan from './components/HostingPlan/HostingPlan';
import PlanAnalytics from './components/PlanAnalytics/PlanAnalytics';
import styles from './page.module.scss';

const Plans = () => {
  return (
    <div className={styles.container}>
      <span className={styles.headline}>Plans & subscriptions</span>
      <HostingPlan />
      <DiskSpace />
      <PlanAnalytics />
    </div>
  );
};

export default Plans;
