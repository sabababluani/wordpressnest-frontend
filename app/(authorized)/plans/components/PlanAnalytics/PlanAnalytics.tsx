import Button from '@/app/components/Button/Button';
import styles from './PlanAnalytics.module.scss';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import Cancelplan from '../CancelPlan/CancelPlan';
import ResourceInfoBox from '@/app/(authorized)/analytics/components/Resource/components/ResourceInfoBox/ResourceInfoBox';

const PlanAnalytics = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.headline}>Analytics</span>
      </div>
      <div className={styles.container}>
        <p className={styles.text}>
          Company level usage and analytics Nov 3 - Dec 3.
        </p>
        <Button
          innerContent="Add to plan"
          backgroundColor={buttonbackgroundColorEnum.whitelight}
        />
      </div>
      <div className={styles.analyticsWrapper}>
        <ResourceInfoBox title={'Visits'} used={3557} full={35000} />
        <ResourceInfoBox title={'CDN usage'} used={3557} full={35000} />
        <ResourceInfoBox title={'Disk usage'} used={3557} full={35000} />
        <ResourceInfoBox title={'Wordpress sites'} used={3557} full={35000} />
      </div>
      <div className={styles.planWrapper}>
        <Cancelplan />
      </div>
    </div>
  );
};

export default PlanAnalytics;
