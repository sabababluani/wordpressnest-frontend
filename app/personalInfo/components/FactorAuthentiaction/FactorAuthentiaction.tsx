import styles from './FactorAuthentiaction.module.scss';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';

const FactorAuthentication = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <p>Two-factor authentiaction</p>
      </div>
      <div className={styles.container}>
        <p>
          Use as authenticator app (e.g Google Authenticator) on your phone to
          generate verification codes
        </p>
        <div className={styles.button}>
          <Button
            backgroundColor={buttonbackgroundColorEnum.grey}
            innerContent="Connect"
          />
        </div>
      </div>
    </div>
  );
};

export default FactorAuthentication;
