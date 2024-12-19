import { InputLabelContainerPropsInterface } from '../../interfaces/Input-label-container-props-interface';
import InputSequenceLabel from '../InputSequenceLabel/InputSequenceLabel';
import styles from './InputLabelContainer.module.scss';

const InputLabelContainer = (props: InputLabelContainerPropsInterface) => {
  return (
    <div
      className={`${styles.mainWrapper} ${props.withSequence && styles.enhancedGap}`}
    >
      <span className={styles.mainCaptionStyle}>{props.mainCaption}</span>
      <span className={styles.secondMainCaption}>
        {props.mainSecondCaption}
      </span>
      {props.lastMainCaptionActive ? (
        <span className={styles.lastMainCaptionStyle}>
          {props.lastMainCaption}
        </span>
      ) : null}
      {props.withSequence && (
        <div className={styles.sequenceWrapper}>
          <InputSequenceLabel
            firstColumnsTopCaption={props.firstColumnsTopCaption}
            firstColumnsBottomCaption={props.firstColumnsBottomCaption}
            secondColumnsTopCaption={props.secondColumnsTopCaption}
            secondColumnsBottomCaption={props.secondColumnsBottomCaption}
            thirdColumnsTopCaption={props.thirdColumnsTopCaption}
            thirdColumnsBottomCaption={props.thirdColumnsBottomCaption}
            fourthColumnsTopCaption={props.fourthColumnsTopCaption}
            fourthColumnsBottomCaption={props.fourthColumnsBottomCaption}
          />
          {props.secondSequence && (
            <>
              <InputSequenceLabel
                firstColumnsTopCaption={
                  props.secondSequenceFirstColumnTopCaption
                }
                firstColumnsBottomCaption={
                  props.secondSequenceFirstColumnBottomCaption
                }
                secondColumnsTopCaption={
                  props.secondSequenceSecondColumnTopCaption
                }
                secondColumnsBottomCaption={
                  props.secondSequenceSecondColumnBottomCaption
                }
                thirdColumnsTopCaption={
                  props.secondSequenceThirdColumnTopCaption
                }
                thirdColumnsBottomCaption={
                  props.secondSequenceThirdColumnBottomCaption
                }
                fourthColumnsTopCaption={
                  props.secondSequenceFourthColumnTopCaption
                }
                fourthColumnsBottomCaption={
                  props.secondSequenceFourthColumnBottomCaption
                }
              />
              <div className={styles.lastSequence}>
                <span className={styles.topCaptionStyle}>HTTPS</span>
                <span className={styles.bottomCaptionStyle}>No</span>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default InputLabelContainer;
