import Image from 'next/image';
import styles from './RegisterForm.module.scss';
import { Checkbox } from 'antd';
import { useForm } from 'react-hook-form';
import { RegisterFormPropsInterface } from './interfaces/register-form-props.interface';

const RegisterForm = () => {
  const { register, handleSubmit, watch } =
    useForm<RegisterFormPropsInterface>();

  const password = watch('password', '');

  const hasLowercase = /[a-z]/.test(password);
  const hadUpperCase = /[A-Z]/.test(password);
  const hadNumber = /[0-9]/.test(password);

  const onSubmit = (data: RegisterFormPropsInterface) => {
    console.log(data);
  };

  return (
    <form className={styles.formWrapper} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputWrapper}>
        <div className={styles.inputContainer}>
          <span>First Name</span>
          <input
            type="text"
            placeholder="Enter your First name"
            {...register('firstName', {
              required: { value: true, message: 'First name is required' },
            })}
          />
        </div>

        <div className={styles.inputContainer}>
          <span>Last Name</span>
          <input
            type="text"
            placeholder="Enter your Last name"
            {...register('lastName', {
              required: { value: true, message: 'Last name is required' },
            })}
          />
        </div>
      </div>

      <div className={styles.inputContainer}>
        <span>Email</span>
        <input
          type="email"
          placeholder="Enter your email"
          {...register('email', {
            required: { value: true, message: 'Email is required' },
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Invalid email format',
            },
          })}
        />
      </div>

      <div className={styles.inputContainer}>
        <span>Password</span>
        <input
          type="password"
          placeholder="Enter your password"
          className={styles.passwordInput}
          {...register('password', {
            required: { value: true, message: 'Password is required' },
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters',
            },
          })}
        />
      </div>

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
