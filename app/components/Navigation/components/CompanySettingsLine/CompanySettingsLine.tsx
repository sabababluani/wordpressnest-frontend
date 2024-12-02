'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './CompanySettingsLine.module.scss';

const CompanySettingsLine = (): JSX.Element => {
  const pathname = usePathname();

  return (
    <div className={styles.sitesInfo}>
      <div className={styles.sitesInfoImage}>
        <Image
          src={'/miniline.svg'}
          alt={'Navigation line'}
          width={15}
          height={422}
        />
      </div>
      <div className={styles.infoWrapper}>
        <Link
          href={'/plans'}
          className={`${styles.infoButton} ${
            pathname.includes('/plans') ? styles.infoButtonClicked : ''
          }`}
        >
          <Image
            src={
              pathname.includes('/plans')
                ? '/icons/taskplan.svg'
                : '/icons/taskplan.svg'
            }
            alt={'plans'}
            width={20}
            height={20}
          />
          <span>My Plan</span>
        </Link>

        <Link
          href={'/invoices'}
          className={`${styles.infoButton} ${
            pathname.includes('invoices') ? styles.infoButtonClicked : ''
          }`}
        >
          <Image
            src={
              pathname.includes('/invoices')
                ? '/icons/invoice.svg'
                : '/icons/invoice.svg'
            }
            alt={'invoices'}
            width={20}
            height={20}
          />
          <span>Invoices</span>
        </Link>

        <Link
          href={'/paymentmethods'}
          className={`${styles.infoButton} ${
            pathname.includes('/paymentmethods') ? styles.infoButtonClicked : ''
          }`}
        >
          <Image
            src={
              pathname.includes('/paymentmethods')
                ? '/icons/payment.svg'
                : '/icons/payment.svg'
            }
            alt={'paymentmethods'}
            width={20}
            height={20}
          />
          <span>Payment methods</span>
        </Link>

        <Link
          href={'/billing'}
          className={`${styles.infoButton} ${
            pathname.includes('/billing') ? styles.infoButtonClicked : ''
          }`}
        >
          <Image
            src={
              pathname.includes('/billing')
                ? '/icons/billing.svg'
                : '/icons/billing.svg'
            }
            alt={'tools'}
            width={20}
            height={20}
          />
          <span>Billing details</span>
        </Link>

        <Link
          href={'/referall'}
          className={`${styles.infoButton} ${
            pathname.includes('/referall') ? styles.infoButtonClicked : ''
          }`}
        >
          <Image
            src={
              pathname.includes('/referall')
                ? '/icons/referall.svg'
                : '/icons/referall.svg'
            }
            alt={'referall'}
            width={20}
            height={20}
          />
          <span>Refferals</span>
        </Link>
        <Link
          href={'/api'}
          className={`${styles.infoButton} ${
            pathname.includes('/api') ? styles.infoButtonClicked : ''
          }`}
        >
          <Image
            src={
              pathname.includes('/api') ? '/icons/api.svg' : '/icons/api.svg'
            }
            alt={'api'}
            width={20}
            height={20}
          />
          <span>API keys</span>
        </Link>

        <Link
          href={'/registry'}
          className={`${styles.infoButton} ${
            pathname.includes('/registry') ? styles.infoButtonClicked : ''
          }`}
        >
          <Image
            src={
              pathname.includes('/registry')
                ? '/icons/registry.svg'
                : '/icons/registry.svg'
            }
            alt={'registry'}
            width={20}
            height={20}
          />
          <span>Registry credentials</span>
        </Link>

        <Link
          href={'/analytics'}
          className={`${styles.infoButton} ${
            pathname.includes('/analytics') ? styles.infoButtonClicked : ''
          }`}
        >
          <Image
            src={
              pathname.includes('/analytics')
                ? '/icons/analitycsbold.svg'
                : '/icons/analitycs.svg'
            }
            alt={'analytics'}
            width={20}
            height={20}
          />
          <span>Analytics</span>
        </Link>

        <Link
          href={'/users'}
          className={`${styles.infoButton} ${
            pathname.includes('users') ? styles.infoButtonClicked : ''
          }`}
        >
          <Image
            src={
              pathname.includes('users')
                ? '/icons/users.svg'
                : '/icons/users.svg'
            }
            alt={'analytics'}
            width={20}
            height={20}
          />
          <span>Users</span>
        </Link>

        <Link
          href={'/labels'}
          className={`${styles.infoButton} ${
            pathname.includes('/labels') ? styles.infoButtonClicked : ''
          }`}
        >
          <Image
            src={
              pathname.includes('/labels')
                ? '/icons/labels.svg'
                : '/icons/labels.svg'
            }
            alt={'labels'}
            width={20}
            height={20}
          />
          <span>Site labels</span>
        </Link>

        <Link
          href={'/activity'}
          className={`${styles.infoButton} ${
            pathname.includes('activity') ? styles.infoButtonClicked : ''
          }`}
        >
          <Image
            src={
              pathname.includes('activity')
                ? '/icons/activity.svg'
                : '/icons/activity.svg'
            }
            alt={'activity'}
            width={20}
            height={20}
          />
          <span>User activity</span>
        </Link>
      </div>
    </div>
  );
};

export default CompanySettingsLine;