import Button from '@/app/components/Button/Button';
import styles from './TwoFAModal.module.scss';
import Image from 'next/image';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { useState } from 'react';
import { TwoFaModalPropsInterface } from './interfaces/two-fa-modal-props.interface';
import ModalHeader from '@/app/components/ModalHeader/ModalHeader';

const TwoFAModal = (props: TwoFaModalPropsInterface) => {
  const [inputValue, setInputValue] = useState<string>('');

  return (
    <div className={styles.wrapper}>
      <ModalHeader
        headline="Enable two-factor authentication"
        onClose={props.onClose}
      />
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
            <input
              type="text"
              className={styles.input}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.footer}>
          <Button
            innerContent="Cancel"
            backgroundColor={buttonbackgroundColorEnum.white}
            onClick={props.onClose}
          />
          <Button
            innerContent="Verify"
            backgroundColor={buttonbackgroundColorEnum.black}
            disableButton={!inputValue.trim()}
          />
        </div>
      </div>
    </div>
  );
};

export default TwoFAModal;
