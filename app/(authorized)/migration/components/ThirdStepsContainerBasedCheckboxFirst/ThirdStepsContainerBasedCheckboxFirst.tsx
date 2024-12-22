'use client';

import { Select } from 'antd';
import styles from './ThirdStepsContainerBasedCheckboxFirst.module.scss';
import React, { useState, useEffect, useMemo } from 'react';
import Cookies from 'js-cookie';
import { HostingOption } from './interfaces/hostingOptions-interface';
import { HOSTING_OPTIONS } from './dummy_data/hosting-options';

const ThirdStepsContainerBasedCheckboxFirst = (): JSX.Element => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    Cookies.get('migrateSelection'),
  );

  useEffect(() => {
    if (selectedValue) {
      Cookies.set('migrateSelection', selectedValue);
    }
  }, [selectedValue]);

  const SelectedComponent: React.ComponentType | null = useMemo((): React.ComponentType | null => {
    const selectedOption: HostingOption | undefined = HOSTING_OPTIONS.find(
      (option: HostingOption) => option.value === selectedValue,
    );
    return selectedOption?.component || null;
  }, [selectedValue]);

  const isMigrating = useMemo((): string | boolean | undefined => {
    return (
      selectedValue &&
      HOSTING_OPTIONS.some(
        (option: HostingOption) => option.value === selectedValue,
      )
    );
  }, [selectedValue]);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.descriptionWrapper}>
        <span className={styles.mainCaptionStyle}>
          {isMigrating ? 'Current host' : 'Migrate from another host'}
        </span>
        <span className={styles.descriptionStyle}>
          Moving your site from your previous hosting provider to your Hosting
          account.
        </span>
      </div>
      <div className={styles.select}>
        <Select
          value={selectedValue}
          options={HOSTING_OPTIONS.map(({ value, label }: HostingOption) => ({
            value,
            label,
          }))}
          className={styles.specificSelect}
          placeholder="Select a hosting provider"
          onChange={(value: string) => setSelectedValue(value)}
        />
      </div>
      {SelectedComponent && <SelectedComponent />}
    </div>
  );
};

export default ThirdStepsContainerBasedCheckboxFirst;
