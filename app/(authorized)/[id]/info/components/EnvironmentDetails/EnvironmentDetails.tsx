import styles from './EnvironmentDetails.module.scss';
import { EnvironementDetailsPropsInterface } from './interfaces/environment-details-props.interface';
import Wrapper from '../reusableComponent/Wrapper/Wrapper';

const EnvironementDetails = (
  props: EnvironementDetailsPropsInterface,
): JSX.Element => {
  const handleCopy = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert('Copied to clipboard');
      })
      .catch(() => {
        alert('Failed to copy:');
      });
  };

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.topContainer}>
        <span className={styles.captionStyle}>Environment details</span>
      </div>

      <div className={styles.bottomContainer}>
        <div className={styles.columnWrapper}>
          <Wrapper
            enhancedWidth
            caption={'Path'}
            fieldsInnerContent={props.path}
            additionalHref={'/icons/copy.svg'}
            onClick={() => handleCopy(props.path!)}
          />
          <Wrapper
            enhancedWidth
            caption={'Site Ip Address'}
            fieldsInnerContent={props.siteIpAddress}
            additionalHref={'/icons/copy.svg'}
            onClick={() => handleCopy(props.siteIpAddress!)}
          />
        </div>
        <div className={styles.columnWrapper}>
          <Wrapper
            enhancedWidth
            caption={'IP address for external connections'}
            fieldsInnerContent={props.ipAddressForExternalConnections}
            additionalHref={'/icons/copy.svg'}
            onClick={() => handleCopy(props.ipAddressForExternalConnections!)}
          />
          <Wrapper
            enhancedWidth
            caption={'Environment name'}
            fieldsInnerContent={props.environmentName}
            onClick={() => {}}
          />
        </div>
        <div className={styles.columnWrapper}>
          <Wrapper
            enhancedWidth
            caption={'WordPress version'}
            fieldsInnerContent={props.wordpressVersion}
            additionalHref={'/icons/Arrow3.svg'}
            onClick={() => {}}
          />
          <Wrapper
            enhancedWidth
            caption={'PHP workers'}
            fieldsInnerContent={props.phpWorkers}
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default EnvironementDetails;
