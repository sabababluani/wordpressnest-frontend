'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './NavigationLine.module.scss';
import { NavigationLineProps } from './interfaces/navigation-line-props.interface';

const NavigationLine = (props: NavigationLineProps): JSX.Element => {
  const pathname = usePathname();

  return (
    <div className={styles.sitesInfo}>
      <div className={styles.sitesInfoImage}>
        <Image
          src={'/6line.svg'}
          alt={'Navigation line'}
          width={16}
          height={222}
        />
      </div>
      <div className={styles.infoWrapper}>
        <Link
          href={`${props.basePath}/info`}
          className={`${styles.infoButton} ${
            pathname.includes(`${props.basePath}/info`)
              ? styles.infoButtonClicked
              : ''
          }`}
        >
          <Image
            src={
              pathname.includes(`${props.basePath}/info`)
                ? '/icons/info.svg'
                : '/icons/infolight.svg'
            }
            alt={'info'}
            width={20}
            height={20}
          />
          <span>Info</span>
        </Link>

        {/* <Link
          href={'/domains'}
          className={`${styles.infoButton} ${
            pathname.includes('domains') ? styles.infoButtonClicked : ''
          }`}
        >
          <Image
            src={
              pathname.includes('domains')
                ? '/icons/domainsbold.svg'
                : '/icons/domains.svg'
            }
            alt={'domains'}
            width={20}
            height={20}
          />
          <span>Domains</span>
        </Link> */}
        <Link
          href={`${props.basePath}/backup`}
          className={`${styles.infoButton} ${
            pathname.includes(`${props.basePath}/backup`)
              ? styles.infoButtonClicked
              : ''
          }`}
        >
          <Image
            src={
              pathname.includes(`${props.basePath}/backup`)
                ? '/icons/backupbold.svg'
                : '/icons/backup.svg'
            }
            alt={'backup'}
            width={20}
            height={20}
          />
          <span>Backup</span>
        </Link>
        <Link
          href={`${props.basePath}/tools`}
          className={`${styles.infoButton} ${
            pathname.includes(`${props.basePath}/tools`)
              ? styles.infoButtonClicked
              : ''
          }`}
        >
          <Image
            src={
              pathname.includes(`${props.basePath}/tools`)
                ? '/icons/toolsbold.svg'
                : '/icons/tools.svg'
            }
            alt={'tools'}
            width={20}
            height={20}
          />
          <span>Tools</span>
        </Link>
        {/* <Link
          href={`${props.basePath}/redirects`}
          className={`${styles.infoButton} ${
            pathname.includes(`${props.basePath}/redirects`)
              ? styles.infoButtonClicked
              : ''
          }`}
        >
          <Image
            src={
              pathname.includes(`${props.basePath}/redirects`)
                ? '/icons/redirectsbold.svg'
                : '/icons/redirects.svg'
            }
            alt={'redirects'}
            width={20}
            height={20}
          />
          <span>Redirects</span>
        </Link> */}
        <Link
          href={`${props.basePath}/themesandplugins`}
          className={`${styles.infoButton} ${
            pathname.includes(`${props.basePath}/themesandplugins`)
              ? styles.infoButtonClicked
              : ''
          }`}
        >
          <Image
            src={
              pathname.includes(`${props.basePath}/themesandplugins`)
                ? '/icons/pluginsbold.svg'
                : '/icons/plugins.svg'
            }
            alt={'themes and plugins'}
            width={20}
            height={20}
          />
          <span>Themes and Plugins</span>
        </Link>
        {/* <Link
          href={'/addons'}
          className={`${styles.infoButton} ${
            pathname.includes('/addons') ? styles.infoButtonClicked : ''
          }`}
        >
          <Image
            src={
              pathname.includes('addons')
                ? '/icons/addonebold.svg'
                : '/icons/addone.svg'
            }
            alt={'add-ons'}
            width={20}
            height={20}
          />
          <span>Add-ons</span>
        </Link> */}
        {/* <Link
          href={'/ipdeny'}
          className={`${styles.infoButton} ${
            pathname.includes('/ipdeny') ? styles.infoButtonClicked : ''
          }`}
        >
          <Image
            src={
              pathname.includes('/ipdeny')
                ? '/icons/ipcirclebold.svg'
                : '/icons/ipcircle.svg'
            }
            alt={'IP Deny'}
            width={20}
            height={20}
          />
          <span>IP Deny</span>
        </Link> */}
        {/* <Link
          href={'/analytics'}
          className={`${styles.infoButton} ${
            pathname.includes('analytics') ? styles.infoButtonClicked : ''
          }`}
        >
          <Image
            src={
              pathname.includes('analytics')
                ? '/icons/analitycsbold.svg'
                : '/icons/analitycs.svg'
            }
            alt={'analytics'}
            width={20}
            height={20}
          />
          <span>Analytics</span>
        </Link> */}
        {/* <Link
          href={'/caching'}
          className={`${styles.infoButton} ${
            pathname.includes('/caching') ? styles.infoButtonClicked : ''
          }`}
        >
          <Image
            src={
              pathname.includes('/caching')
                ? '/icons/broomcirclebold.svg'
                : '/icons/broom-circle.svg'
            }
            alt={'caching'}
            width={20}
            height={20}
          />
          <span>Caching</span>
        </Link> */}
        <Link
          href={`${props.basePath}/users`}
          className={`${styles.infoButton} ${
            pathname.includes(`${props.basePath}/users`)
              ? styles.infoButtonClicked
              : ''
          }`}
        >
          <Image
            src={
              pathname.includes(`${props.basePath}/users`)
                ? '/icons/usersmanagmentbold.svg'
                : '/icons/usersmanagment.svg'
            }
            alt={'users management'}
            width={20}
            height={20}
          />
          <span>Users Management</span>
        </Link>
        <Link
          href={`${props.basePath}/logs`}
          className={`${styles.infoButton} ${
            pathname.includes(`${props.basePath}/logs`)
              ? styles.infoButtonClicked
              : ''
          }`}
        >
          <Image
            src={
              pathname.includes(`${props.basePath}/logs`)
                ? '/icons/logsbold.svg'
                : '/icons/logs.svg'
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
