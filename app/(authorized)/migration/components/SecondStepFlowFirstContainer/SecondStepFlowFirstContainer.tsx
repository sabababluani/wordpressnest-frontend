'use client';

import { Checkbox } from 'antd';
import styles from './SecondStepFlowsFirstCheckbox.module.scss';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { SecondStepFlowCheckboxPropsInterface } from '../../interface/SecondStepFlowCheckbox-interface';

const SecondStepFlowsCheckbox = (
  props: SecondStepFlowCheckboxPropsInterface,
) => {
  return (
    <div
      className={`${styles.containerWrapper} ${
        props.activeCheckbox === props.firstCheckboxCoefficient ||
        props.activeCheckbox === props.secondCheckboxCoefficient
          ? styles.active
          : ''
      }`}
      onClick={() =>
        props.onClick(
          props.firstCheckboxCoefficient || props.secondCheckboxCoefficient,
        )
      }
    >
      <div className={styles.innerContainer}>
        <div className={styles.checkboxWrapper}>
          <Checkbox
            checked={
              props.activeCheckbox === props.firstCheckboxCoefficient ||
              props.activeCheckbox === props.secondCheckboxCoefficient
            }
          />
        </div>
        <div className={styles.descriptionsWrapper}>
          <span className={styles.mainCaptionStyle}>{props.mainCaption}</span>
          <span className={styles.descriptionStyle}>{props.description}</span>
        </div>
      </div>
      {props.buttonActive && (
        <Button
          backgroundColor={buttonbackgroundColorEnum.white}
          innerContent="Choose"
        />
      )}
    </div>
  );
};

export default SecondStepFlowsCheckbox;
