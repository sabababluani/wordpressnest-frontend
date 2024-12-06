import styles from './PrimeDetailsContainer.module.scss';

interface Props {
  coefficient: number;
}

const PriceDetailsContainer = (props: Props) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.topContainer}>
        <span>Price details</span>
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.firstContainer}>
          <div className={styles.wrapper}>
            <span className={styles.topCaption}>
              {props.coefficient} x 20 GB Additional Disk Space
            </span>
            <span className={styles.bottomContainer}>
              WordPress Hosting add-on
            </span>
          </div>
          <div className={styles.wrapper}>
            <span className={styles.topCaption}>
              Free during the first month
            </span>
            <span className={styles.bottomContainer}>
              20 USD / month after first month
            </span>
          </div>
        </div>
        <div className={styles.secondContainer}>
          <div className={styles.wrapper}>
            <span className={styles.topCaption}>Subtotal</span>
            <span className={styles.bottomContainer}>Tax (0%)</span>
          </div>
          <div className={styles.wrapper}>
            <span className={styles.topCaption}>
              {20 * props.coefficient} USD
            </span>
            <span className={styles.bottomContainer}>0 USD</span>
          </div>
        </div>
        <div className={styles.thirdContainer}>
          <div className={styles.wrapper}>
            <span className={styles.topCaption}>Total</span>
            <span className={styles.bottomContainer}>
              Your payment method will not be charged now, only on December 30,
              2024.
            </span>
          </div>
          <div className={styles.wrapper}>
            <span className={styles.topCaption}>
              {20 * (props.coefficient + 2)} USD
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceDetailsContainer;
