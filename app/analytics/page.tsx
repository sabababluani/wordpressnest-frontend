'use client';

import { Select } from 'antd';
import TabsAnt from '../components/Tabs/Tabs';
import styles from './page.module.scss';
import Resource from './components/Resource/Resource';

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
          uniqueKey={'caching'}
          tabNames={[
            'Resource',
            'CDN Usage',
            'Dispersion',
            'Performance',
            'Response',
            'Cache',
            'Geo & IP',
          ]}
          tabContent={[<Resource key={'resource'} />]}
        />
      </div>
    </div>
  );
};

export default caching;
