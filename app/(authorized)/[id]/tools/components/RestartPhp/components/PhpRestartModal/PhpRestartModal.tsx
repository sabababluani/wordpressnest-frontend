import Button from '@/app/components/Button/Button';
import styles from './PhpRestartModal.module.scss';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { PhpRestartModalPropsInterface } from './interfaces/php-restart-modal-props.interface';
import ModalHeader from '@/app/components/ModalHeader/ModalHeader';

const PhpRestartModal = (props: PhpRestartModalPropsInterface) => {
  return (
    <div className={styles.wrapper}>
      <ModalHeader headline="Restart PHP" onClose={props.onClose} />
      <div className={styles.container}>
        <p>Are you sure you want to restart your site&apos;s PHP engine?</p>
      </div>
      <div className={styles.buttons}>
        <Button
          backgroundColor={buttonbackgroundColorEnum.grey}
          innerContent="Cancel"
          onClick={() => props.onClose()}
        />
        <Button
          backgroundColor={buttonbackgroundColorEnum.black}
          innerContent="Restart PHP"
          onClick={() => props.onSuccess()}
          loading={props.loading}
          setLoading={props.setLoading}
        />
      </div>
    </div>
  );
};

export default PhpRestartModal;
