import Button from '@/app/components/Button/Button';
import styles from './RevokeModal.module.scss';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { RevokeModalPropsInterface } from './interfaces/revoke-modal-props.interface';
import ModalHeader from '../ModalHeader/ModalHeader';

const RevokeModal = (props: RevokeModalPropsInterface) => {
  return (
    <div className={styles.wrapper}>
      <ModalHeader headline={props.headline} onClose={props.onClose} />
      <div className={styles.container}>
        <p>{props.content}</p>
      </div>
      <div className={styles.buttons}>
        <Button
          backgroundColor={buttonbackgroundColorEnum.grey}
          innerContent="Cancel"
          onClick={() => props.onClose()}
        />
        <Button
          backgroundColor={buttonbackgroundColorEnum.red}
          innerContent={props.buttonText}
          onClick={() => props.onSuccess()}
          loading={props.loading}
          setLoading={props.setLoading}
        />
      </div>
    </div>
  );
};

export default RevokeModal;
