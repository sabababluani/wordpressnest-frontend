'use client';

import Image from 'next/image';
import Link from 'next/link';
import MainHeader from './components/RegisterHeader/RegisterHeader';
import styles from './page.module.scss';
import RegisterForm from './components/RegisterForm/RegisterForm';

const Register = () => {
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
                <div className={styles.graycircle}>
                  <Image
                    src={'/icons/loginlogut.svg'}
                    alt="logilogut"
                    width={24}
                    height={24}
                  />
                </div>
                <span>Sign Up</span>
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
                    src={'/icons/note.svg'}
                    alt="note"
                    width={24}
                    height={24}
                  />
                </div>
                <span>Choose Plan</span>
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
                <span>Billing information </span>
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
                <span>Success</span>
              </div>
            </div>
            <RegisterForm />
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
