import styles from './FlywheelFields.module.scss';

const FlywheelFields = () => {
  return (
    <div className={styles.wrapper}>
      <span>
        We will need to access your{' '}
        <span className={styles.anchore}>Flywheel account</span> to export your
        site data for moving it over to your new Kinsta account. Please add us
        as a collaborator.
      </span>
      <div className={styles.container}>
        <span className={styles.emailHeading}>
          Add us with this email address
        </span>
        <span className={styles.email}>migrations@kinsta.com</span>
      </div>
    </div>
  );
};

export default FlywheelFields;
