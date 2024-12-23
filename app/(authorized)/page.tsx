'use client';

import styles from './page.module.scss';
import DashboardStat from '@/app/components/DashboardStat/DashboardStat';
import WordpressStat from '@/app/components/WordpressStat/WordpressStat';
import { SiteInterface } from '../components/Navigation/interfaces/navigation.props.interface';
import { useGetData } from '../hooks/useGetData';

const Home = () => {
  const { data: sitesData } = useGetData<SiteInterface[]>({
    endpoint: 'user/me',
  });

  return (
    <div className={styles.dashboardWrappe}>
      <div className={styles.topContainer}>
        <div className={styles.captionAndButtonWrapper}>
          <span className={styles.dashboardCaptionStyle}>Dashboard</span>
        </div>
        <div className={styles.dashboardStatsWrapper}>
          {sitesData?.map((site) => (
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
