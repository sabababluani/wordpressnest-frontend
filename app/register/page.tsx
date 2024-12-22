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
import { passportData } from './utils/passport-data';
import React from 'react';
import { steps } from './utils/icons-data';

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
  const [steper, setSteper] = useState(4);

  const onNextStep = () => {
    setSteper((prevStep) => prevStep + 1);
  };

  const renderContent = () => {
    switch (steper) {
      case 1:
        return <RegisterForm onNextStep={onNextStep} />;
      case 2:
        return <RegiserPlans onNextStep={onNextStep} />;
      case 3:
        return <RegisterBilling onNextStep={onNextStep} />;
      case 4:
        return <RegisterSuccess />;
      default:
        return null;
    }
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
                {passportData.map((passport, index) => (
                  <div key={index} className={styles.passport}>
                    <Image
                      src={passport.src}
                      alt={passport.alt}
                      width={24}
                      height={24}
                    />
                    <span className={styles.buttonInner}>
                      {passport.buttonInner}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.navigation}>
              {steps.map((step, index) => (
                <React.Fragment key={index}>
                  <div className={styles.navigate}>
                    <div
                      className={`${
                        steper > index + 1
                          ? styles.blackcircle
                          : steper === index + 1 && steper !== 4
                            ? styles.graycircle
                            : steper === 4
                              ? styles.blackcircle
                              : styles.lightcircle
                      }`}
                    >
                      <Image
                        src={
                          steper === index + 1
                            ? step.icons.active
                            : steper === index + 2 || steper === 4
                              ? step.icons.thirdState
                              : step.icons.inactive
                        }
                        alt={step.title.toLowerCase()}
                        width={24}
                        height={24}
                      />
                    </div>
                    <span
                      className={`${
                        steper > index + 1 || steper === 4
                          ? styles.boldNavigationSpan
                          : steper === index + 1
                            ? styles.navigationBoldSpan
                            : styles.navigationSpan
                      }`}
                    >
                      {step.title}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <Image
                      src="/icons/dashedline.svg"
                      alt="dashed line"
                      width={53}
                      height={2}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
            {renderContent()}
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
