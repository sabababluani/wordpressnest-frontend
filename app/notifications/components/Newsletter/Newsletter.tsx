'use client';

import { useState } from 'react';
import styles from './Newsletter.module.scss';

const Newsletter = (): JSX.Element => {
  const [placeholder, setPlaceholder] = useState<string>(
    ' Novatorimagaria@gmail.com'
  );
  const [inputValue, setInputValue] = useState<string>('');

  return (
    <div className={styles.mainContainer}>
      <div className={styles.topCOntianer}>
        <span className={styles.mainCaptionStyle}>Newsletter</span>
      </div>
      <div className={styles.bottomContainer}>
        <span className={styles.descriptionStyle}>
          Drive more traffic and revenue to your business and keep up with the
          latest web development languages, frameworks, and trends with
          Hosting’s biweekly newsletter
        </span>
        <div className={styles.wrapper}>
          <span className={styles.subUpdatesCaptionStyle}>
            Subscribe to updates
          </span>
          <div className={styles.inputAndButtonWrapper}>
            <div className={styles.inputWrapper}>
              <input
                type="email"
                value={inputValue}
                placeholder={placeholder}
                className={`${styles.gmailInputStyle} ${
                  !inputValue && styles.gmailInputPlaceholderIconStyle
                }`}
                onChange={(e) => setInputValue(e.target.value)}
                onFocus={() => setPlaceholder('')}
                onBlur={() => {
                  if (!inputValue) setPlaceholder('Novatorimagaria@gmail.com');
                }}
              />
            </div>
            <button className={styles.buttonStyleWrapper}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
