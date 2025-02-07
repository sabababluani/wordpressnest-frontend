'use client';

import { Progress } from 'antd';
import Image from 'next/image';
import styles from './DashboardStat.module.scss';
import { DashboardPropsInterfaces } from '@/app/components/DashboardStat/interfaces/dashboard-props.interfaces';

const DashboardStat = (props: DashboardPropsInterfaces): JSX.Element => {
  const onManageButtonClick = (): void => {};

  const onSettingbuttonClick = (): void => {};

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.topContainer}>
        <div className={styles.topContainerWrapper}>
          <div className={styles.mainFlagWrapper}>
            <Image
              className={styles.imageFlagStyle}
              width={56}
              height={56}
              src={'/wordpress.png'}
              alt="favicon"
            />
          </div>
          <div className={styles.siteNameAndStatisticWrapper}>
            <span className={styles.siteNameStyle}>{props.siteName}</span>
            <div className={styles.statisticWrapper}>
              <div className={styles.statusStyle}>
                <Image
                  width={12}
                  height={12}
                  src="./icons/pointGreen.svg"
                  alt="active"
                />
                <span className={styles.activeStyle}>{props.active}</span>
              </div>
              <Image
                width={6}
                height={6}
                src="./icons/greysmallpoint.svg"
                alt="grey small point"
              />
              <span className={styles.visitsStyle}>{props.visits} visits</span>
            </div>
          </div>
        </div>
        <span className={styles.description}>{props.description}</span>
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.healthStatisticWrapper}>
          <div className={styles.healthQuantityStyle}>
            {props.healthQuantity} % Health
          </div>
          <div className={styles.progressBarStyle}>
            <Progress strokeColor="#2BE437" percent={87} showInfo={false} />
          </div>
        </div>
        <div className={styles.buttonsWrapper}>
          <button
            className={styles.manageButtonStyle}
            onClick={onManageButtonClick}
          >
            Manage
          </button>
          <button
            className={styles.settingsButton}
            onClick={onSettingbuttonClick}
          >
            <Image
              width={24}
              height={24}
              src="icons/forbutton.svg"
              alt="settings button"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardStat;
