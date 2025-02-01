import styles from './Price.module.scss';

const PriceDetails = (props: { caption: string }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.topContainer}>
        <span className={styles.captionStyle}>{props.caption}</span>
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.firstWrapper}>
          <div className={styles.captionWrapper}>
            <span className={styles.innerCaptionTop}>Reverse proxy add-on</span>
            <span className={styles.innerCaptionBottom}>
              WordPress Hosting add-on
            </span>
          </div>
          <span className={styles.innerCaptionTop}>50 USD / month</span>
        </div>
        <div className={styles.secondWrapper}>
          <div className={styles.captionWrapper}>
            <span className={styles.innerCaptionTop}>Total</span>
            <span className={styles.innerCaptionBottom}>Tax (0%)</span>
          </div>
          <div className={styles.captionWrapper}>
            <span className={styles.innerCaptionTop}>50 USD</span>
            <span className={styles.innerCaptionBottom}>0 USD</span>
          </div>
        </div>
        <div className={styles.thirdWrapper}>
          <div className={styles.lastCaptionWrapper}>
            <span className={styles.innerCaptionTop}>Subtotal</span>
            <span className={styles.innerCaptionBottom}>50 USD</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceDetails;
