'use client'

import { Select } from 'antd';
import styles from './ThirdStepsContainerBasedCheckboxFirst.module.scss';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Other from '../Other/Other';

const ThirdStepsContainerBasedCheckboxFirst = () => {

  const [selectedValue, setSelectedValue] = useState<string | undefined>(Cookies.get('migrateSelection')?.toString());

  useEffect(() => {
    if (selectedValue) {
      Cookies.set('migrateSelection', selectedValue);
    }
  }, [selectedValue]);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.descriptionWrapper}>
        <span className={styles.mainCaptionStyle}>
          {
            selectedValue === 'other' ||
              selectedValue === 'a2hosting' ||
              selectedValue === 'amazonaws' ||
              selectedValue === 'bluehost' ||
              selectedValue === 'cloudways' ||
              selectedValue === 'dreamhost' ?
              <span className={styles.mainCaptionStyle}>Current host</span>
              :
              <span className={styles.mainCaptionStyle}>Migrate from another host</span>
          }
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
          ]}
          className={styles.specificSelect}
          placeholder={'Select a hosting provider'}
          onChange={(value: string) => setSelectedValue(value)}
        />
      </div>
      {
        selectedValue == 'other' &&
        <>
          <Other />
        </>
      }
    </div>
  );
};

export default ThirdStepsContainerBasedCheckboxFirst;
