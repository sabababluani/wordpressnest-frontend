import Image from 'next/image';
import styles from './LogOut.module.scss';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

const LogOut = () => {
  const router = useRouter();

  // const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
  //   event.stopPropagation();
  //   props.onLinkClick();
  // };

  const handleLogOut = () => {
    Cookies.remove('token');
    router.push('/login');
  };

  return (
    <div className={styles.wrapper}>
      {/* <Link
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
      </Link> */}
      <Link href="/login" className={styles.logOut} onClick={handleLogOut}>
        <Image src="/icons/logout.svg" alt="logout" width={24} height={24} />
        <p>Log out</p>
      </Link>
    </div>
  );
};

export default LogOut;
