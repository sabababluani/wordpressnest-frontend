import Image from 'next/image';
import styles from '../BillingDetails.module.scss';

export const countryOptions = [
  {
    value: 'as',
    label: (
      <div className={styles.optionContainer}>
        <Image
          src="/Au.png"
          alt="US Flag"
          width={14}
          height={14}
          className={styles.flag}
        />
        <span className={styles.country}>Australia</span>
      </div>
    ),
  },
];
