import Image from 'next/image';
import styles from './RegisterForm.module.scss';
import { Checkbox, Input } from 'antd';
import { useForm, Controller } from 'react-hook-form';
import { RegisterFormPropsInterface } from './interfaces/register-form-props.interface';
import { RegisterFormActionPropsInterface } from './interfaces/register-form-action-props.interface';

const RegisterForm = (props: RegisterFormActionPropsInterface) => {
  const { control, handleSubmit, watch } =
    useForm<RegisterFormPropsInterface>();

  const password = watch('password', '');

  const hasLowercase = /[a-z]/.test(password);
  const hadUpperCase = /[A-Z]/.test(password);
  const hadNumber = /[0-9]/.test(password);

  const onSubmit = (data: RegisterFormPropsInterface) => {
    console.log(data);
    props.onNextStep();
  };

  return (
    <form className={styles.formWrapper} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputWrapper}>
        <div className={styles.inputContainer}>
          <span>First Name</span>
          <Controller
            name="firstName"
            control={control}
            rules={{
              required: { value: true, message: 'First name is required' },
            }}
            render={({ field }) => (
              <div className={styles.antInput}>
                <Input
                  type="text"
                  placeholder="Enter your First name"
                  {...field}
                  className={styles.passwordInput}
                />
              </div>
            )}
          />
        </div>

        <div className={styles.inputContainer}>
          <span>Last Name</span>
          <Controller
            name="lastName"
            control={control}
            rules={{
              required: { value: true, message: 'Last name is required' },
            }}
            render={({ field }) => (
              <div className={styles.antInput}>
                <Input
                  type="text"
                  placeholder="Enter your Last name"
                  {...field}
                  className={styles.passwordInput}
                />
              </div>
            )}
          />
        </div>
      </div>

      <div className={styles.inputContainer}>
        <span>Email</span>
        <Controller
          name="email"
          control={control}
          rules={{
            required: { value: true, message: 'Email is required' },
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Invalid email format',
            },
          }}
          render={({ field }) => (
            <div className={styles.antInput}>
              <Input
                type="email"
                placeholder="Enter your email"
                {...field}
                className={styles.passwordInput}
              />
            </div>
          )}
        />
      </div>

      <div className={styles.inputContainer}>
        <span>Password</span>
        <Controller
          name="password"
          control={control}
          rules={{
            required: { value: true, message: 'Password is required' },
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters',
            },
          }}
          render={({ field }) => (
            <div className={styles.antInput}>
              <Input.Password
                type="password"
                placeholder="Enter your password"
                className={styles.passwordInput}
                {...field}
              />
            </div>
          )}
        />
      </div>

      {password.length > 0 && (
        <div>
          <div
            className={`${password.length >= 8 ? styles.checkboxChecked : styles.checkboxUnChecked}`}
          >
            <Image
              src={
                password.length >= 8
                  ? '/icons/validatechecked.svg'
                  : '/icons/uncheckcircle.svg'
              }
              alt="validate"
              width={16}
              height={16}
            />
            <span>8 characters</span>
          </div>

          <div
            className={`${hadUpperCase ? styles.checkboxChecked : styles.checkboxUnChecked}`}
          >
            <Image
              src={
                hadUpperCase
                  ? '/icons/validatechecked.svg'
                  : '/icons/uncheckcircle.svg'
              }
              alt="validate"
              width={16}
              height={16}
            />
            <span>1 capital letter</span>
          </div>

          <div
            className={`${hadNumber ? styles.checkboxChecked : styles.checkboxUnChecked}`}
          >
            <Image
              src={
                hadNumber
                  ? '/icons/validatechecked.svg'
                  : '/icons/uncheckcircle.svg'
              }
              alt="validate"
              width={16}
              height={16}
            />
            <span>1 number</span>
          </div>

          <div
            className={`${hasLowercase ? styles.checkboxChecked : styles.checkboxUnChecked}`}
          >
            <Image
              src={
                hasLowercase
                  ? '/icons/validatechecked.svg'
                  : '/icons/uncheckcircle.svg'
              }
              alt="validate"
              width={16}
              height={16}
            />
            <span>1 lowercase letter</span>
          </div>
        </div>
      )}

      <div className={styles.checkboxWrapper}>
        <div className={styles.checkboxContainer}>
          <div className={styles.checkbox}>
            <Checkbox />
          </div>
          <span>Subscribe to Hosting Updates and Promotions</span>
        </div>

        <div className={styles.checkboxContainer}>
          <div className={styles.checkbox}>
            <Checkbox />
          </div>
          <span>I agree to Hosting Terms of Service and Privacy Policy</span>
        </div>
      </div>

      <button type="submit" className={styles.submit}>
        Continue
      </button>
    </form>
  );
};

export default RegisterForm;
