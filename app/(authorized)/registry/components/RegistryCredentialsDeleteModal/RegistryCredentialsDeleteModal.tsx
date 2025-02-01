import Button from '@/app/components/Button/Button';
import { RegistryCredentialsModalPropsInterface } from '../../interfaces/registry-credentials-modal-props.interface';
import styles from './RegistryCredentialsDeleteModal.module.scss';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import ModalHeader from '@/app/components/ModalHeader/ModalHeader';

const RegistryCredentialsDeleteModal = (
  props: RegistryCredentialsModalPropsInterface,
) => {
  return (
    <div>
      <ModalHeader headline="Delete credential" onClose={props.onClose} />

      <div className={styles.container}>
        <span>
          Are you sure you want to remove 123 from your registry credentials?
          You will no longer be able to use it to access private images. This
          action cannot be undone.
        </span>
        <div className={styles.buttons}>
          <Button
            backgroundColor={buttonbackgroundColorEnum.grey}
            innerContent="Cancel"
            onClick={props.onClose}
          />
          <Button
            backgroundColor={buttonbackgroundColorEnum.red}
            innerContent="Delete"
          />
        </div>
      </div>
    </div>
  );
};

export default RegistryCredentialsDeleteModal;
