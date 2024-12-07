'use client';

import { Checkbox } from 'antd';
import styles from './HourlyBackup.module.scss';
import Image from 'next/image';
import { useState } from 'react';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';

const HourlyBackup = () => {
  const [activeCheckbox, setActiveCheckbox] = useState<number>(0);

  const handleCheckboxClick = (index: number): void => {
    setActiveCheckbox(index);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h1>Daily Backup</h1>
        <span>You can set backups every 6-hours or every hour.</span>
      </div>
      <div>
        <div
          className={`${styles.container} ${
            activeCheckbox === 1 && styles.activeContainer
          }`}
        >
          {
            <div className={styles.checkbox}>
              <Checkbox
                checked={activeCheckbox === 1 ? true : false}
              ></Checkbox>
            </div>
          }
          <div className={styles.containerContent}>
            <span className={styles.sixhour}>6-hours backups</span>
            <div className={styles.containerWrapper}>
              <span className={styles.freeDuring}>
                Free during the first month
              </span>
              <div className={styles.price}>
                <div className={styles.usdPrice}>
                  <span>49 USD / site / month</span>
                </div>
                <span className={styles.firstMonth}>after first month</span>
              </div>
              <span className={styles.text}>
                Backups will be created every 6-hours and available for 24
                hours, providing four additional restore points over the last
                day. Ideal for websites that change frequently.
              </span>
            </div>
            <div className={styles.button}>
              <Button
                backgroundColor={buttonbackgroundColorEnum.black}
                innerContent="Choose"
                onClick={() => handleCheckboxClick(1)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HourlyBackup;
