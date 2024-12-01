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
        {pathname === '/settings'}
        <Image
          src={
            pathname.includes('/invoices')
              ? 'icons/miniline.svg'
              : 'icons/line.svg'
          }
          alt={'Navigation line'}
          width={16}
          height={462}
        />
      </div>
      <div className={styles.infoWrapper}>
        {pathname.includes('/invoices') ? (
          <Link
            href={'/invoices'}
            className={`${styles.infoButton} ${
              pathname.includes('/invoices') ? styles.infoButtonClicked : ''
            }`}
          >
            <Image
              src={
                pathname.includes('/invoices')
                  ? 'icons/invoice.svg'
                  : 'icons/invoiceslight.svg'
              }
              alt={'invoices'}
              width={20}
              height={20}
            />
            <span>Invoices</span>
          </Link>
        ) : (
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
        )}
        {pathname.includes('/invoices') ? (
          <Link
            href={'/payment'}
            className={`${styles.infoButton} ${
              pathname.includes('/payment') ? styles.infoButtonClicked : ''
            }`}
          >
            <Image
              src={
                pathname.includes('payment')
                  ? 'icons/payment.svg'
                  : 'icons/payment.svg'
              }
              alt={'payment'}
              width={20}
              height={20}
            />
            <span>Payment methods</span>
          </Link>
        ) : (
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
        )}
        {pathname.includes('/invoices') ? (
          <Link
            href={'/billing'}
            className={`${styles.infoButton} ${
              pathname.includes('/billing') ? styles.infoButtonClicked : ''
            }`}
          >
            <Image
              src={
                pathname.includes('billing')
                  ? 'icons/billing.svg'
                  : 'icons/billing.svg'
              }
              alt={'payment'}
              width={20}
              height={20}
            />
            <span>Billing details</span>
          </Link>
        ) : (
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
        )}
        {pathname.includes('/invoices') ? (
          <Link
            href={'/refferals'}
            className={`${styles.infoButton} ${
              pathname.includes('/refferals') ? styles.infoButtonClicked : ''
            }`}
          >
            <Image
              src={
                pathname.includes('refferals')
                  ? 'icons/referall.svg'
                  : 'icons/referall.svg'
              }
              alt={'refferals'}
              width={20}
              height={20}
            />
            <span>Refferals</span>
          </Link>
        ) : (
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
        )}
        {pathname.includes('/invoices') ? (
          <Link
            href={'/api'}
            className={`${styles.infoButton} ${
              pathname.includes('/api') ? styles.infoButtonClicked : ''
            }`}
          >
            <Image
              src={
                pathname.includes('registry')
                  ? 'icons/api.svg'
                  : 'icons/api.svg'
              }
              alt={'registry'}
              width={20}
              height={20}
            />
            <span>API keys</span>
          </Link>
        ) : (
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
        )}
        {pathname.includes('/invoices') ? (
          <Link
            href={'/registry'}
            className={`${styles.infoButton} ${
              pathname.includes('/registry') ? styles.infoButtonClicked : ''
            }`}
          >
            <Image
              src={
                pathname.includes('registry')
                  ? 'icons/registry.svg'
                  : 'icons/registry.svg'
              }
              alt={'registry'}
              width={20}
              height={20}
            />
            <span>Registry credentials</span>
          </Link>
        ) : (
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
        )}
        {pathname.includes('/invoices') ? (
          <Link
            href={'/analytics'}
            className={`${styles.infoButton} ${
              pathname.includes('/analytics') ? styles.infoButtonClicked : ''
            }`}
          >
            <Image
              src={
                pathname.includes('analyticcs')
                  ? 'icons/settingsanalytics.svg'
                  : 'icons/settingsanalytics.svg'
              }
              alt={'analytics'}
              width={20}
              height={20}
            />
            <span>Analytics</span>
          </Link>
        ) : (
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
        )}
        {pathname.includes('/invoices') ? (
          <Link
            href={'/api'}
            className={`${styles.infoButton} ${
              pathname.includes('/api') ? styles.infoButtonClicked : ''
            }`}
          >
            <Image
              src={
                pathname.includes('registry')
                  ? 'icons/api.svg'
                  : 'icons/api.svg'
              }
              alt={'registry'}
              width={20}
              height={20}
            />
            <span>API keys</span>
          </Link>
        ) : (
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
        )}
        {pathname.includes('/invoices') ? (
          <Link
            href={'/registry'}
            className={`${styles.infoButton} ${
              pathname.includes('/registry') ? styles.infoButtonClicked : ''
            }`}
          >
            <Image
              src={
                pathname.includes('registry')
                  ? 'icons/registry.svg'
                  : 'icons/registry.svg'
              }
              alt={'registry'}
              width={20}
              height={20}
            />
            <span>Registry credentials</span>
          </Link>
        ) : (
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
        )}
        {pathname.includes('/invoices') ? (
          <Link
            href={'/users'}
            className={`${styles.infoButton} ${
              pathname.includes('/users') ? styles.infoButtonClicked : ''
            }`}
          >
            <Image
              src={
                pathname.includes('users')
                  ? 'icons/users.svg'
                  : 'icons/users.svg'
              }
              alt={'users'}
              width={20}
              height={20}
            />
            <span>Users</span>
          </Link>
        ) : (
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
        )}
        {pathname.includes('/invoices') ? (
          <Link
            href={'/labels'}
            className={`${styles.infoButton} ${
              pathname.includes('/labels') ? styles.infoButtonClicked : ''
            }`}
          >
            <Image
              src={
                pathname.includes('labels')
                  ? 'icons/labels.svg'
                  : 'icons/labels.svg'
              }
              alt={'labels'}
              width={20}
              height={20}
            />
            <span>Site labels</span>
          </Link>
        ) : (
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
        )}
        {pathname.includes('/invoices') ? (
          <Link
            href={'/activity'}
            className={`${styles.infoButton} ${
              pathname.includes('/activity') ? styles.infoButtonClicked : ''
            }`}
          >
            <Image
              src={
                pathname.includes('activity')
                  ? 'icons/activity.svg'
                  : 'icons/activity.svg'
              }
              alt={'activity'}
              width={20}
              height={20}
            />
            <span>User activity</span>
          </Link>
        ) : (
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
        )}
        {!pathname.includes('/invoices') ? (
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
        ) : null}
        {!pathname.includes('/invoices') ? (
          <Link
            href={'/logs'}
            className={`${styles.infoButton} ${
              pathname.includes('ss') ? styles.infoButtonClicked : ''
            }`}
          >
            <Image
              src={
                pathname.includes('ss')
                  ? 'icons/logsbold.svg'
                  : 'icons/logs.svg'
              }
              alt={'logs'}
              width={20}
              height={20}
            />
            <span>Logs</span>
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default NavigationLine;
