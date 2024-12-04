import Button from '../../components/Button/Button';
import { buttonbackgroundColorEnum } from '../../components/Button/enum/button.enum';
import PaymentCard from './components/PaymentCard/PaymentCard';
import styles from './page.module.scss';

const PaymentMethods = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <p>Payment methods</p>
        <Button
          backgroundColor={buttonbackgroundColorEnum.black}
          innerContent="Add payment methods"
        />
      </div>
      <div className={styles.container}>
        <PaymentCard />
        <PaymentCard />
      </div>
    </div>
  );
};

export default PaymentMethods;
