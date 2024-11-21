'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import BaseApi from '../api/BaseApi';
import { LoginPropsInterface } from './login-props.interface/login-props.interface';
import styles from './page.module.scss';
import { setCookie } from '../helpers/setCookie';

const Login = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<LoginPropsInterface>();

  const email = watch('email');
  const password = watch('password');

  const onSubmit = (data: LoginPropsInterface) => {
    if (rememberMe) {
      localStorage.setItem('email', data.email);
      localStorage.setItem('password', data.password);
    }

    BaseApi.post('/auth/login', data)
      .then((response) => {
        setCookie('token', response.data.accessToken, 60);
        router.push('/');
      })
      .catch((error) => {
        alert(error.response?.data?.message || 'Login failed');
      });
  };

  const handleCheckboxChange = () => {
    setRememberMe(!rememberMe);
  };

  useEffect(() => {
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');

    if (savedEmail) setValue('email', savedEmail);
    if (savedPassword) setValue('password', savedPassword);
  }, [setValue]);

  const isSubmitDisabled = !email || !password;

  return (
    <div className={styles.mainContainer}>
      <div className={styles.fullscreenContainer}>
        <div className={styles.loginHeader}>
          <Image src="/logo.png" alt="logo" width={100} height={100} />
          <h2>Log In</h2>
        </div>
        <form className={styles.loginInfo} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.loginInputs}>
            <div className={styles.inputContainer}>
              <input
                type="text"
                placeholder="Email"
                className={errors.email ? styles.erroredInput : styles.input}
                {...register('email', {
                  required: {
                    value: true,
                    message: 'Email is required',
                  },
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'Invalid email format',
                  },
                })}
              />
              {errors.email && (
                <div className={styles.errorDiv}>
                  <Image src="/error.webp" alt="error" width={14} height={14} />
                  <span className={styles.errors}>{errors.email.message}</span>
                </div>
              )}
            </div>
            <div className={styles.inputContainer}>
              <input
                type="password"
                placeholder="Password"
                className={errors.password ? styles.erroredInput : styles.input}
                {...register('password', {
                  required: {
                    value: true,
                    message: 'Password is required',
                  },
                  minLength: {
                    value: 8,
                    message: 'Password must be at least 8 characters',
                  },
                })}
              />
              {errors.password && (
                <div className={styles.errorDiv}>
                  <Image src="/error.webp" alt="error" width={14} height={14} />
                  <span className={styles.errors}>
                    {errors.password.message}
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className={styles.loginAccess}>
            <div className={styles.remembermeContainer}>
              <div className={styles.rememberme}>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={handleCheckboxChange}
                />
                <label>Remember Me</label>
              </div>
              <Link href="/register" className={styles.link}>
                Create Account
              </Link>
            </div>
            <input
              type="submit"
              value="Log in"
              disabled={isSubmitDisabled}
              className={isSubmitDisabled ? styles.submition : styles.submit}
            />
          </div>
        </form>
      </div>
      <div className={styles.characterBg}>
        <Image
          src="/rerobg.png"
          width={900}
          height={1080}
          alt="Background"
          className={styles.rero}
        />
      </div>
    </div>
  );
};

export default Login;
