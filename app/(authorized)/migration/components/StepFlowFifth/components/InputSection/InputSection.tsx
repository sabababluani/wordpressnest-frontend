import { stepFlowsFifthContainerPropsInterface } from '../../interfaces/step-flows-fifth-container-props.interface';
import styles from './InputSection.module.scss';

const InputSection = (props: stepFlowsFifthContainerPropsInterface) => {
  return (
    <div
      className={`${styles.mainWrapper} ${
        props.enhancedGap ? styles.enhancedGap : ''
      }`}
    >
      <div className={styles.mainCaptionsWrapper}>
        <span className={styles.mainCaptionStyle}>{props.mainCaption}</span>
        <div
          className={`${styles.secondMainCaptionStyle} ${
            props.reducedSize ? styles.reducedSize : ''
          }`}
        >
          {props.inputsLabel}
        </div>
      </div>
      <input
        type="text"
        className={`${styles.inputStyle} ${
          props.enhancedInput ? styles.enhancedHeight : ''
        }`}
      />
    </div>
  );
};

export default InputSection;
