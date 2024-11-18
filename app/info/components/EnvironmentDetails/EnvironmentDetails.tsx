import Image from 'next/image';
import styles from './EnvironmentDetails.module.scss';

interface EnvironementDetailsPropsInterface {
  path?: string;
  environmentName?: string;
  siteIpAddress?: string;
  wordpressVersion?: string;
  ipAddress?: string;
  phpWorkers?: string;
}

const EnvironementDetails = (
  props: EnvironementDetailsPropsInterface
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
          <div className={styles.siteIpWrapper}>
            <span className={styles.siteIpStyle}>Site Ip address</span>
            <span className={styles.pathValueStyle}>{props.siteIpAddress}</span>
          </div>
          <div className={styles.wordpressNameWrapper}>
            <span className={styles.wordpressCaptionStyle}>
              WordPress version
            </span>
            <div className={styles.wordpressAndButtonWrapper}>
              <span className={styles.wordpressStyle}>
                {props.wordpressVersion}
              </span>
              <button className={styles.buttonWrapper}>
                <Image
                  width={24}
                  height={24}
                  src={'icons/loadingButton.svg'}
                  alt={'loading button'}
                />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.ipAddressSectionWrapper}>
          <div className={styles.ipAddressWrapper}>
            <span className={styles.ipAddressCaptionStyle}>
              IP address for external connections
            </span>
            <span className={styles.ipAddressStyle}>{props.ipAddress}</span>
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
