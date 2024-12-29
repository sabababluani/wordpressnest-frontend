import styles from './EmailVerification.module.scss';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';

const EmailVerification = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <p>Email Verification</p>
      </div>
      <div className={styles.container}>
        <p>
          Please verify your email address to make sure that you will receive
          communication about your account, including account recovery
        </p>
        <p>
          If you don’t verify your email in the firs 7 days after signing up,
          your account will be flagged for reviews for your team. we do this
          prevent malicious activity and keep platform for good actors.
        </p>
        <div className={styles.button}>
          <Button
            backgroundColor={buttonbackgroundColorEnum.whitelight}
            innerContent="Send verification email"
          />
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
