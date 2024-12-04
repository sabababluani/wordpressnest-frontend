import Image from 'next/image';
import styles from './PaymentCard.module.scss';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';

const PaymentCard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span>Change how you pay for your plan.</span>
        <div className={styles.default}>
          <Image
            src={'/icons/success.svg'}
            alt="success"
            width={24}
            height={24}
          />
          <span>Default</span>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.card}>
          <Image src={'/visa.svg'} alt="visa" width={58} height={40} />
          <div className={styles.content}>
            <div className={styles.contentContainer}>
              <span className={styles.visaEnding}>Visa ending in 1234</span>
              <span className={styles.expiry}>Expiry 06/2025</span>
            </div>
            <div className={styles.emailContainer}>
              <Image
                src={'/icons/mail.svg'}
                alt="mail"
                width={16}
                height={16}
              />
              <span className={styles.email}>Novatorimagaria123@gmail.com</span>
            </div>
          </div>
        </div>
        <Button
          backgroundColor={buttonbackgroundColorEnum.white}
          innerContent="Edit"
        />
      </div>
    </div>
  );
};

export default PaymentCard;
