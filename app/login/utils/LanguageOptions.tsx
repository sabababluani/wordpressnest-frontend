import styles from '../page.module.scss';
import Image from 'next/image';

export const LanguageOptions = [
  {
    value: 'as',
    label: (
      <div className={styles.optionContainer}>
        <Image
          src="/icons/languageicon.svg"
          alt="US Flag"
          width={24}
          height={24}
          className={styles.flag}
        />
        <span>English</span>
      </div>
    ),
  },
];
