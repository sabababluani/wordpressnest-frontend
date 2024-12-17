import Button from '@/app/components/Button/Button';
import styles from './TwoFAModal.module.scss';
import Image from 'next/image';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';

const TwoFAModal = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.headline}>
          Enable two-factor authentication
        </span>
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
          <span className={styles.topLine}>
            Download an Authenticator app to your phone and scan this barcode to
            continue
          </span>
          <div className={styles.QRbox}>
            <Image src="/qr.png" alt="qr" width={365} height={187} />
            <span className={styles.QRtext}>AFKAOTZXG4UGEULW</span>
          </div>
          <div className={styles.inputWrapper}>
            <span className={styles.inputText}>
              Enter the 6-digit code you see in the app
            </span>
            <input type="text" className={styles.input} />
          </div>
        </div>
        <div className={styles.footer}>
          <Button
            innerContent="Back"
            backgroundColor={buttonbackgroundColorEnum.white}
          />
          <Button
            innerContent="Continue"
            backgroundColor={buttonbackgroundColorEnum.black}
          />
        </div>
      </div>
    </div>
  );
};

export default TwoFAModal;
