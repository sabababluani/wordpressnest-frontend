'use client';

import BaseApi from '../api/BaseApi';
import { setCookie } from '../helpers/setCookie';
import MainHeader from '../register/components/RegisterHeader/RegisterHeader';
import { LoginPropsInterface } from './login-props.interface/login-props.interface';
import styles from './page.module.scss';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { Checkbox, Select } from 'antd';
import '../globals.css';
import { useRouter } from 'next/navigation';

const countryOptions = [
  {
    value: 'as',
    label: (
      <div className={styles.optionContainer}>
        <Image
          src="/icons/languageicon.svg"
          alt="US Flag"
          width={24}
          height={24}
          className={styles.flag}
        />
        <span>English</span>
      </div>
    ),
  },
];

const Login = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginPropsInterface>();

  const onSubmit = (data: LoginPropsInterface) => {
    BaseApi.post('/auth/login', data).then((response) => {
      setCookie('token', response.data.accessToken, 60);
      router.push('/');
    });
  };

  return (
    <>
      <MainHeader />
      <div className={styles.mainWrapper}>
        <div className={styles.content}>
          <div className={styles.container}>
            <span className={styles.headline}>Hosting</span>
            <div className={styles.header}>
              <div className={styles.headerTop}>
                <span className={styles.loginText}>Log in to your account</span>
                <span className={styles.welcometext}>
                  Welcome back! Please enter your details.
                </span>
              </div>
              <div className={styles.chooseWrapper}>
                <div className={styles.choose}>
                  <Image
                    src="/icons/github.svg"
                    alt="github"
                    width={24}
                    height={24}
                  />
                  <span className={styles.chooseName}>GitHub</span>
                </div>
                <div className={styles.choose}>
                  <Image
                    src="/icons/google.svg"
                    alt="gitlab"
                    width={24}
                    height={24}
                  />
                  <span className={styles.chooseName}>Google</span>
                </div>
              </div>
            </div>
            <div className={styles.divider}>
              <div className={styles.dividerLine}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="153"
                  height="2"
                  viewBox="0 0 153 2"
                  fill="none"
                >
                  <path
                    d="M152.129 1L0.5 1"
                    stroke="url(#paint0_linear_1154_20816)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1154_20816"
                      x1="0.5"
                      y1="1.5"
                      x2="152.129"
                      y2="1.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" />
                      <stop offset="1" stop-color="#11141A" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className={styles.divideText}>Or</span>
              <div className={styles.dividerLineRotated}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="153"
                  height="2"
                  viewBox="0 0 153 2"
                  fill="none"
                >
                  <path
                    d="M152.129 1L0.5 1"
                    stroke="url(#paint0_linear_1154_20816)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1154_20816"
                      x1="0.5"
                      y1="1.5"
                      x2="152.129"
                      y2="1.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" />
                      <stop offset="1" stop-color="#11141A" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.infoWrapper}>
                <div className={styles.inputWrapper}>
                  <div className={styles.inputContainer}>
                    <span className={styles.inputLabel}>Email</span>
                    <input
                      type="text"
                      placeholder="Enter Your Email"
                      className={
                        errors.email ? styles.erroredInput : styles.input
                      }
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
                        <Image
                          src="/icons/error.webp"
                          alt="error"
                          width={16}
                          height={16}
                        />
                        <span className={styles.errors}>
                          {errors.email.message}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className={styles.inputContainer}>
                    <span className={styles.inputLabel}>Password</span>
                    <input
                      type="password"
                      placeholder="Password"
                      className={
                        errors.password ? styles.erroredInput : styles.input
                      }
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
                        <Image
                          src="/icons/error.webp"
                          alt="error"
                          width={16}
                          height={16}
                        />
                        <span className={styles.errors}>
                          {errors.password.message}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <div className={styles.rememberWrapper}>
                  <div className={styles.checkboxWrapper}>
                    <div className={styles.checkbox}>
                      <Checkbox />
                    </div>
                    <span className={styles.rememberText}>
                      Remember for 30 days
                    </span>
                  </div>
                  <Link href="#" className={styles.forgot}>
                    Forgot Password
                  </Link>
                </div>
                <button type="submit" className={styles.submit}>
                  Sign in
                </button>
              </div>
            </form>
            <div className={styles.registration}>
              <span className={styles.donthaveacc}>Dont have an account?</span>
              <Link href="/register" className={styles.signup}>
                Sign Up
              </Link>
            </div>
            <Select
              options={countryOptions}
              className={styles.select}
              defaultValue={countryOptions[0]}
              popupClassName={styles.customDropdown}
            />
          </div>
        </div>
        <div className={styles.banner}>
          <Image src={'/image.png'} alt="image" width={940} height={1200} />
        </div>
      </div>
    </>
  );
};

export default Login;
