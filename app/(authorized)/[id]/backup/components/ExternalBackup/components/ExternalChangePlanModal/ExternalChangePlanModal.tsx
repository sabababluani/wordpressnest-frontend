import styles from './ExternalChangePlanModal.module.scss';
import ExternalBackupBox from '../ExternalBackupBox/ExternalBackupBox';
import { useState } from 'react';
import { ExternalChangePlanModalPropsInterface } from './interfaces/external-change-plan-modal-props.interface';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import ModalHeader from '@/app/components/ModalHeader/ModalHeader';

const ExternalChangePlanModal = (
  props: ExternalChangePlanModalPropsInterface,
) => {
  const [activeService, setActiveService] = useState<number | null>(null);

  const handleServiceSelect = (serviceId: number) => {
    setActiveService(serviceId);
  };

  return (
    <>
      <ModalHeader headline={'Disable AWS backups'} onClose={props.onClose} />
      <div className={styles.content}>
        <div className={styles.container}>
          <ExternalBackupBox
            id={1}
            image="/aws.svg"
            hours=""
            price="2 USD / site / month"
            description="Create and upload a backup (files, database, or both) to your own Amazon S3 account once a week or month."
            isActive={activeService === 1}
            onClick={() => handleServiceSelect(1)}
            title="Amazon S3"
          />
          <ExternalBackupBox
            id={2}
            image="/googlecloud.svg"
            hours=""
            price="100 USD / site / month"
            description="Backups created every hour and available for 24 hours, providing 24 additional restore points over the last day. Ideal for ecommerce sites, membership sites, and sites that change continuously."
            isActive={activeService === 2}
            onClick={() => handleServiceSelect(2)}
            title="Google Cloud Storage"
          />
        </div>
      </div>
      <div className={styles.buttons}>
        <Button
          backgroundColor={buttonbackgroundColorEnum.grey}
          innerContent="Cancel"
          onClick={props.onClose}
        />
        <Button
          backgroundColor={buttonbackgroundColorEnum.black}
          innerContent="Next"
        />
      </div>
    </>
  );
};

export default ExternalChangePlanModal;
