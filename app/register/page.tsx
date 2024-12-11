'use client';

import Image from 'next/image';
import Link from 'next/link';
import MainHeader from './components/RegisterHeader/RegisterHeader';
import styles from './page.module.scss';
import RegisterForm from './components/RegisterForm/RegisterForm';
import { useState } from 'react';
import RegiserPlans from './components/RegiserPlans/RegiserPlans';
import RegisterBilling from './components/RegisterBilling/RegisterBilling';
import '../globals.css';
import RegisterSuccess from './components/RegisterSuccess/RegisterSuccess';
import { Select } from 'antd';

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

const Register = () => {
  const [steper, setSteper] = useState(3);

  const onNextStep = () => {
    setSteper((prevStep) => prevStep + 1);
    console.log(steper);
  };

  return (
    <div className={styles.wrapper}>
      <MainHeader />
      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.hostingWrapper}>
            <div className={styles.heading}>
              <h2>Hosting</h2>
              <p>Sign up for free</p>
            </div>
            <div className={styles.topContainer}>
              <div className={styles.passportWrapper}>
                <div className={styles.passport}>
                  <Image
                    src={'/icons/github.svg'}
                    alt="github"
                    width={24}
                    height={24}
                  />
                  <span className={styles.buttonInner}>GitHub</span>
                </div>
                <div className={styles.passport}>
                  <Image
                    src={'/icons/gitlab.svg'}
                    alt="github"
                    width={24}
                    height={24}
                  />
                  <span className={styles.buttonInner}>GitHub</span>
                </div>
              </div>
            </div>
            <div className={styles.navigation}>
              <div className={styles.navigate}>
                <div
                  className={`${steper > 1 ? styles.blackcircle : styles.graycircle}`}
                >
                  <Image
                    src={
                      steper > 1
                        ? '/icons/loginlogutwhite.svg'
                        : '/icons/loginlogut.svg'
                    }
                    alt="logilogut"
                    width={24}
                    height={24}
                  />
                </div>
                <span
                  className={
                    steper > 1
                      ? styles.boldNavigationSpan
                      : styles.navigationSpan
                  }
                >
                  Sign Up
                </span>
              </div>
              <Image
                src={'/icons/dashedline.svg'}
                alt="dashed"
                width={53}
                height={2}
              />
              <div className={styles.navigate}>
                <div
                  className={`${steper === 1 && styles.lightcircle} ${steper === 2 && styles.graycircle}  ${steper === 3 && styles.blackcircle} ${steper === 4 && styles.blackcircle}`}
                >
                  <Image
                    src={
                      steper === 2
                        ? '/icons/notebold.svg'
                        : steper === 1
                          ? '/icons/note.svg'
                          : steper === 3
                            ? '/icons/notewhite.svg'
                            : '/icons/notewhite.svg'
                    }
                    alt="note"
                    width={24}
                    height={24}
                  />
                </div>
                <span
                  className={`${steper === 1 && styles.navigationSpan}
                      ${steper === 2 && styles.navigationBoldSpan}  ${steper === 3 && styles.boldNavigationSpan}  ${steper === 4 && styles.boldNavigationSpan}`}
                >
                  Choose Plan
                </span>
              </div>
              <Image
                src={'/icons/dashedline.svg'}
                alt="dashed"
                width={53}
                height={2}
              />
              <div className={`${styles.navigate}`}>
                <div
                  className={`${steper === 1 && styles.lightcircle} ${steper === 2 && styles.lightcircle} ${steper === 3 && styles.graycircle} ${steper === 4 && styles.blackcircle}`}
                >
                  <Image
                    src={
                      steper === 2
                        ? '/icons/bill.svg'
                        : steper === 1
                          ? '/icons/bill.svg'
                          : steper === 3
                            ? '/icons/billingbold.svg'
                            : '/icons/billingwhite.svg'
                    }
                    alt="bill"
                    width={24}
                    height={24}
                  />
                </div>
                <span
                  className={`${steper === 1 && styles.navigationSpan}
                      ${steper === 2 && styles.navigationSpan}  ${steper === 3 && styles.navigationBoldSpan}  ${steper === 4 && styles.boldNavigationSpan}`}
                >
                  Billing information
                </span>
              </div>
              <Image
                src={'/icons/dashedline.svg'}
                alt="dashed"
                width={53}
                height={2}
              />
              <div className={`${styles.navigate} ${styles.lightNavigate}`}>
                <div
                  className={`${steper === 1 && styles.lightcircle} ${steper === 2 && styles.lightcircle} ${steper === 3 && styles.lightcircle} ${steper === 4 && styles.blackcircle}`}
                >
                  <Image
                    src={
                      steper === 1
                        ? '/icons/succescopy.svg'
                        : steper === 2
                          ? '/icons/succescopy.svg'
                          : steper === 3
                            ? '/icons/succescopy.svg'
                            : '/icons/copysuccesswhite.svg'
                    }
                    alt="success"
                    width={24}
                    height={24}
                  />
                </div>
                <span
                  className={`${steper === 1 && styles.navigationSpan}
                      ${steper === 2 && styles.navigationSpan}  ${steper === 3 && styles.navigationBoldSpan}  ${steper === 4 && styles.boldNavigationSpan}`}
                >
                  Success
                </span>
              </div>
            </div>
            {steper === 1 && <RegisterForm onNextStep={onNextStep} />}
            {steper === 2 && <RegiserPlans onNextStep={onNextStep} />}
            {steper === 3 && <RegisterBilling onNextStep={onNextStep} />}
            {steper === 4 && <RegisterSuccess />}
            {steper < 4 && (
              <>
                <div className={styles.loginContainer}>
                  <Link href={'/login'} className={styles.login}>
                    Log in to your account
                  </Link>
                </div>
                <Select
                  options={countryOptions}
                  className={styles.select}
                  defaultValue={countryOptions[0]}
                  popupClassName={styles.customDropdown}
                />
              </>
            )}
          </div>
        </div>
        <div className={styles.banner}>
          <Image src={'/image.png'} alt="image" width={940} height={1200} />
        </div>
      </div>
    </div>
  );
};

export default Register;
