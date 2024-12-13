'use client';

import Cookies from 'js-cookie';
import { useState } from 'react';
import Image from 'next/image';
import { Checkbox } from 'antd';
import styles from './SelectionsWrapper.module.scss';
import { SelectionsWrapperProps } from '../../interface/selection-wrapper-interface';

const SelectionsWrapper = (props: SelectionsWrapperProps): JSX.Element => {
  const [activeCheckbox, setActiveCheckbox] = useState<number | null>(
    Number(Cookies.get('firstStepsSpecificCheckboxIndex')) ||
      props.initialActiveCheckbox,
  );

  const handleCheckboxClick = (index: number): void | null => {
    if (activeCheckbox === index) {
      return null;
    }
    setActiveCheckbox(index);
    props.onCheckboxChange(index);
    Cookies.set('firstStepsSpecificCheckboxIndex', index.toString());
  };

  return (
    <div className={styles.mainContainer}>
      <div
        className={`${styles.checkboxSelectionContainer} ${
          activeCheckbox === 1 && styles.afterClickStyleFirst
        }`}
        onClick={() => handleCheckboxClick(1)}
      >
        <div className={styles.checkboxWrapper}>
          <Checkbox checked={activeCheckbox === 1} />
        </div>
        <div className={styles.belowInnerContentsWrapper}>
          <Image
            width={64}
            height={64}
            src="/icons/clock.svg"
            alt="clock icon"
          />
          <div className={styles.captionsWrapper}>
            <span className={styles.checkboxMainCaption}>
              As soon as possible
            </span>
            <span className={styles.checkboxDescription}>
              We will give a heads up before we start but will not wait for a
              specific approval.
            </span>
          </div>
        </div>
      </div>

      <div
        className={`${styles.checkboxSelectionContainer} ${
          activeCheckbox === 2 && styles.afterClickStyleSecond
        }`}
        onClick={() => handleCheckboxClick(2)}
      >
        <div className={styles.checkboxWrapper}>
          <Checkbox checked={activeCheckbox === 2} />
        </div>
        <div className={styles.belowInnerContentsWrapper}>
          <Image
            width={64}
            height={64}
            src="/icons/calendarSecond.svg"
            alt="calendar icon"
          />
          <div className={styles.captionsWrapper}>
            <span className={styles.checkboxMainCaption}>
              On a specific date
            </span>
            <span className={styles.checkboxDescription}>
              Select an ideal timeframe and our team will confirm availability.
            </span>
          </div>
        </div>
      </div>

      <div
        className={`${styles.checkboxSelectionContainer} ${
          activeCheckbox === 3 && styles.afterClickStyleThird
        }`}
        onClick={() => handleCheckboxClick(3)}
      >
        <div className={styles.checkboxWrapper}>
          <Checkbox checked={activeCheckbox === 3} />
        </div>
        <div className={styles.belowInnerContentsLastWrapper}>
          <Image
            width={64}
            height={64}
            src="/icons/lighting.svg"
            alt="lighting icon"
          />
          <button className={styles.buttonStyle}>49 USD</button>
          <div className={styles.captionsWrapper}>
            <span className={styles.checkboxMainCaption}>
              Expedited Migration in 8 hours
            </span>
            <span className={styles.checkboxDescription}>
              If we don&apos;t deliver within this time frame, we&apos;ll refund
              your payment.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectionsWrapper;
