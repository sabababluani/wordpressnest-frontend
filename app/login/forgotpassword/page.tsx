'use client';

import MainHeader from '@/app/register/components/RegisterHeader/RegisterHeader';
import styles from './page.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { Select } from 'antd';
import { LanguageOptions } from '../utils/LanguageOptions';
import { useRouter } from 'next/navigation';

const ForgotPassword = () => {
  const router = useRouter();
  return (
    <>
      <MainHeader />
      <div className={styles.mainWrapper}>
        <div className={styles.content}>
          <div className={styles.container}>
            <span className={styles.headline}>Hosting</span>
            <span className={styles.reset}>Reset your password</span>
            <span className={styles.text}>
              You&apos;ll receive a link to reset your password, if an account
              with your email exists.
            </span>
            <div className={styles.inputContainer}>
              <label htmlFor="">Email</label>
              <div className={styles.contentWrapper}>
                <input type="text" placeholder="Enter your email" />
                <div className={styles.buttonWrapper}>
                  <div className={styles.backButton}>
                    <Button
                      backgroundColor={buttonbackgroundColorEnum.white}
                      innerContent="Back"
                      onClick={() => {
                        router.push('/login');
                      }}
                    />
                  </div>
                  <div className={styles.resetButton}>
                    <Button
                      backgroundColor={buttonbackgroundColorEnum.black}
                      innerContent="Reset Password"
                    />
                  </div>
                </div>
              </div>
            </div>
            <Link href="/login" className={styles.signup}>
              Log in to your account
            </Link>
            <Select
              options={LanguageOptions}
              className={styles.select}
              defaultValue={LanguageOptions[0]}
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

export default ForgotPassword;
