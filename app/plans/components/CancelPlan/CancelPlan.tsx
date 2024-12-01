import Button from '@/app/components/Button/Button';
import styles from './Cancelplan.module.scss';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';

const Cancelplan = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.headline}>Cancel Hosting plan</span>
        <Button
          innerContent="Cancel plan"
          backgroundColor={buttonbackgroundColorEnum.red}
        />
      </div>
      <div className={styles.container}>
        <p className={styles.text}>
          Yu can intiates cancellation of the plan here. The subscription will
          still be avaliable until the end of the current billing period
          (November 26, 2024), but on that date it will not renew.
        </p>
        <p className={styles.text}>
          At the time of cancellation, all wordpress sites and all dns records
          of this account will be permanetly deleted.
          <span className={styles.boldText}>We cannot undo this action or retrieve the data later.</span>
        </p>
      </div>
    </div>
  );
};

export default Cancelplan;
