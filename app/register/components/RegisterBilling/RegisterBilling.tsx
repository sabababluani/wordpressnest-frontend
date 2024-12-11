import { Input, Select } from 'antd';
import styles from './RegisterBilling.module.scss';
import { RegisterFormActionPropsInterface } from '../RegisterForm/interfaces/register-form-action-props.interface';

const RegisterBilling = (props: RegisterFormActionPropsInterface) => {
  const onSubmit = () => {
    props.onNextStep();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.upperContainer}>
        <div className={styles.countryContainer}>
          <div className={styles.country}>
            <span>Country</span>
            <Select className={styles.select}></Select>
          </div>
          <div className={styles.country}>
            <span>City</span>
            <Select className={styles.select}></Select>
          </div>
        </div>
        <div className={styles.inputContainer}>
          <span>City</span>
          <Input className={styles.input} placeholder="Enter state" />
        </div>
        <div className={styles.inputContainer}>
          <span>ZIP code</span>
          <Input className={styles.input} />
        </div>
        <div className={styles.inputContainer}>
          <span>Adress</span>
          <Input className={styles.input} />
        </div>
      </div>
      <div className={styles.container}>
        <h3>Card Details</h3>
        <div className={styles.inputContainer}>
          <span>Card holder name</span>
          <Input className={styles.input} />
        </div>
        <div className={styles.inputContainer}>
          <span>Card expired</span>
          <Input className={styles.input} />
        </div>
        <div className={styles.inputContainer}>
          <span>CVC</span>
          <Input className={styles.input} />
        </div>
      </div>
      <button type="submit" className={styles.submit} onClick={onSubmit}>
        Continue
      </button>
    </div>
  );
};

export default RegisterBilling;
