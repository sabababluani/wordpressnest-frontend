'use client';

import Image from 'next/image';
import { useState } from 'react';
import styles from './DropDown.module.scss';
import { DropDownPropsInterface } from './interfaces/drop-down-props.interface';

const DropDown = (props: DropDownPropsInterface): JSX.Element => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const onDropDownClick = (): void => {
    setIsActive((prev) => !prev);
  };

  return (
    <div className={styles.dropdownWrapper}>
      <div
        className={
          props.specificWidth
            ? styles.specificWidthMainWrapper
            : styles.mainWrapper
        }
        onClick={onDropDownClick}
        aria-expanded={isActive}
        role="button"
        tabIndex={0}
      >
        <span className={styles.innerContentCaptionStyle}>
          {props.innerContentCaption}
        </span>
        <Image
          width={24}
          height={24}
          src={'/icons/arrow.svg'}
          alt="arrow icon"
          className={`${styles.icon} ${isActive ? styles.activeIcon : ''}`}
        />
      </div>

      {isActive && (
        <ul className={styles.dropdownMenu}>
          <li className={styles.dropdownItem}>Option 1</li>
          <li className={styles.dropdownItem}>Option 2</li>
          <li className={styles.dropdownItem}>Option 3</li>
        </ul>
      )}
    </div>
  );
};

export default DropDown;
