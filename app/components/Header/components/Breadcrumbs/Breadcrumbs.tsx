'use client';
import { Breadcrumb } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import styles from './Breadcrumbs.module.scss';

const BreadCrumbs: React.FC = () => {
  const pathname = usePathname();

  const pathSegments = pathname.split('/').filter(Boolean);

  const items = [
    {
      title: <Link href="/">Dashboard</Link>,
    },
    ...pathSegments.map((segment, index) => {
      const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
      const label = segment.charAt(0).toUpperCase() + segment.slice(1);

      return {
        title: <Link href={path}>{label}</Link>,
        key: path,
      };
    }),
  ];

  return (
      <div className={styles.breadcrumbContainer}>
        <div className={styles.breadcrumb}>
          <Breadcrumb separator="/" items={items} />
        </div>
      </div>
  );
};

export default BreadCrumbs;
