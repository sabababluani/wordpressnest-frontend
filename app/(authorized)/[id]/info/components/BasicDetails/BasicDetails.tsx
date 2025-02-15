import Wrapper from '../reusableComponent/Wrapper/Wrapper';
import styles from './BasicDetails.module.scss';
import { StatisticPropsInterface } from './interfaces/statistic-props.interface';

const BasicDetails = (props: StatisticPropsInterface): React.JSX.Element => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.topContainer}>
        <span className={styles.captionStyle}>Basic Details</span>
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.sequenceWrapper}>
          <Wrapper
            caption={'Location / data center'}
            fieldsInnerContent={props.locationDataCenter!}
          />
          <Wrapper
            caption={'Site Name'}
            fieldsInnerContent={props.siteName!}
            additionalHref={'/icons/edit44.svg'}
            onClick={props.onClick}
          />
          <Wrapper
            caption={'Labels'}
            fieldsInnerContent={props.Labels.length > 0 ? props.Labels : ''}
            additionalHref={'/icons/edit44.svg'}
            onClick={props.onClick2}
          />
        </div>
      </div>
    </div>
  );
};

export default BasicDetails;
