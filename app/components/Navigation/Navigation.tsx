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

const Navigation = (): JSX.Element => {
  const pathname = usePathname();
  const [activeSite, setActiveSite] = useState<string | null>(null);

  const fetcher = (url: string) =>
    BaseApi.get(url).then((response) => response.data);
  const { data: sitesData } = useSWR<NavigationPropsInterface[]>(
    '/setup/wordpress',
    fetcher
  );

  useEffect(() => {
    const storedSite = sessionStorage.getItem('activeSite');
    if (storedSite) {
      setActiveSite(storedSite);
    }
  }, []);

  const onSiteClick = (siteName: string): void => {
    setActiveSite((prevActiveSite) => {
      const newActiveSite = prevActiveSite === siteName ? null : siteName;

      if (newActiveSite) {
        sessionStorage.setItem('activeSite', newActiveSite);
      } else {
        sessionStorage.removeItem('activeSite');
      }

      return newActiveSite;
    });
  };

  return (
    <div className={styles.wrapper}>
      <h2>
        <Link href={'/'}>Hosting</Link>
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
                ? 'icons/Dashboardwhite.svg'
                : 'icons/Dashboard.svg'
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
              pathname === '/wpsites'
                ? 'icons/wordpress-circle-white.svg'
                : 'icons/wordpress-circle.svg'
            }
            alt="WordPress sites icon"
            width={24}
            height={24}
          />
          <span>WordPress sites</span>
        </Link>
      </div>
      <div className={styles.sitesContainer}>
        <span>Sites</span>
        <div className={styles.sitesWrapper}>
          {sitesData?.map((site) => (
            <div key={site.siteTitle}>
              <div
                className={`${styles.sites} ${
                  activeSite === site.siteTitle ? styles.sitesActive : ''
                }`}
                onClick={() => onSiteClick(site.siteTitle)}
              >
                <Image
                  src="/public/icons/twitter.svg"
                  alt={`${site.siteTitle} icon`}
                  width={24}
                  height={24}
                />
                <span>{site.siteTitle}.com</span>
              </div>
              {activeSite === site.siteTitle && <NavigationLine />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
