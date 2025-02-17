'use client';

import styles from './page.module.scss';
import DashboardStat from '@/app/components/DashboardStat/DashboardStat';
import { UserInterface } from '../components/Navigation/interfaces/navigation.props.interface';
import { useGetData } from '../hooks/useGetData';
import { Skeleton } from 'antd';

const Home = () => {
  const {
    data: sitesData,
    isLoading,
    error,
  } = useGetData<UserInterface>({
    endpoint: 'user/me',
  });

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
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
