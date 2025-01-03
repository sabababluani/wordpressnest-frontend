import Image from 'next/image';
import styles from './EnvironmentDetails.module.scss';
import { EnvironementDetailsPropsInterface } from './interfaces/environment-details-props.interface';

const EnvironementDetails = (
  props: EnvironementDetailsPropsInterface,
): JSX.Element => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.topContainer}>
        <span className={styles.captionStyle}>Environment details</span>
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.pathAndEnvironmentSectionWrapper}>
          <div className={styles.pathWrapper}>
            <span className={styles.pathCaptionStyle}>Path</span>
            <span className={styles.pathValueStyle}>{props.path}</span>
          </div>
          <div className={styles.environmentNameWrapper}>
            <span className={styles.environmentNameStyle}>
              Environment name
            </span>
            <span className={styles.environmentStyle}>
              {props.environmentName}
            </span>
          </div>
        </div>
        <div className={styles.siteIpAndWordpressWrapper}>
          <div className={styles.wordpressNameWrapper}>
            <span className={styles.wordpressCaptionStyle}>
              WordPress version
            </span>
            <div className={styles.wordpressAndButtonWrapper}>
              <span className={styles.wordpressStyle}>
                {props.wordpressVersion}
              </span>
              <span>{}</span>
              <button className={styles.buttonWrapper} onClick={props.onClick}>
                <Image
                  width={24}
                  height={24}
                  src={'/icons/loadingButton.svg'}
                  alt={'loading button'}
                />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.phpWrapper}>
          <span className={styles.phpCaptionStyle}>PHP workers</span>
          <span className={styles.phpValueStyle}>{props.phpWorkers}</span>
        </div>
      </div>
    </div>
  );
};

export default EnvironementDetails;
