'use client';

import { Select } from 'antd';
import styles from './ThirdStepsContainerBasedCheckboxSecond.module.scss';
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { BackupOptions } from './interfaces/backupOptions-interface';
import { BACKUP_OPTIONS, BACKUP_OPTIONS2 } from './dummy_data/backup-options';

const ThirdStepsContainerBasedCheckboxSecond = (): JSX.Element => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    Cookies.get('backupSelection'),
  );

  const [selectedValue2, setSelectedValue2] = useState<string | undefined>(
    Cookies.get('backupSelection2'),
  );

  useEffect(() => {
    if (selectedValue) {
      Cookies.set('backupSelection', selectedValue);
    }
    if (selectedValue2) {
      Cookies.set('backupSelection2', selectedValue2);
    }
  }, [selectedValue, selectedValue2]);

  // const SelectedComponent: React.ComponentType | null = useMemo(() => {
  //   const selectedOption: BackupOptions | undefined = BACKUP_OPTIONS.find(
  //     (option: BackupOptions) => option.value === selectedValue,
  //   );
  //   return selectedOption?.component || null;
  // }, [selectedValue]);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.descriptionStyle}>
        <span className={styles.mainCaptionStyle}>Select your backup type</span>
        <span className={styles.mainDescriptionStyle}>
          Moving your site from your previous hosting provider to your Hosting
          account.
        </span>
      </div>
      <div className={styles.selectionAndCaptionWrapper}>
        <span>Select your backup type</span>
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
      </div>
      <div className={styles.selectionAndCaptionWrapper}>
        <span>Select how you’ll share the backup</span>
        <Select
          value={selectedValue2}
          options={BACKUP_OPTIONS2.map(({ value, label }: BackupOptions) => ({
            value,
            label,
          }))}
          className={styles.specificSelect}
          placeholder="Select a backup type"
          onChange={(value: string) => setSelectedValue2(value)}
        />
      </div>
    </div>
  );
};

export default ThirdStepsContainerBasedCheckboxSecond;
