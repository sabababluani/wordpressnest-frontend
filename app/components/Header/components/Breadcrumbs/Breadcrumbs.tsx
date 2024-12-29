'use client';

import { Breadcrumb } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import styles from './Breadcrumbs.module.scss';
import { customTitles } from './utils/bread-crumbs-pathnames';

const BreadCrumbs = () => {
  const pathname = usePathname();

  const items = pathname
    .split('/')
    .filter(Boolean)
    .map((segment) => {
      const path = `/${segment}`;
      const label =
        customTitles[path] ||
        segment.charAt(0).toUpperCase() + segment.slice(1);

      return {
        title: <Link href={path}>{label}</Link>,
        key: path,
      };
    });

  return (
    <div className={styles.breadcrumbContainer}>
      <div className={styles.breadcrumb}>
        <Breadcrumb
          separator="/"
          items={[{ title: <Link href="/">Dashboard</Link> }, ...items]}
        />
      </div>
    </div>
  );
};

export default BreadCrumbs;
