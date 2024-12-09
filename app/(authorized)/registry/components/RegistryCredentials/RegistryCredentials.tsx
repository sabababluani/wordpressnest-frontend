import Button from '@/app/components/Button/Button';
import styles from './RegistryCredentials.module.scss';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';

const RegistryCredentials = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.head}>
          <span className={styles.headline}>
            Container registry credentials
          </span>
          <span className={styles.text}>
            Earn credits by reffering your friend to hosting, earnings accrue
            when referrals start using and paying for hosting services. you can
            view total credits below or when you have credits available, they
            are also shown on the payment methods page, as an account balance
          </span>
        </div>
        <Button
          innerContent="Created credentials"
          backgroundColor={buttonbackgroundColorEnum.black}
        />
      </div>
      <div className={styles.container}>
        <div className={styles.table}>
          <span className={styles.title}>Name</span>
          <span className={styles.title}>Registry</span>
          <span className={styles.title}>Created</span>
          <span className={styles.title}>Actions</span>
        </div>
        <div className={styles.apikey}>
          <span className={styles.apikeytext}>
            Container registry credentials will appear here
          </span>
        </div>
      </div>
    </div>
  );
};

export default RegistryCredentials;
