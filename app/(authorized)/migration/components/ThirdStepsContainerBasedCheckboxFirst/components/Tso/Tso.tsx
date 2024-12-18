import styles from './Tso.module.scss';

const Tso = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>
        We recommend adding hosting as a user on your WP engine account. When
        providing your username and password to login, this will require
        additonal security checks, and thi magration process can take
        considerably longer.
      </p>
      <div className={styles.container}>
        <div className={styles.inputContainer}>
          <span className={styles.headline}>TsoHost username</span>
          <input type="text" className={styles.input} />
        </div>
        <div className={styles.inputContainer}>
          <span className={styles.headline}>TsoHost password</span>
          <input type="text" className={styles.input} />
        </div>
      </div>
    </div>
  );
};

export default Tso;
