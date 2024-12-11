import Button from '@/app/components/Button/Button';
import styles from './RegisterHeader.module.scss';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import Link from 'next/link';

const MainHeader = () => {
  return (
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
  );
};

export default MainHeader;
