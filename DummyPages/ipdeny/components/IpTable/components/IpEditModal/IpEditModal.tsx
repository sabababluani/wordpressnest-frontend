import Button from '@/app/components/Button/Button';
import styles from './IpEditModal.module.scss';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { IpEditModalPropsInterface } from './interfaces/ip-edit-modal-props.interface';
import ModalHeader from '@/app/components/ModalHeader/ModalHeader';

const IpEditModal = (props: IpEditModalPropsInterface) => {
  return (
    <div className={styles.wrapper}>
      <ModalHeader headline="Change IP address" onClose={props.onClose} />
      <div className={styles.container}>
        <input type="text" />
      </div>
      <div className={styles.buttons}>
        <Button
          backgroundColor={buttonbackgroundColorEnum.grey}
          innerContent="Cancel"
          onClick={() => props.onClose()}
        />
        <Button
          backgroundColor={buttonbackgroundColorEnum.black}
          innerContent="Change IP Addresses"
          onClick={() => props.onSuccess()}
          // loading={props.loading}
          // setLoading={props.setLoading}
        />
      </div>
    </div>
  );
};

export default IpEditModal;
