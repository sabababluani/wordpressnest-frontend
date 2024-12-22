import styles from './AddHostingToYourAccount.module.scss';

const AddHostingToYourAccount: () => JSX.Element = (): JSX.Element => {
  return (
    <div className={styles.mainContainer}>
      <span className={styles.mainCaptionStyle}>
        To export you site data and transfer it to your hosting account, we need
        full access (without biling) to your WP Enginge account
      </span>
      <div className={styles.mainWrapper}>
        <div className={styles.firstWrapper}>
          <span className={styles.emailStyle}>
            Add us with this email anddress
          </span>
          <span className={styles.emailDescritpionStyle}>
            Jigarikaci@gmail.com
          </span>
        </div>
        <div className={styles.secondWrapper}>
          <span className={styles.emailStyle}>Company name</span>
          <input type="text" className={styles.inputField} />
        </div>
      </div>
    </div>
  );
};

export default AddHostingToYourAccount;
