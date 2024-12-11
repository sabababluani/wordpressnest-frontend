import { Input, Select } from 'antd';
import styles from './RegisterBilling.module.scss';
import { RegisterFormActionPropsInterface } from '../RegisterForm/interfaces/register-form-action-props.interface';
import Image from 'next/image';
import { Controller, useForm } from 'react-hook-form';
import { RegisterBillingPropsInterface } from './interfaces/register-billing-props-interfaces';

const countryOptions = [
  {
    value: 'as',
    label: (
      <div className={styles.optionContainer}>
        <Image
          src="/Au.png"
          alt="US Flag"
          width={14}
          height={14}
          className={styles.flag}
        />
        <span>Australia</span>
      </div>
    ),
  },
];

const RegisterBilling = (props: RegisterFormActionPropsInterface) => {
  const { control, handleSubmit } = useForm<RegisterBillingPropsInterface>();

  const onSubmit = (data: RegisterBillingPropsInterface) => {
    console.log(data);
    props.onNextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.wrapper}>
        <div className={styles.upperContainer}>
          <div className={styles.countryContainer}>
            <div className={styles.country}>
              <span>Country</span>
              <Select
                className={styles.select}
                options={countryOptions}
                defaultValue={countryOptions[0]}
              ></Select>
            </div>
            <div className={styles.country}>
              <span>City</span>
              <Select className={styles.select}></Select>
            </div>
          </div>
          <div className={styles.inputContainer}>
            <span>City</span>
            <Controller
              name="state"
              control={control}
              rules={{
                required: { value: true, message: 'State is required' },
              }}
              render={({ field }) => (
                <Input
                  className={styles.input}
                  placeholder="Enter state"
                  {...field}
                />
              )}
            />
          </div>
          <div className={styles.inputContainer}>
            <span>ZIP code</span>
            <Controller
              name="zip"
              control={control}
              rules={{
                required: { value: true, message: 'First name is required' },
              }}
              render={({ field }) => (
                <Input
                  className={styles.input}
                  {...field}
                  placeholder="Enter Zip code"
                />
              )}
            />
          </div>
          <div className={styles.inputContainer}>
            <span>Adress</span>
            <Controller
              name="address"
              control={control}
              rules={{
                required: { value: true, message: 'First name is required' },
              }}
              render={({ field }) => (
                <Input
                  className={styles.input}
                  {...field}
                  placeholder="Enter Adress"
                />
              )}
            />
          </div>
        </div>
        <div className={styles.container}>
          <h3>Card Details</h3>
          <div className={styles.inputContainer}>
            <span>Card holder name</span>
            <Controller
              name="cardHolder"
              control={control}
              rules={{
                required: { value: true, message: 'First name is required' },
              }}
              render={({ field }) => (
                <Input
                  className={styles.input}
                  {...field}
                  placeholder="Enter card"
                />
              )}
            />
          </div>
          <div className={styles.inputContainer}>
            <span>Card expired</span>
            <Controller
              name="expired"
              control={control}
              rules={{
                required: { value: true, message: 'First name is required' },
              }}
              render={({ field }) => (
                <Input
                  className={styles.input}
                  {...field}
                  placeholder="Card expired"
                />
              )}
            />
          </div>
          <div className={styles.inputContainer}>
            <span>CVC</span>
            <Controller
              name="cvc"
              control={control}
              rules={{
                required: { value: true, message: 'First name is required' },
              }}
              render={({ field }) => (
                <Input
                  className={styles.input}
                  {...field}
                  placeholder="Enter CVC"
                />
              )}
            />
          </div>
        </div>
        <button type="submit" className={styles.submit}>
          Continue
        </button>
      </div>
    </form>
  );
};

export default RegisterBilling;
