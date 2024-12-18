import Button from '@/app/components/Button/Button';
import styles from './AddCardModal.module.scss';
import Image from 'next/image';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { Checkbox } from 'antd';

const AddCardModal = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.headline}>Add Credit Card</span>
        <Image
          src="/icons/close-mini.svg"
          width={24}
          height={24}
          alt="close"
          className={styles.close}
        />
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <div className={styles.inputWrapper}>
            <div className={styles.inputBase}>
              <span className={styles.inputHeadline}>Card holder name</span>
              <input type="text" className={styles.input} />
            </div>
            <div className={styles.inputBase}>
              <span className={styles.inputHeadline}>Card Details</span>
              <div className={styles.inputContainer}>
                <Image
                  src="/icons/card.svg"
                  width={16}
                  height={16}
                  alt="card"
                />
                <input
                  type="text"
                  className={styles.iconInput}
                  placeholder="Card number"
                />
              </div>
            </div>
          </div>
          <div className={styles.inputWrapper}>
            <div className={styles.inputBase}>
              <span className={styles.inputHeadline}>Date</span>
              <input type="text" className={styles.input} />
            </div>
            <div className={styles.inputBase}>
              <span className={styles.inputHeadline}>CVC</span>
              <div className={styles.inputContainer}>
                <Image
                  src="/icons/card.svg"
                  width={16}
                  height={16}
                  alt="card"
                />
                <input
                  type="text"
                  className={styles.iconInput}
                  placeholder="CVC number"
                />
              </div>
            </div>
          </div>
          <div className={styles.infoWrapper}>
            <div className={styles.check}>
              <div className={styles.checkbox}>
                <Checkbox />
              </div>
              <span className={styles.checkText}>Set this default card</span>
            </div>
            <span className={styles.info}>
              Your payment will be processed by our UK branch, Kinsta Ltd. An
              international transaction fee may be imposed by your card issuer.
            </span>
            <span className={styles.info}>
              We will attempt to charge the default card first. If the payment
              fails, we will then try other valid cards in your company account
              on your renewal date, Dec 30, 2024.
            </span>
          </div>
        </div>
        <div className={styles.footer}>
          <Button
            innerContent="Cancel"
            backgroundColor={buttonbackgroundColorEnum.white}
          />
          <Button
            innerContent="Add Card"
            backgroundColor={buttonbackgroundColorEnum.black}
          />
        </div>
      </div>
    </div>
  );
};

export default AddCardModal;