'use client';

import React from 'react';
import Button from '@/app/components/Button/Button';
import styles from './DownloadBackup.module.scss';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import Image from 'next/image';

const DownloadBackup = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.download}>
            <h1>Download backups</h1>
            <span>
              Create a downloadable archive file containing your entire website,
              once per week. The downloadable backup will be available for you
              to download for 24 hours.
            </span>
          </div>
          <Button
            backgroundColor={buttonbackgroundColorEnum.black}
            innerContent="Create Backup now"
          />
        </div>
        <div className={styles.belowContainer}>
          <Image
            src="/icons/loading.svg"
            alt="Loading..."
            width={48}
            height={48}
            className={styles.spinningIcon}
          />
          <p>We are creating the backup</p>
          <span>
            This may take several minutes depending on the size of your site. We
            will send you an email as soon as the backup is ready for you to
            download.
          </span>
        </div>
      </div>
      <div className={styles.tableWrapper}></div>
    </>
  );
};

export default DownloadBackup;
