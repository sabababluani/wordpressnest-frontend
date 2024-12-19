import styles from './Pagali.module.scss';

const Pagali = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>
        We will need to access your WPX Hosting account to export your site data
        for movign it over to hyour hosting account. if you have 2- factor
        authetication enabled, plaze disable it now for the time of migration
      </p>
      <div className={styles.container}>
        <div className={styles.inputContainer}>
          <span className={styles.headline}>Pagely username</span>
          <input type="text" className={styles.input} />
        </div>
        <div className={styles.inputContainer}>
          <span className={styles.headline}>Pagely password</span>
          <input type="text" className={styles.input} />
        </div>
      </div>
    </div>
  );
};

export default Pagali;
