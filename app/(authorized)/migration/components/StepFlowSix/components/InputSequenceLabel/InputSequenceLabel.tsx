import { InputSequenceLabelPropsInterface } from '../../interfaces/input-sequence-label-interface';
import styles from './InputSequenceLabel.module.scss';

const InputSequenceLabel = (props: InputSequenceLabelPropsInterface) => {
  return (
    <div className={styles.mainWrapper}>
      <div>
        <span className={styles.topCaptionStyle}>
          {props.firstColumnsTopCaption}
        </span>
        <span className={styles.bottomCaptionStyle}>
          {props.firstColumnsBottomCaption}
        </span>
      </div>
      <div>
        <span className={styles.topCaptionStyle}>
          {props.secondColumnsTopCaption}
        </span>
        <span className={styles.bottomCaptionStyle}>
          {props.secondColumnsBottomCaption}
        </span>
      </div>
      <div>
        <span className={styles.topCaptionStyle}>
          {props.thirdColumnsTopCaption}
        </span>
        <span className={styles.bottomCaptionStyle}>
          {props.thirdColumnsBottomCaption}
        </span>
      </div>
      <div>
        <span className={styles.topCaptionStyle}>
          {props.fourthColumnsTopCaption}
        </span>
        <span className={styles.bottomCaptionStyle}>
          {props.fourthColumnsBottomCaption}
        </span>
      </div>
    </div>
  );
};

export default InputSequenceLabel;
