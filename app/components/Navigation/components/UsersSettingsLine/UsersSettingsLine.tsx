'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './UsersSettingsLine.module.scss';

const UsersSettingsLine = (): JSX.Element => {
  const pathname = usePathname();

  return (
    <div className={styles.sitesInfo}>
      <div className={styles.sitesInfoImage}>
        <Image
          src={'/threeline.svg'}
          alt={'Navigation line'}
          width={16}
          height={100}
        />
      </div>
      <div className={styles.infoWrapper}>
        <Link
          href={'/personalInfo'}
          className={`${styles.infoButton} ${
            pathname.includes('/personalInfo') ? styles.infoButtonClicked : ''
          }`}
        >
          <Image
            src={
              pathname.includes('/personalInfo')
                ? '/icons/Personalcard.svg'
                : '/icons/Personalcard.svg'
            }
            alt={'info'}
            width={20}
            height={20}
          />
          <span>Personal info</span>
        </Link>
        <Link
          href={'/access'}
          className={`${styles.infoButton} ${
            pathname.includes('access') ? styles.infoButtonClicked : ''
          }`}
        >
          <Image
            src={
              pathname.includes('access') ? '/icons/bag.svg' : '/icons/bag.svg'
            }
            alt={'domains'}
            width={20}
            height={20}
          />
          <span>Access</span>
        </Link>
        <Link
          href={'/notifications'}
          className={`${styles.infoButton} ${
            pathname.includes('/notifications') ? styles.infoButtonClicked : ''
          }`}
        >
          <Image
            src={
              pathname.includes('/notifications')
                ? '/icons/bell.svg'
                : '/icons/bell.svg'
            }
            alt={'notifications'}
            width={20}
            height={20}
          />
          <span>Notifications</span>
        </Link>
      </div>
    </div>
  );
};

export default UsersSettingsLine;
