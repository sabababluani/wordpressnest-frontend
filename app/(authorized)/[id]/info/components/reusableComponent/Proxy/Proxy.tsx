import { ProxpropsInterface } from './interface/proxy-props-interface';
import styles from './Proxy.module.scss';

const ProxyComp = (props: ProxpropsInterface) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.topContainer}>
        <span className={styles.mainCaptionStyle}>{props.caption}</span>
        <button className={styles.buttonStyle} onClick={props.onClick}>
          Change
        </button>
      </div>
      <div className={styles.bottomContainer}>
        <span className={styles.descriptionStyle}>{props.bottomCaption}</span>
        <div className={styles.monthlyFeeStyle}>50 USD / month</div>
      </div>
    </div>
  );
};

export default ProxyComp;
