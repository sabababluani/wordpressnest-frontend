'use client';

import { Switch } from 'antd';
import Image from 'next/image';
import { useState } from 'react';
import styles from './Tools.module.scss';
import DropDown from "@/app/components/DropDown/DropDown";
import { ToolsDataPropsInterface } from './interfaces/tools-data-props.interface';

const Tools = (props: ToolsDataPropsInterface): JSX.Element => {
  const onChange = (): void => {
    setIsDisable((prev) => !prev);
  };
  const [isDisable, setIsDisable] = useState<boolean>(true);

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.topContainer}>
        <div className={styles.captionAndIconWrapper}>
          <div className={styles.iconWrapper}>
            <Image
              width={24}
              height={24}
              src={`icons/${props.iconPath}`}
              alt={'icon'}
            />
          </div>
          <span className={styles.captionStyle}>{props.caption}</span>
        </div>
        <span className={styles.descriptionStyle}>{props.description}</span>
      </div>
      <div className={styles.bottomContainer}>
        {props.toggleActive && (
          <div className={styles.toggleWrapper}>
            <span className={styles.toggleCaptionStyle}>
              {isDisable ? 'Disable' : 'Enable'}
            </span>
            <Switch
              className={styles.toggleStyle}
              defaultChecked
              onChange={onChange}
            />
          </div>
        )}
        {props.buttonActive && (
          <div className={styles.buttonContainer}>
            <div className={styles.innerContentWrapper}>
              {props.buttonIconActivate && (
                <Image
                  width={20}
                  height={20}
                  src={`icons/${props.buttonIconPath}`}
                  alt={'icon'}
                />
              )}
              <span className={styles.buttonActiveCaptionStyle}>
                {props.ActivatedButtonCaption}
              </span>
            </div>
          </div>
        )}
        {props.dropDownActive && <DropDown innerContentCaption={'Modify'} />}
      </div>
    </div>
  );
};

export default Tools;
