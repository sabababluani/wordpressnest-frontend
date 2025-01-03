import styles from './RegisterHeader.module.scss';
import Link from 'next/link';

const MainHeader = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
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
          <button className={styles.loginButton}>Log in</button>
          <button className={styles.signupButton}>Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
