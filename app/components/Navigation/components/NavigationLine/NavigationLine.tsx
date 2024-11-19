'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './NavigationLine.module.scss';

const NavigationLine = (): JSX.Element => {
  const pathname = usePathname();

  return (
    <div className={styles.sitesInfo}>
      <div className={styles.sitesInfoImage}>
        <Image src={'icons/line.svg'} alt={'Navigation line'} width={16} height={462} />
      </div>
      <div className={styles.infoWrapper}>
        <Link
          href={'/info'}
          className={`${styles.infoButton} ${
            pathname.includes('/info') ? styles.infoButtonClicked : ''
          }`}
        >
          <Image
            src={
              pathname.includes('/info')
                ? 'icons/info.svg'
                : 'icons/infolight.svg'
            }
            alt={'info'}
            width={20}
            height={20}
          />
          <span>Info</span>
        </Link>
        <Link
          href={'/domains'}
          className={`${styles.infoButton} ${
            pathname.includes('domains') ? styles.infoButtonClicked : ''
          }`}
        >
          <Image
            src={
              pathname.includes('domains')
                ? 'icons/domainsbold.svg'
                : 'icons/domains.svg'
            }
            alt={'domains'}
            width={20}
            height={20}
          />
          <span>Domains</span>
        </Link>
        <Link
          href={'/backup'}
          className={`${styles.infoButton} ${
            pathname.includes('/backup') ? styles.infoButtonClicked : ''
          }`}
        >
          <Image
            src={
              pathname.includes('/backup')
                ? 'icons/backupbold.svg'
                : 'icons/backup.svg'
            }
            alt={'backup'}
            width={20}
            height={20}
          />
          <span>Backup</span>
        </Link>
        <Link
          href={'/tools'}
          className={`${styles.infoButton} ${
            pathname.includes('tools') ? styles.infoButtonClicked : ''
          }`}
        >
          <Image
            src={
              pathname.includes('tools')
                ? 'icons/toolsbold.svg'
                : 'icons/tools.svg'
            }
            alt={'tools'}
            width={20}
            height={20}
          />
          <span>Tools</span>
        </Link>
        <Link
          href={'/redirects'}
          className={`${styles.infoButton} ${
            pathname.includes('/redirects') ? styles.infoButtonClicked : ''
          }`}
        >
          <Image
            src={
              pathname.includes('/redirects')
                ? 'icons/redirectsbold.svg'
                : 'icons/redirects.svg'
            }
            alt={'redirects'}
            width={20}
            height={20}
          />
          <span>Redirects</span>
        </Link>
        <Link
          href={'/themesandplugins'}
          className={`${styles.infoButton} ${
            pathname.includes('/themesandplugins')
              ? styles.infoButtonClicked
              : ''
          }`}
        >
          <Image
            src={
              pathname.includes('/themesandplugins')
                ? 'icons/pluginsbold.svg'
                : 'icons/plugins.svg'
            }
            alt={'plugins'}
            width={20}
            height={20}
          />
          <span>Themes and plugins</span>
        </Link>
        <Link
          href={'/'}
          className={`${styles.infoButton} ${
            pathname.includes('ss') ? styles.infoButtonClicked : ''
          }`}
        >
          <Image
            src={
              pathname.includes('ss')
                ? 'icons/addonebold.svg'
                : 'icons/addone.svg'
            }
            alt={'add-ons'}
            width={20}
            height={20}
          />
          <span>Add-ons</span>
        </Link>
        <Link
          href={'/ipdeny'}
          className={`${styles.infoButton} ${
            pathname.includes('/ipdeny') ? styles.infoButtonClicked : ''
          }`}
        >
          <Image
            src={
              pathname.includes('/ipdeny')
                ? 'icons/ipcirclebold.svg'
                : 'icons/ipcircle.svg'
            }
            alt={'IP Deny'}
            width={20}
            height={20}
          />
          <span>IP Deny</span>
        </Link>
        <Link
          href={'/'}
          className={`${styles.infoButton} ${
            pathname.includes('ss') ? styles.infoButtonClicked : ''
          }`}
        >
          <Image
            src={
              pathname.includes('ss')
                ? 'icons/analitycsbold.svg'
                : 'icons/analitycs.svg'
            }
            alt={'analytics'}
            width={20}
            height={20}
          />
          <span>Analytics</span>
        </Link>
        <Link
          href={'/caching'}
          className={`${styles.infoButton} ${
            pathname.includes('/caching') ? styles.infoButtonClicked : ''
          }`}
        >
          <Image
            src={
              pathname.includes('/caching')
                ? 'icons/broomcirclebold.svg'
                : 'icons/broom-circle.svg'
            }
            alt={'caching'}
            width={20}
            height={20}
          />
          <span>Caching</span>
        </Link>
        <Link
          href={'/users'}
          className={`${styles.infoButton} ${
            pathname.includes('/users') ? styles.infoButtonClicked : ''
          }`}
        >
          <Image
            src={
              pathname.includes('/users')
                ? 'icons/usersmanagmentbold.svg'
                : 'icons/usersmanagment.svg'
            }
            alt={'users management'}
            width={20}
            height={20}
          />
          <span>Users management</span>
        </Link>
        <Link
          href={'/logs'}
          className={`${styles.infoButton} ${
            pathname.includes('ss') ? styles.infoButtonClicked : ''
          }`}
        >
          <Image
            src={
              pathname.includes('ss') ? 'icons/logsbold.svg' : 'icons/logs.svg'
            }
            alt={'logs'}
            width={20}
            height={20}
          />
          <span>Logs</span>
        </Link>
      </div>
    </div>
  );
};

export default NavigationLine;
