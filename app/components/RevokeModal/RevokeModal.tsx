import Button from '@/app/components/Button/Button';
import styles from './RevokeModal.module.scss';
import Image from 'next/image';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { RevokeModalPropsInterface } from './interfaces/revoke-modal-props.interface';

const RevokeModal = (props: RevokeModalPropsInterface) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.headline}>{props.headline}</span>
        <Image
          src="/icons/close-mini.svg"
          alt="close"
          width={24}
          height={24}
          className={styles.close}
          onClick={() => props.onClose()}
        />
      </div>
      <div className={styles.container}>
        <p>{props.content}</p>
        <div className={styles.buttons}>
          <Button
            backgroundColor={buttonbackgroundColorEnum.grey}
            innerContent="Cancel"
            onClick={() => props.onClose()}
          />
          <Button
            backgroundColor={buttonbackgroundColorEnum.red}
            innerContent={props.buttonText}
            onClick={() => {
              if (props.onSuccess) {
                props.onSuccess();
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default RevokeModal;
