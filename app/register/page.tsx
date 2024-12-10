'use client';

import Image from 'next/image';
import Link from 'next/link';
import MainHeader from './components/RegisterHeader/RegisterHeader';
import styles from './page.module.scss';
import RegisterForm from './components/RegisterForm/RegisterForm';
import { useState } from 'react';

const Register = () => {
  const [steper, setSteper] = useState(2);

  const onNextStep = () => {
    setSteper((prevStep) => prevStep + 1);
    console.log(steper);
  };

  console.log(steper);

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
              <div className={`${styles.navigate} ${styles.lightNavigate}`}>
                <div
                  className={`${steper > 2 ? styles.blackcircle : styles.graycircle}`}
                >
                  <Image
                    src={steper > 2 ? '/icons/note.svg' : '/icons/notebold.svg'}
                    alt="note"
                    width={24}
                    height={24}
                  />
                </div>
                <span className={styles.navigationSpan}>Choose Plan</span>
              </div>
              <Image
                src={'/icons/dashedline.svg'}
                alt="dashed"
                width={53}
                height={2}
              />
              <div className={`${styles.navigate} ${styles.lightNavigate}`}>
                <div className={styles.lightcircle}>
                  <Image
                    src={'/icons/bill.svg'}
                    alt="bill"
                    width={24}
                    height={24}
                  />
                </div>
                <span className={styles.navigationSpan}>
                  Billing information{' '}
                </span>
              </div>
              <Image
                src={'/icons/dashedline.svg'}
                alt="dashed"
                width={53}
                height={2}
              />
              <div className={`${styles.navigate} ${styles.lightNavigate}`}>
                <div className={styles.lightcircle}>
                  <Image
                    src={'/icons/succescopy.svg'}
                    alt="success"
                    width={24}
                    height={24}
                  />
                </div>
                <span className={styles.navigationSpan}>Success</span>
              </div>
            </div>
            {steper === 1 && <RegisterForm onNextStep={onNextStep} />}
            <div className={styles.loginContainer}>
              <Link href={'/login'} className={styles.login}>
                Log in to your account
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.banner}>
          <Image src={'/image.png'} alt="image" width={940} height={12} />
        </div>
      </div>
    </div>
  );
};

export default Register;
