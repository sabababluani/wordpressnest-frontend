import React, { useState } from 'react';
import styles from './InputAndLabel.module.scss';
import { InputLabelPropsInterface } from './interfaces/inputLabel-interface';

const InputAndLabel = (props: InputLabelPropsInterface) => {
  const [firstInputValue, setFirstInputValue] = useState<string | undefined>(
    '',
  );
  const [secondInputValue, setSecondInputValue] = useState<string | undefined>(
    '',
  );

  const handleFirstInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setFirstInputValue(e.target.value);
  };

  const handleSecondInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setSecondInputValue(e.target.value);
  };

  return (
    <div className={styles.mainContainer}>
      <div
        className={
          props.strechedInput ? styles.strechedWrapper : styles.wrapper
        }
      >
        <span className={styles.inputLabelStyle}>{props.firstColumnLabel}</span>
        <input
          className={`${props.strechedInput ? styles.strechedInputStyle : styles.inputWrapper}`}
          type="text"
          value={firstInputValue}
          onChange={handleFirstInputChange}
        />
      </div>
      {props.secondColumnActive && (
        <>
          <div className={styles.wrapper}>
            <span className={styles.inputLabelStyle}>
              {props.secondColumnLabel}
            </span>
            <input
              className={`${styles.inputWrapper} ${props.strechedInput && styles.strechedInputStyle}`}
              type="text"
              value={secondInputValue}
              onChange={handleSecondInputChange}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default InputAndLabel;
