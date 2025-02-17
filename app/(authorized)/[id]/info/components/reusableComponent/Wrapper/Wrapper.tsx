import { WrapperPropsInterface } from '../../../interfaces/wrapper-props.interface';
import styles from './Wrapper.module.scss';
import Image from 'next/image';

const Wrapper = (props: WrapperPropsInterface) => {
  return (
    <div className={`${styles.locationDataWrapper}`}>
      <span className={styles.locationDataCaptionsStyle}>{props.caption}</span>
      <div
        className={
          props.enhancedWidth ? styles.enhancedWidth : styles.locationDataStyle
        }
      >
        <span>{props.fieldsInnerContent}</span>
        <div className={styles.additionalIconWrapper} onClick={props.onClick}>
          {props.additionalHref && (
            <Image
              width={24}
              height={24}
              src={props.additionalHref!}
              alt={'pencil icon'}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
