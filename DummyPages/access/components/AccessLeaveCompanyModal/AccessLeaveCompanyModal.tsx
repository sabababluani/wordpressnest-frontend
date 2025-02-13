import Button from '@/app/components/Button/Button';
import styles from './AccessLeaveCompanyModal.module.scss';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { AccessLeaveCompanyModalPropsInterface } from './interfaces/access-leave-company-modal-props.interface';
import ModalHeader from '@/app/components/ModalHeader/ModalHeader';

const AccessLeaveCompanyModal = (
  props: AccessLeaveCompanyModalPropsInterface,
) => {
  return (
    <div className={styles.wrapper}>
      <ModalHeader headline="Leave Company" onClose={props.onClose} />
      <div className={styles.container}>
        <p>
          Are you sure you want to leave{' '}
          <span className={styles.bold}>Misha&apos;s company?</span>
        </p>
        <p>
          Access will be revoked from{' '}
          <span className={styles.bold}>Misha&apos;s company</span> and all of
          its sites.
        </p>
        <div className={styles.buttons}>
          <Button
            backgroundColor={buttonbackgroundColorEnum.grey}
            innerContent="Cancel"
            onClick={() => props.onClose()}
          />
          <Button
            backgroundColor={buttonbackgroundColorEnum.red}
            innerContent="Leave Company"
            onClick={() => props.onSuccess()}
          />
        </div>
      </div>
    </div>
  );
};

export default AccessLeaveCompanyModal;
