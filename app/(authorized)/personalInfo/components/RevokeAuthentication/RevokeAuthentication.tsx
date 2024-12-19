import Button from '@/app/components/Button/Button';
import styles from './RevokeAuthentication.module.scss';
import Image from 'next/image';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';

const RevokeAuthentication = () => {
  return (
    <div>
      <div className={styles.header}>
        <span className={styles.headline}>Create credential</span>
        <Image
          src="/icons/close-mini.svg"
          alt="close"
          width={24}
          height={24}
          className={styles.close}
        />
      </div>
      <div className={styles.container}>
        <span>You need to reauthorize GitHub be able to login.</span>
        <div className={styles.buttons}>
          <Button
            backgroundColor={buttonbackgroundColorEnum.grey}
            innerContent="Cancel"
          />
          <Button
            backgroundColor={buttonbackgroundColorEnum.red}
            innerContent="Revoke Access"
          />
        </div>
      </div>
    </div>
  );
};

export default RevokeAuthentication;
