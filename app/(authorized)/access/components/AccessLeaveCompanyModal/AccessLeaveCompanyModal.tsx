import Button from '@/app/components/Button/Button';
import styles from './AccessLeaveCompanyModal.module.scss';
import Image from 'next/image';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { AccessLeaveCompanyModalPropsInterface } from './interfaces/access-leave-company-modal-props.interface';

const AccessLeaveCompanyModal = (
  props: AccessLeaveCompanyModalPropsInterface,
) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.headline}>Leave company</span>
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
