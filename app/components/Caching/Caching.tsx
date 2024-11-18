'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './CachingComponent.module.css';

const CachingComponent = (): JSX.Element => {
  const pathName = usePathname();

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.activedWrapper}>
        <Link className={styles.actived} href={'/caching/edgeCaching'}>
          Edge Caching
        </Link>
      </div>
      <div className={pathName === '/cdn' ? styles.activedWrapper : ''}>
        <Link
          className={
            pathName === '/cdn' ? styles.actived : styles.notActivedWrapper
          }
          href={'/caching/cdn'}
        >
          CDN
        </Link>
      </div>
      <div
        className={
          pathName === '/serverCaching' ? styles.activedSpecificWrapper : ''
        }
      >
        <Link
          className={
            pathName === '/cdn' ? styles.actived : styles.notActivedWrapper
          }
          href={'/caching/serverCaching'}
        >
          Server Caching
        </Link>
      </div>
    </div>
  );
};

export default CachingComponent;
