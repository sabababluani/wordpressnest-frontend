'use client';

import React, { useState } from 'react';
import styles from './DailyBackupSelect.module.scss';
import Image from 'next/image';

const DailyBackupSelect: React.FC = () => {
  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);

  const toggleSelect = () => setIsSelectOpen((prev) => !prev);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container} onClick={toggleSelect}>
        <span>Restore To</span>
        <Image src="/icons/arrowdown.svg" alt="arrow" width={24} height={24} />
      </div>
      {isSelectOpen && (
        <div className={styles.liveContainer}>
          <div className={styles.circle}></div>
          <span className={styles.live}>Live</span>
        </div>
      )}
    </div>
  );
};

export default DailyBackupSelect;
