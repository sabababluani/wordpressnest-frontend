import Image from 'next/image';
import Link from 'next/link';
import styles from './WordpressStat.module.scss';
import { WordpressStatPropsInterface } from './interfaces/wordpress-stat-props.interface';

const WordpressStat:(props: WordpressStatPropsInterface) => JSX.Element = (props: WordpressStatPropsInterface): JSX.Element => {
  return (
    <div className={styles.containerWrapper}>
      <div className={styles.topContainer}>
        <div className={styles.mainCaptionViewAnalyticsDateWrapper}>
          <span className={styles.mainCaption}>{props.mainCaption}</span>
          <Link className={styles.viewAnalyticsStyle} href={'#'}>
            View Analytics
          </Link>
        </div>
        <span className={styles.dateStyle}>{props.dateCaption}</span>
        {props.mainMbActive && (
          <span className={styles.mainMbQuantity}>
            {props.mainMbQuantityCaption}
          </span>
        )}
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.progressBarWrapper}>
          <Image src={'/chart.png'} alt={'chart'} width={170} height={100} />
        </div>
        <div className={styles.dateAndDiskWrapper}>
          {props.thisMonthActive && (
            <div className={styles.dateWrapper}>
              <span className={styles.monthStyle}>{props.thisMonth}</span>
              <div className={styles.redPointAndDayQuantityWrapper}>
                <Image
                  className={styles.redPointStyle}
                  width={12}
                  height={12}
                  src={'icons/pointRed.svg'}
                  alt={'red point'}
                />
                <span className={styles.dayStyle}>{props.dayQuantity}</span>
              </div>
            </div>
          )}
          <div className={styles.diskWrapper}>
            <span className={styles.diskCaptionStyle}>
              {props.diskUsageCaption}
            </span>
            <div className={styles.bluePointAndMbQuantityWrapper}>
              {props.bluePoint && (
                <Image
                  className={styles.bluePointStyle}
                  width={12}
                  height={12}
                  src={'/icons/pointBlue.svg'}
                  alt={'blue point'}
                />
              )}
              <span className={styles.mbStyle}>{props.mbQuantity}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordpressStat;
