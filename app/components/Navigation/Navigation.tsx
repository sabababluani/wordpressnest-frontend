'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navigation.module.scss';
import NavigationLine from './components/NavigationLine/NavigationLine';
import { UserInterface } from './interfaces/navigation.props.interface';
import UsersSettingsLine from './components/UsersSettingsLine/UsersSettingsLine';
import CompanySettingsLine from './components/CompanySettingsLine/CompanySettingsLine';
import { allowedPaths } from './utils/pathnames';
import { useGetData } from '@/app/hooks/useGetData';

const Navigation = (): JSX.Element => {
  const pathname = usePathname();
  const [activeSite, setActiveSite] = useState<number | null>(null);
  const [activeStaticComponent, setActiveStaticComponent] = useState<
    number | null
  >(null);

  const { data: sitesData } = useGetData<UserInterface>({
    endpoint: 'user/me',
  });

  useEffect(() => {
    const storedSite = sessionStorage.getItem('activeSite');
    if (storedSite) {
      setActiveSite(Number(storedSite));
    }

    if (
      pathname.includes('/personalInfo') ||
      pathname.includes('/notifications')
    ) {
      setActiveStaticComponent(1);
    }

    if (pathname.includes('/plans')) {
      setActiveStaticComponent(2);
    }
  }, [pathname, sitesData]);

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
      prevActive === componentId ? null : componentId,
    );
  };

  const isAllowedPath = allowedPaths.includes(pathname);

  return (
    <div className={styles.wrapper}>
      <h2>
        <Link href="/">Hosting</Link>
      </h2>
      <div className={styles.containerWrapper}>
        <Link
          href="/"
          className={`${styles.container} ${pathname === '/' ? styles.containerActive : ''}`}
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
          className={`${styles.container} ${pathname.includes('/wpsites') ? styles.containerActive : ''}`}
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
        {isAllowedPath && (
          <>
            <div className={styles.sitesWrapper}>
              <div key={2}>
                <div
                  className={`${styles.container} ${activeStaticComponent === 1 ? styles.sitesActive : ''}`}
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
                  className={`${styles.container} ${activeStaticComponent === 2 ? styles.sitesActive : ''}`}
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
          {sitesData?.setup.map((site) => (
            <div key={site.id}>
              <div
                className={`${styles.sites} ${activeSite === site.id ? styles.sitesActive : ''}`}
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
