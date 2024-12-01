import BillingDetails from './components/BillingDetails/BillingDetails';
import styles from './page.module.scss';

const Billing = () => {
  return (
    <div className={styles.container}>
      <BillingDetails />
    </div>
  );
};

export default Billing;
