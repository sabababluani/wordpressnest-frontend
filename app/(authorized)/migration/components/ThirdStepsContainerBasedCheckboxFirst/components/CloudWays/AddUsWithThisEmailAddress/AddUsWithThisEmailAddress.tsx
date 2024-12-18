import styles from './AddUsWithThisEmailAddres.module.scss';

const AddUsWithThisEmailAddress = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.wrapper}>
        <span className={styles.captionStyle}>
          To export your site data and transfer it to your Kinsta account, we
          need full access to your Cloudways account
        </span>
        <div className={styles.EmailCaptionAndInputWrapper}>
          <div className={styles.firstWrapper}>
            <span className={styles.migrationEmailCaptionStyle}>
              Add us with this email address
            </span>
            <span className={styles.migrationStyle}>migrations@kinsta.com</span>
          </div>
          <div className={styles.secondWrapper}>
            <span className={styles.costumerEmailStyle}>
              Customer email address
            </span>
            <input type="text" className={styles.inputStyle} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUsWithThisEmailAddress;
