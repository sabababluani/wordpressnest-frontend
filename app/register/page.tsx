'use client';

import Link from 'next/link';
import Button from '../components/Button/Button';
import { buttonbackgroundColorEnum } from '../components/Button/enum/button.enum';
import styles from './page.module.scss';
import Image from 'next/image';

const Register = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.menuContainer}>
          <h1>Hosting</h1>
          <div className={styles.menu}>
            <Link href={'#'}>Wordpress Hosting</Link>
            <Link href={'#'}>Solutions</Link>
            <Link href={'#'}>Pricing</Link>
            <Link href={'#'}>Docs</Link>
            <Link href={'#'}>Help</Link>
          </div>
        </div>
        <div className={styles.buttons}>
          <Button
            backgroundColor={buttonbackgroundColorEnum.white}
            innerContent="Log in"
          />
          <Button
            backgroundColor={buttonbackgroundColorEnum.black}
            innerContent="Sign up"
          />
        </div>
      </div>
      <div className={styles.container}>
        <div>
          <h2>Hosting</h2>
          <p>Sign up for free</p>
          <div>
            <div></div>
            <div>
              <Image
                src={'/icons/github.svg'}
                alt="github"
                width={24}
                height={24}
              />
              <span className={styles.buttonInner}>GitHub</span>
            </div>
          </div>
        </div>
        <Image src={'/image.png'} alt="image" width={940} height={1200} />
      </div>
    </div>
  );
};

export default Register;
