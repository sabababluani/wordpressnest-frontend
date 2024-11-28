'use client';
import { useEffect, useState } from 'react';
import styles from './page.module.css';
import DashboardStat from '@/app/components/DashboardStat/DashboardStat';
import WordpressStat from '@/app/components/WordpressStat/WordpressStat';
import { NavigationPropsInterface } from './components/Navigation/interfaces/navigation.props.interface';
import BaseApi from './api/BaseApi';

const Home = () => {
  const [sitesData, setSitesData] = useState<NavigationPropsInterface[]>([]);

  useEffect(() => {
    BaseApi.get('/setup/wordpress', {
      withCredentials: true,
    })
      .then((response) => {
        setSitesData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <div className={styles.dashboardWrappe}>
      <div className={styles.topContainer}>
        <div className={styles.captionAndButtonWrapper}>
          <span className={styles.dashboardCaptionStyle}>Dashboard</span>
        </div>
        <div className={styles.dashboardStatsWrapper}>
          {sitesData.map((site, index) => (
            <DashboardStat
              key={index}
              point={'icons/pointGreen.svg'}
              active={'Active'}
              visits={'36,213 visits'}
              description={
                'We use the primary domain to refer to this site, and it is usually the '
              }
              healthQuantity={87}
              siteName={site.siteTitle}
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
