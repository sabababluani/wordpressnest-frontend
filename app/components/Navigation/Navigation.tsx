'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import styles from './Navigation.module.scss';
import NavigationLine from './components/NavigationLine/NavigationLine';
import { NavigationPropsInterface } from './interfaces/navigation.props.interface';
import BaseApi from '@/app/api/BaseApi';
import useSWR from 'swr';
import UsersSettingsLine from './components/UsersSettingsLine/UsersSettingsLine';
import CompanySettingsLine from './components/CompanySettingsLine/CompanySettingsLine';

const Navigation = (): JSX.Element => {
  const pathname = usePathname();
  const [activeSite, setActiveSite] = useState<number | null>(null);
  const [activeStaticComponent, setActiveStaticComponent] = useState<
    number | null
  >(null);

  const fetcher = (url: string) =>
    BaseApi.get(url).then((response) => response.data);

  const { data: sitesData } = useSWR<NavigationPropsInterface[]>(
    '/setup/wordpress',
    fetcher
  );

  useEffect(() => {
    const storedSite = sessionStorage.getItem('activeSite');
    if (storedSite) {
      setActiveSite(Number(storedSite));
    }
  }, [sitesData]);

  const onSiteClick = (siteId: number): void => {
    setActiveSite((prevActiveSite) => {
      const newActiveSite = prevActiveSite === siteId ? null : siteId;

      if (newActiveSite !== null) {
        sessionStorage.setItem('activeSite', newActiveSite.toString());
      } else {
        sessionStorage.removeItem('activeSite');
      }

      return newActiveSite;
    });
  };

  const onStaticComponentClick = (componentId: number): void => {
    setActiveStaticComponent((prevActive) =>
      prevActive === componentId ? null : componentId
    );
  };

  return (
    <div className={styles.wrapper}>
      <h2>
        <Link href="/">Hosting</Link>
      </h2>
      <div className={styles.containerWrapper}>
        <Link
          href="/"
          className={`${styles.container} ${
            pathname === '/' ? styles.containerActive : ''
          }`}
        >
          <Image
            src={
              pathname === '/'
                ? '/icons/Dashboardwhite.svg'
                : '/icons/Dashboard.svg'
            }
            alt="Dashboard icon"
            width={24}
            height={24}
          />
          <span>Dashboard</span>
        </Link>
        <Link
          href="/wpsites"
          className={`${styles.container} ${
            pathname.includes('/wpsites') ? styles.containerActive : ''
          }`}
        >
          <Image
            src={
              pathname.includes('/wpsites')
                ? '/icons/wordpress-circle-white.svg'
                : '/icons/wordpress-circle.svg'
            }
            alt="WordPress sites icon"
            width={24}
            height={24}
          />
          <span>WordPress sites</span>
        </Link>
        {(pathname === '/billing' ||
          pathname === '/personalinfo' ||
          pathname === '/plans' ||
          pathname === '/invoices' ||
          pathname === '/paymentmethods') && (
          <>
            <div className={styles.sitesWrapper}>
              <div key={2}>
                <div
                  className={`${styles.container} ${
                    activeStaticComponent === 1 ? styles.sitesActive : ''
                  }`}
                  onClick={() => onStaticComponentClick(1)}
                >
                  <Image
                    src={
                      activeStaticComponent === 1
                        ? 'icons/userssettingsactive.svg'
                        : '/icons/userssettings.svg'
                    }
                    alt={'user'}
                    width={24}
                    height={24}
                  />
                  <span>User Settings</span>
                </div>
                {activeStaticComponent === 1 && <UsersSettingsLine />}
              </div>
            </div>
            <div className={styles.sitesWrapper}>
              <div key={3}>
                <div
                  className={`${styles.container} ${
                    activeStaticComponent === 2 ? styles.sitesActive : ''
                  }`}
                  onClick={() => onStaticComponentClick(2)}
                >
                  <Image
                    src={
                      activeStaticComponent === 2
                        ? '/icons/activebag.svg'
                        : '/icons/bag.svg'
                    }
                    alt={'user'}
                    width={24}
                    height={24}
                  />
                  <span>Company Settings</span>
                </div>
                {activeStaticComponent === 2 && <CompanySettingsLine />}
              </div>
            </div>
          </>
        )}
      </div>
      <div className={styles.sitesContainer}>
        <span>Sites</span>
        <div className={styles.sitesWrapper}>
          {sitesData?.map((site) => (
            <div key={site.id}>
              <div
                className={`${styles.sites} ${
                  activeSite === site.id ? styles.sitesActive : ''
                }`}
                onClick={() => onSiteClick(site.id)}
              >
                <span>{site.siteTitle}.com</span>
              </div>
              {activeSite === site.id && (
                <NavigationLine basePath={`/${site.id}`} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
