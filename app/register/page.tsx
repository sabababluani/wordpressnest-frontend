'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import BaseApi from '../api/BaseApi';
import styles from './page.module.scss';
import { RegisterPropsInterface } from './register-props.interface/register-props.interface';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<RegisterPropsInterface>();

  const router = useRouter();

  const onRegisterFinish = (data: RegisterPropsInterface) => {
    if (data.password !== data.confirmPassword) {
      setError('confirmPassword', {
        type: 'manual',
        message: 'Passwords do not match',
      });
      return;
    }

    const payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    };

    BaseApi.post('/auth/register', payload)
      .then(() => {
        router.push('/login');
      })
      .catch((error) => {
        alert(error.response?.data?.message || 'Registration failed');
      });
  };

  return (
    <div className={styles.wrapper}>
      <Image src="/logo.png" alt="logo" width={100} height={100} />
      <h1>Registration</h1>
      <form
        className={styles.formContainer}
        onSubmit={handleSubmit(onRegisterFinish)}
      >
        <div className={styles.container}>
          <div className={styles.inputContainer}>
            <input
              placeholder="First Name"
              className={`${
                errors.firstName ? styles.inputError : styles.input
              }`}
              {...register('firstName', {
                required: { value: true, message: 'First name is required' },
              })}
            />
            {errors.firstName && (
              <div className={styles.errorDiv}>
                <Image src={'/error.webp'} alt="error" width={14} height={14} />
                <span className={styles.errors}>
                  {errors.firstName.message}
                </span>
              </div>
            )}
          </div>
          <div className={styles.inputContainer}>
            <input
              placeholder="Last Name"
              className={`${
                errors.lastName ? styles.inputError : styles.input
              }`}
              {...register('lastName', {
                required: { value: true, message: 'Last name is required' },
              })}
            />
            {errors.lastName && (
              <div className={styles.errorDiv}>
                <Image src={'/error.webp'} alt="error" width={14} height={14} />
                <span className={styles.errors}>{errors.lastName.message}</span>
              </div>
            )}
          </div>
          <div className={styles.inputContainer}>
            <input
              placeholder="Email"
              className={`${errors.email ? styles.inputError : styles.input}`}
              {...register('email', {
                required: { value: true, message: 'Email is required' },
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Invalid email format',
                },
              })}
            />
            {errors.email && (
              <div className={styles.errorDiv}>
                <Image src={'/error.webp'} alt="error" width={14} height={14} />
                <span className={styles.errors}>{errors.email.message}</span>
              </div>
            )}
          </div>
          <div className={styles.inputContainer}>
            <input
              type="password"
              placeholder="Password"
              className={`${
                errors.password ? styles.inputError : styles.input
              }`}
              {...register('password', {
                required: { value: true, message: 'Password is required' },
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters',
                },
              })}
            />
            {errors.password && (
              <div className={styles.errorDiv}>
                <Image src={'/error.webp'} alt="error" width={14} height={14} />
                <span className={styles.errors}>{errors.password.message}</span>
              </div>
            )}
          </div>
          <div className={styles.inputContainer}>
            <input
              type="password"
              placeholder="Confirm Password"
              className={`${
                errors.confirmPassword ? styles.inputError : styles.input
              }`}
              {...register('confirmPassword', {
                required: {
                  value: true,
                  message: 'Confirm password is required',
                },
                minLength: {
                  value: 8,
                  message: 'Confirm password must be at least 8 characters',
                },
              })}
            />
            {errors.confirmPassword && (
              <div className={styles.errorDiv}>
                <Image src={'/error.webp'} alt="error" width={14} height={14} />
                <span className={styles.errors}>
                  {errors.confirmPassword.message}
                </span>
              </div>
            )}
          </div>
        </div>
        <div className={styles.submitContainer}>
          <input type="submit" value={'Confirm'} />
        </div>
      </form>
      <p>
        Have an account? <Link href="/login">log in</Link>
      </p>
    </div>
  );
};

export default Register;
