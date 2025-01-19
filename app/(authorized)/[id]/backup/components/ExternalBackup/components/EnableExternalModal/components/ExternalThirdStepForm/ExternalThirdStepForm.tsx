import Image from 'next/image';
import styles from './ExternalThirdStepForm.module.scss';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { ExternalThirdStepFormPropsInterface } from './interfaces/external-third-step-form-props.interface';

const ExternalThirdStepForm = (props: ExternalThirdStepFormPropsInterface) => {
  return (
    <div className={styles.PaymentWrapperContainer}>
      <div className={styles.subscription}>
        <span className={styles.boldHeading}>Monthly subscription</span>
        <p>
          If you enable 6-hours backups a recurring subscription will appear on
          your next invoice.
        </p>
      </div>
      <div className={styles.priceBox}>
        <div className={styles.headerBox}>
          <span className={styles.backups}>AWS</span>
          <span className={styles.price}>0.02 USD</span>
        </div>
        <div className={styles.bodyContainer}>
          <div className={styles.bodyBox}>
            <span className={styles.backups}>Estimated subtotal</span>
            <span className={styles.price}>0.02 USD</span>
          </div>
          <div className={styles.bodyBox}>
            <span className={styles.backups}>Tax (0%)</span>
            <span className={styles.price}>0 USD</span>
          </div>
          <div className={styles.bodyBox}>
            <span className={styles.backups}>Estimated total</span>
            <span className={styles.price}>0.02 USD</span>
          </div>
        </div>
      </div>
      <div className={styles.paymentWrapper}>
        <span className={styles.boldHeading}>Payment method</span>
        <div className={styles.paymentContainer}>
          <div className={styles.content}>
            <Image src={'/visa.svg'} alt="visa" width={58} height={40} />
            <span className={styles.paymentCardName}>Mikheil Pailodze</span>
          </div>
          <span className={styles.paymentCardName}>**** 5980</span>
        </div>
      </div>
      <div className={styles.buttons}>
        <Button
          backgroundColor={buttonbackgroundColorEnum.grey}
          innerContent="Cancel"
          onClick={props.onCancel}
        />
        <button
          type="submit"
          className={styles.button}
          onClick={props.onConfirm}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ExternalThirdStepForm;
