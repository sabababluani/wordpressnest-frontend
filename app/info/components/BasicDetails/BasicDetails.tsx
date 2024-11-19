import Image from 'next/image';
import styles from './BasicDetails.module.scss';
import { StatisticPropsInterface } from './interfaces/statistic-props.interface';

const BasicDetails = (props: StatisticPropsInterface): JSX.Element => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.topContainer}>
        <span className={styles.captionStyle}>Basic Details</span>
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.sequenceWrapper}>
          <div className={styles.locationDataWrapper}>
            <span className={styles.locationDataCaptionsStyle}>
              Location / data center
            </span>
            <span className={styles.locationDataStyle}>
              {props.locationDataCenter}
            </span>
          </div>
          <div className={styles.siteNameWrapper}>
            <span className={styles.siteNameCaptionStyle}>Site Name</span>
            <div className={styles.buttonAndSiteNameValueWrapper}>
              <span className={styles.siteNameStyle}>{props.siteName}</span>
              <button className={styles.pencilButtonStyle}>
                <Image
                  width={24}
                  height={24}
                  src={'icons/pencil.svg'}
                  alt={'pencil icon'}
                />
              </button>
            </div>
          </div>
          <div className={styles.labelsWrapper}>
            <span className={styles.labelsCaptionStyle}>Labels</span>
            <div className={styles.buttonAndLabelsValueWrapper}>
              <span className={styles.labelsStyle}>{props.Labels}</span>
              <button className={styles.secondPencilButtonStyle}>
                <Image
                  width={24}
                  height={24}
                  src={'icons/pencil.svg'}
                  alt={'pencil icon'}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicDetails;
