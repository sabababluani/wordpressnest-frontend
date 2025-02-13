import Button from '@/app/components/Button/Button';
import styles from './RevokeAuthentication.module.scss';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import ModalHeader from '@/app/components/ModalHeader/ModalHeader';

const RevokeAuthentication = () => {
  return (
    <div>
      <ModalHeader
        headline="Create credential"
        onClose={() => console.log('Modal closed')}
      />
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
