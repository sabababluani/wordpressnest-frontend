'use client';

import { Select } from 'antd';
import styles from './ThirdStepsContainerBasedCheckboxFirst.module.scss';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Other from '../Other/Other';
import AmazonAwsFields from './components/AmazonAwsFields/AmazonAwsFields';
import GoogleCloudFields from './components/GoogleCloudFields/GoogleCloudFields';
import FlywheelFields from './components/FlywheelFields/FlywheelFields';
import LiquidWeb from './components/LiquidWeb/LiquidWeb';
import Dreamhost from './components/Dreamhost/Dreamhost';
import Bluehost from './components/Bluehost/Bluehost';
import A2Hosting from './components/A2Hosting/A2Hosting';
import Vultr from './components/Vultr/Vultr';

const ThirdStepsContainerBasedCheckboxFirst = () => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    Cookies.get('migrateSelection')?.toString(),
  );

  useEffect(() => {
    if (selectedValue) {
      Cookies.set('migrateSelection', selectedValue);
    }
  }, [selectedValue]);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.descriptionWrapper}>
        <span className={styles.mainCaptionStyle}>
          {selectedValue === 'other' ||
          selectedValue === 'a2hosting' ||
          selectedValue === 'amazonaws' ||
          selectedValue === 'bluehost' ||
          selectedValue === 'cloudways' ||
          selectedValue === 'dreamhost' ||
          selectedValue === 'googlecloud' ? (
            <span className={styles.mainCaptionStyle}>Current host</span>
          ) : (
            <span className={styles.mainCaptionStyle}>
              Migrate from another host
            </span>
          )}
        </span>
        <span className={styles.descriptionStyle}>
          Moving your site from your previous hosting provider to your Hosting
          account.
        </span>
      </div>
      <div className={styles.select}>
        <Select
          value={selectedValue}
          options={[
            { value: 'other', label: 'Other' },
            { value: 'a2hosting', label: 'A2 Hosting' },
            { value: 'amazonaws', label: 'Amazon AWS' },
            { value: 'bluehost', label: 'Bluehost' },
            { value: 'cloudways', label: 'Cloudways' },
            { value: 'dreamhost', label: 'DreamHost' },
            { value: 'googlecloud', label: 'Google Cloud' },
            { value: 'flywheel', label: 'Flywheel' },
            { value: 'liquidweb', label: 'Liquid Web' },
            { value: 'vultr', label: 'Vultr' },
          ]}
          className={styles.specificSelect}
          placeholder={'Select a hosting provider'}
          onChange={(value: string) => setSelectedValue(value)}
        />
      </div>
      {selectedValue === 'other' && <Other />}
      {selectedValue === 'amazonaws' && <AmazonAwsFields />}
      {selectedValue === 'googlecloud' && <GoogleCloudFields />}
      {selectedValue === 'flywheel' && <FlywheelFields />}
      {selectedValue === 'a2hosting' && <A2Hosting />}
      {selectedValue === 'bluehost' && <Bluehost />}
      {selectedValue === 'dreamhost' && <Dreamhost />}
      {selectedValue === 'liquidweb' && <LiquidWeb />}
      {selectedValue === 'vultr' && <Vultr />}
    </div>
  );
};

export default ThirdStepsContainerBasedCheckboxFirst;
