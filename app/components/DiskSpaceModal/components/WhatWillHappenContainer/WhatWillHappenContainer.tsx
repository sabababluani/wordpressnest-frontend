import styles from './WhatWillHappenContainer.module.scss';

const WhatWillHappenContainer = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.topContainer}>
        <span>What will happen</span>
      </div>
      <div className={styles.bottomContainer}>
        <span className={styles.justCaption}>
          This add-on will appear on your next invoice, on December 30, 2024. It
          will include the cost for the next billing period.
        </span>
        <span className={styles.justCaption}>
          The subscription for this add-on will auto-renew and the payment
          method will be charged until canceled via MyHosting.
        </span>
      </div>
    </div>
  );
};

export default WhatWillHappenContainer;
