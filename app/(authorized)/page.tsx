'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.scss';
import DashboardStat from '@/app/components/DashboardStat/DashboardStat';
import WordpressStat from '@/app/components/WordpressStat/WordpressStat';
import { UserInterface } from '../components/Navigation/interfaces/navigation.props.interface';
import { useGetData } from '../hooks/useGetData';
import { Skeleton } from 'antd';
import BaseApi from '@/app/api/BaseApi';

const Home = () => {
  const [siteIcons, setSiteIcons] = useState<{ [key: number]: string }>({});

  const {
    data: sitesData,
    isLoading: sitesLoading,
    error,
  } = useGetData<UserInterface>({
    endpoint: 'user/me',
  });

  const fetchSiteIcon = async (siteId: number) => {
    try {
      const response = await BaseApi.get(`/wp-cli/siteicon/${siteId}`);
      setSiteIcons((prevIcons) => ({
        ...prevIcons,
        [siteId]: response.data.siteIconUrl,
      }));
    } catch (err) {
      console.error(`Failed to fetch site icon for siteId: ${siteId}`, err);
    }
  };

  useEffect(() => {
    if (sitesData?.setup) {
      sitesData.setup.forEach((site) => {
        if (!siteIcons[site.id]) {
          fetchSiteIcon(site.id);
        }
      });
    }
  }, [sitesData]);

  const isLoading = sitesLoading || !Object.keys(siteIcons).length;

  return (
    <div className={styles.dashboardWrappe}>
      <div className={styles.topContainer}>
        <div className={styles.captionAndButtonWrapper}>
          <span className={styles.dashboardCaptionStyle}>Dashboard</span>
        </div>
        <div className={styles.dashboardStatsWrapper}>
          {isLoading || error
            ? Array.from({ length: 2 }).map((_, index) => (
                <Skeleton
                  key={index}
                  active
                  paragraph={{ rows: 2, width: ['80%', '60%'] }}
                />
              ))
            : sitesData?.setup.map((site) => (
                <DashboardStat
                  key={site.id}
                  point={'icons/pointGreen.svg'}
                  active={'Active'}
                  visits={'36,213 visits'}
                  description={
                    'We use the primary domain to refer to this site, and it is usually the '
                  }
                  healthQuantity={87}
                  siteName={site.siteTitle}
                  siteIcon={siteIcons[site.id] || site.siteIcon || '/wp.png'}
                />
              ))}
        </div>
      </div>
      <div className={styles.bottomContner}>
        <span className={styles.wordpressCaptionStyle}>
          WordPress Analytics
        </span>
        <div className={styles.wordpressStatsWrapper}>
          <WordpressStat
            mainCaption={'Resource Analytics'}
            dateCaption={'OCT 23 - 30'}
            thisMonthActive={true}
            thisMonth="This Month"
            dayQuantity={`Day ${26} out of ${31}`}
            diskUsageCaption={'Disk Usage'}
            mbQuantity={`${568} MB out of ${10} GB`}
          />
          <WordpressStat
            mainCaption={'Unique Visit'}
            dateCaption={'OCT 23 - 30'}
            dayQuantity={`Day ${26} out of ${31}`}
            diskUsageCaption={'Unique Visit'}
            mbQuantity={`${568} MB out of ${10} GB`}
            uniqueVisit={235}
          />
          <WordpressStat
            mainCaption={'Bandwidth'}
            dateCaption={'OCT 23 - 30'}
            mainMbActive={true}
            mainMbQuantityCaption={`${526} MB`}
            dayQuantity={`Day ${26} out of ${31}`}
          />
          <WordpressStat
            mainCaption={'CDN Usage'}
            dateCaption={'OCT 23 - 30'}
            mainMbActive={true}
            mainMbQuantityCaption={`${526} MB`}
            dayQuantity={`Day ${26} out of ${31}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
