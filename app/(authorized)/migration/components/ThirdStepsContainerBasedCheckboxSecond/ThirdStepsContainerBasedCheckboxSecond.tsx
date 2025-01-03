'use client';

import { Select } from 'antd';
import styles from './ThirdStepsContainerBasedCheckboxSecond.module.scss';
import React, { useState, useEffect, useMemo } from 'react';
import Cookies from 'js-cookie';
import { BackupOptions } from './interfaces/backupOptions-interface';
import { BACKUP_OPTIONS } from './dummy_data/backup-options';

const ThirdStepsContainerBasedCheckboxSecond = (): JSX.Element => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    Cookies.get('backupSelection'),
  );

  useEffect(() => {
    if (selectedValue) {
      Cookies.set('backupSelection', selectedValue);
    }
  }, [selectedValue]);

  const SelectedComponent: React.ComponentType | null = useMemo(() => {
    const selectedOption: BackupOptions | undefined = BACKUP_OPTIONS.find(
      (option: BackupOptions) => option.value === selectedValue,
    );
    return selectedOption?.component || null;
  }, [selectedValue]);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.descriptionStyle}>
        <span className={styles.mainCaptionStyle}>Select your backup type</span>
        <span className={styles.mainDescriptionStyle}>
          Moving your site from your previous hosting provider to your Hosting
          account.
        </span>
      </div>
      <Select
        value={selectedValue}
        options={BACKUP_OPTIONS.map(({ value, label }: BackupOptions) => ({
          value,
          label,
        }))}
        className={styles.specificSelect}
        placeholder="Select a backup type"
        onChange={(value: string) => setSelectedValue(value)}
      />
      {SelectedComponent && <SelectedComponent />}
    </div>
  );
};

export default ThirdStepsContainerBasedCheckboxSecond;
