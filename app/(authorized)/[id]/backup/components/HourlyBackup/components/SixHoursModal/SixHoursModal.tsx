import Button from '@/app/components/Button/Button';
import styles from './SixHoursModal.module.scss';
import Image from 'next/image';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { SixHoursModalPropsInterface } from './interfaces/six-hours-modal-props.interface';
import ModalHeader from '@/app/components/ModalHeader/ModalHeader';

const SixHoursModal = (props: SixHoursModalPropsInterface) => {
  return (
    <div className={styles.wrapper}>
      <ModalHeader
        headline="Enable 6-hours backups"
        onClose={() => console.log('close')}
      />
      <div className={styles.container}>
        <div className={styles.subscription}>
          <span className={styles.heading}>Monthly subscription</span>
          <p>
            If you enable 6-hours backups a recurring subscription will appear
            on your next invoice.
          </p>
        </div>
        <div className={styles.priceBox}>
          <div className={styles.headerBox}>
            <span className={styles.backups}>6-hours backups</span>
            <span className={styles.price}>20 USD</span>
          </div>
          <div className={styles.bodyContainer}>
            <div className={styles.bodyBox}>
              <span className={styles.backups}>6-hours backups</span>
              <span className={styles.price}>20 USD</span>
            </div>
            <div className={styles.bodyBox}>
              <span className={styles.backups}>6-hours backups</span>
              <span className={styles.price}>20 USD</span>
            </div>
            <div className={styles.bodyBox}>
              <span className={styles.backups}>6-hours backups</span>
              <span className={styles.price}>20 USD</span>
            </div>
          </div>
        </div>
        <div className={styles.paymentWrapper}>
          <span className={styles.heading}>Payment method</span>
          <div className={styles.paymentContainer}>
            <div className={styles.content}>
              <Image src={'/visa.svg'} alt="visa" width={58} height={40} />
              <span className={styles.paymentCardName}>Mikheil Pailodze</span>
            </div>
            <span className={styles.paymentCardName}>**** 5980</span>
          </div>
        </div>
        {props.external && (
          <div className={styles.description}>
            <span>Your card will be charged on Dec 30, 2024.</span>
            <span>
              This bill will include the add-on&apos;s cost for the following
              billing cycle.
            </span>
          </div>
        )}
        <div className={styles.buttons}>
          <Button
            backgroundColor={buttonbackgroundColorEnum.grey}
            innerContent="Cancel"
            onClick={props.onCancle}
          />
          <Button
            backgroundColor={buttonbackgroundColorEnum.black}
            innerContent="Enable 6-hours backups"
            onClick={props.onSuccess}
          />
        </div>
      </div>
    </div>
  );
};

export default SixHoursModal;
