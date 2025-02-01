import styles from './IpDenyModal.module.scss';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import Button from '@/app/components/Button/Button';
import { IpdenyPropsInterface } from './interfaces/ipdeny-props.interface';
import ModalHeader from '@/app/components/ModalHeader/ModalHeader';

const IpDenyModal = (props: IpdenyPropsInterface): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <ModalHeader headline={'Add IP Deny'} onClose={props.onClose} />
      <div className={styles.innerContainer}>
        <p>
          Add IP Addresses To Block Them From Accessing The Site. EnterMultiple
          IP Addresses On Separate Lines.
        </p>
        <div className={styles.exampleWrapper}>
          <span>Example</span>
          <div className={styles.exampleContainer}>
            <div className={styles.content}>
              <span>127.0.0. 128.0.0.1/32 2001:0sxd/5420/46.4+6.5615n/00</span>
            </div>
          </div>
        </div>
        <div className={styles.textarea}>
          <span>IP addresses</span>
          <textarea placeholder={'Textarea'}></textarea>
        </div>
      </div>
      <div className={styles.buttons}>
        <Button
          backgroundColor={buttonbackgroundColorEnum.grey}
          innerContent={'Cancel'}
          onClick={props.onClose}
        />
        <Button
          backgroundColor={buttonbackgroundColorEnum.black}
          innerContent={'Add IP Addresses'}
        />
      </div>
    </div>
  );
};

export default IpDenyModal;
