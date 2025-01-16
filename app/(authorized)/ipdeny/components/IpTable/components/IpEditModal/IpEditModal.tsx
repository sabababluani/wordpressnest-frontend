import Button from '@/app/components/Button/Button';
import styles from './IpEditModal.module.scss';
import Image from 'next/image';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { IpEditModalPropsInterface } from './interfaces/ip-edit-modal-props.interface';

const IpEditModal = (props: IpEditModalPropsInterface) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.headline}>Change IP address</span>
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
