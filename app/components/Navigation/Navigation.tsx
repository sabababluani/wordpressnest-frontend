'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import styles from './Navigation.module.scss';
import NavigationLine from './components/NavigationLine/NavigationLine';

const sitesData = [
  { name: 'Twitter', iconSrc: 'icons/twiter.svg' },
  { name: 'Spotify', iconSrc: 'icons/spotify.svg' },
  { name: 'RRRR', iconSrc: 'icons/r.svg' },
  { name: 'Slack', iconSrc: 'icons/slack.svg' },
];

const Navigation = (): JSX.Element => {
  const pathname = usePathname();
  const [activeSite, setActiveSite] = useState<string | null>(null);

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
          {sitesData.map((site) => (
            <div key={site.name}>
              <div
                className={`${styles.sites} ${
                  activeSite === site.name ? styles.sitesActive : ''
                }`}
                onClick={() => onSiteClick(site.name)}
              >
                <Image
                  src={site.iconSrc}
                  alt={`${site.name} icon`}
                  width={24}
                  height={24}
                />
                <span>{site.name}.com</span>
              </div>
              {activeSite === site.name && <NavigationLine />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
