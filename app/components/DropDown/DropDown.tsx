'use client';

import Image from 'next/image';
import styles from './DropDown.module.scss';
import { DropDownPropsInterface } from './interfaces/drop-down-props.interface';

const DropDown = (props: DropDownPropsInterface): JSX.Element => {
  return (
    <div className={styles.dropdownWrapper}>
      <div
        className={
          props.specificWidth
            ? styles.specificWidthMainWrapper
            : styles.mainWrapper
        }
        onClick={props.onDropDownClick}
        aria-expanded={props.isActive}
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
        />
      </div>
    </div>
  );
};

export default DropDown;
