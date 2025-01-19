import Image from 'next/image';
import styles from './ModalHeader.module.scss';
import { ModalHeaderPropsInterface } from './interfaces/modal-header-props.interface';

const ModalHeader = (props: ModalHeaderPropsInterface) => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <span className={styles.headline}>{props.headline}</span>
      </div>
      <Image
        src="/icons/close-mini.svg"
        alt="close"
        width={24}
        height={24}
        onClick={props.onClose}
      />
    </div>
  );
};

export default ModalHeader;
