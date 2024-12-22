import Button from '@/app/components/Button/Button';
import styles from './InvoicesModal.module.scss';
import Image from 'next/image';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { InvoicesModalPropsInterface } from './interfaces/invoices-modal-props.interface';

const InvoicesModal = (props: InvoicesModalPropsInterface) => {
  return (
    <div>
      <div className={styles.header}>
        <span className={styles.headline}>Invoice preview (Paid)</span>
        <Image
          src="/icons/close-mini.svg"
          width={24}
          height={24}
          alt="close"
          className={styles.close}
          onClick={props.onClose}
        />
      </div>
      <div className={styles.container}>
        <div className={styles.description}>
          <div className={styles.logo}>
            <h1>Hosting</h1>
            <span>The best home for modern WordPress sites</span>
          </div>
          <div className={styles.list}>
            <span>Invoice number: 20241130636753</span>
            <span>Service type: WordPress</span>
            <span>Payment date: Nov 30, 2024</span>
            <span>Due date: Nov 30, 2024</span>
          </div>
        </div>
        <div className={styles.prices}>
          <div className={styles.paymentDetails}>
            <p>Payment details</p>
            <span>Trial period for Single 35k Monthly</span>
          </div>
          <div className={styles.details}>
            <div className={styles.titleDetails}>
              <p>Start date</p>
              <span>Nov 30, 2024</span>
            </div>
            <div className={styles.titleDetails}>
              <p>End date</p>
              <span>Dec 30, 2024</span>
            </div>
            <div className={styles.titleDetails}>
              <p>Amount</p>
              <span>0 USD</span>
            </div>
          </div>
        </div>
        <div className={styles.total}>
          <div className={styles.totalContainer}>
            <span>Total</span>
            <span>0 USD</span>
          </div>
          <div className={styles.totalContainer}>
            <span>Tax (0%)</span>
            <span>0 USD</span>
          </div>
          <div className={styles.totalContainer}>
            <span>Grand total</span>
            <span>0 USD</span>
          </div>
        </div>
        <div className={styles.button}>
          <Button
            backgroundColor={buttonbackgroundColorEnum.black}
            innerContent="Close"
            onClick={props.onClose}
          />
        </div>
      </div>
    </div>
  );
};

export default InvoicesModal;
