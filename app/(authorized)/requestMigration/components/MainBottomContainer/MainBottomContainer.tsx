import styles from './MainBottomContainer.module.scss';

const MainBottomContainer = () => {
  return (
    <div className={styles.mainContainerWrapper}>
      <div className={styles.middleWrapper}>
        <span className={styles.mainCaptionStyle}>Migration request form</span>
        <div className={styles.wrapper}>
          <span className={styles.captionStyle}>
            This migration form provides us with all the information we need to
            safely and quickly move your site to Kinsta.
          </span>
          <ul className={styles.unOrderedListWrapper}>
            <li className={styles.listDescriptionStyle}>
              You can submit one WordPress website&apos;s migration per request
            </li>
            <li className={styles.listDescriptionStyle}>
              For any fields that aren&apos;t applicable, or you&apos;re unable
              to fill it out, you can place N/A in the text field
            </li>
            <li className={styles.listDescriptionStyle}>
              Please be sure to test out your login details before submitting
              your migration request, as incorrect logins could delay the
              completion time of your migration.
            </li>
            <li className={styles.listDescriptionStyle}>
              Whenever possible, for more efficient migrations, bulk migrations
              of five or more sites should utilize our bulk migration process.
              To begin a bulk migration, please open a support request to start
              the process.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainBottomContainer;
