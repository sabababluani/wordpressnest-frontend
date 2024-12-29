import Image from 'next/image';
import styles from './LogOut.module.scss';
import Link from 'next/link';
import { LogOutPropsInterface } from './interfaces/log-out-props.interfaces';

const LogOut = (props: LogOutPropsInterface) => {
  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.stopPropagation(); // Prevent the event from propagating to the document
    props.onLinkClick(); // Call the parent component's handler
  };

  return (
    <div className={styles.wrapper}>
      <Link
        href="/personalInfo"
        className={styles.container}
        onClick={handleLinkClick}
      >
        <Image
          src="/icons/userssettings.svg"
          alt="user"
          width={24}
          height={24}
        />
        <p>User settings</p>
      </Link>
      <Link
        href="/plans"
        className={styles.container}
        onClick={handleLinkClick}
      >
        <Image src="/icons/bag.svg" alt="bag" width={24} height={24} />
        <p>Company settings</p>
      </Link>
      <Link href="/" className={styles.logOut} onClick={handleLinkClick}>
        <Image src="/icons/logout.svg" alt="logout" width={24} height={24} />
        <p>Log out</p>
      </Link>
    </div>
  );
};

export default LogOut;
