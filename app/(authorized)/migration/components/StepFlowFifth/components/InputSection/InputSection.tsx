import { stepFlowsFifthContainersInterface } from '../../interfaces/stepFlowsFifthContainer-data-interface';
import styles from './inputSection.module.scss';

const InputSection = (props: stepFlowsFifthContainersInterface) => {
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
