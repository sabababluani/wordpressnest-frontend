'use client';

import { Select } from 'antd';
import TabsAnt from '../components/Tabs/Tabs';
import styles from './page.module.scss';
import Resource from './components/Resource/Resource';
import CdnUsage from './components/CdnUsage/CdnUsage';
import Dispersion from './components/Dispersion/Dispersion';
import Performance from './components/Performance/Performance';
import Response from './components/Response/Responce';

const caching = (): JSX.Element => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.topContainers}>
        <span className={styles.mainCaptionStyle}>Analytics</span>
        <Select
          className={styles.selectStyle}
          placeholder="Select Time Range"
          options={[
            { value: '1d', label: 'Past 1 Day' },
            { value: '7d', label: 'Past 7 Days' },
            { value: '1m', label: 'Past 1 Month' },
          ]}
        />
      </div>
      <div>
        <TabsAnt
          uniqueKey={'analytics'}
          tabNames={[
            'Resource',
            'CDN Usage',
            'Dispersion',
            'Performance',
            'Response',
            'Cache',
            'Geo & IP',
          ]}
          tabContent={[
            <Resource key={'resource'} />,
            <CdnUsage key={'cdnUsage'} />,
            <Dispersion key={'dispersion'} />,
            <Performance key={'performance'} />,
            <Response key={'response'} />,
          ]}
        />
      </div>
    </div>
  );
};

export default caching;