'use client';

import { Breadcrumb } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import styles from './Breadcrumbs.module.scss';
import { customTitles } from './utils/bread-crumbs-pathnames';
import { useGetData } from '@/app/hooks/useGetData';
import {
  SiteInterface,
  UserInterface,
} from '@/app/components/Navigation/interfaces/navigation.props.interface';

const BreadCrumbs = () => {
  const pathname = usePathname();

  const { data } = useGetData<UserInterface>({ endpoint: 'user/me' });

  const dynamicSegment = pathname.split('/')[1];

  const currentSite = data?.setup.find(
    (site: SiteInterface) => site.id.toString() === dynamicSegment,
  );

  const items = pathname
    .split('/')
    .filter(Boolean)
    .map((segment, index) => {
      let label =
        customTitles[`/${segment}`] ||
        segment.charAt(0).toUpperCase() + segment.slice(1);

      if (index === 0 && currentSite) {
        label = currentSite.siteTitle;

        return {
          title: <Link href={`/${currentSite.id}/info`}>{label}</Link>,
          key: `/${currentSite.id}/info`,
        };
      }

      const path = `/${segment}`;
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
