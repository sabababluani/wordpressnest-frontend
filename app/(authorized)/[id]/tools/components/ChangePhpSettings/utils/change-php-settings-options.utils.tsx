import styles from '../ChangePhpSettings.module.scss';

export const PHP_VERSIONS = [
  {
    value: '8.4',
    label: (
      <div className={styles.optionContainer}>
        <span className={styles.versions}>PHP 8.4</span>
      </div>
    ),
  },
  {
    value: '8.3',
    label: (
      <div className={styles.optionContainer}>
        <span className={styles.versions}>PHP 8.3</span>
      </div>
    ),
  },
  {
    value: '8.2',
    label: (
      <div className={styles.optionContainer}>
        <span className={styles.versions}>PHP 8.2</span>
      </div>
    ),
  },
  {
    value: '8.1',
    label: (
      <div className={styles.optionContainer}>
        <span className={styles.versions}>PHP 8.1</span>
      </div>
    ),
  },
  {
    value: '8.0',
    label: (
      <div className={styles.optionContainer}>
        <span className={styles.versions}>PHP 8.0</span>
        <div className={styles.ltsContainer}>
          <span>LTS</span>
        </div>
      </div>
    ),
  },
  {
    value: '7.4',
    label: (
      <div className={styles.optionContainer}>
        <span className={styles.versions}>PHP 7.4</span>
        <div className={styles.ltsContainer}>
          <span>LTS</span>
        </div>
      </div>
    ),
  },
];
