'use client';

import styles from './CashingPagesContainer.module.scss';
import Button from '@/app/components/Button/Button';
import DropDown from '@/app/components/DropDown/DropDown';
import { CashingPagesPropsInterface } from './interfaces/cashing-pages-props.interfaces';

const CashingPagesContainer = (
  props: CashingPagesPropsInterface
): JSX.Element => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.topContainer}>
        <span className={styles.captionStyle}>{props.caption}</span>
        <span className={styles.descriptionStyle}>{props.description}</span>
      </div>
      <div className={styles.bottomContainer}>
        {props.dropDownActive && props.dropDownInnerContent && (
          <DropDown
            specificWidth={true}
            innerContentCaption={props.dropDownInnerContent}
          />
        )}
        <div>
          <Button
            backgroundColor={props.buttonBackgroundColor}
            innerContent={props.buttonInnerContent}
          />
        </div>
      </div>
    </div>
  );
};

export default CashingPagesContainer;
