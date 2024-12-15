import Button from '@/app/components/Button/Button';
import { ApiKeyPropsInterface } from '../../interfaces/api-keys-props.interface';
import styles from './ApiKeysRevokeModal.module.scss';
import Image from 'next/image';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';

const ApiKeysRevokeModal = (props: ApiKeyPropsInterface) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.headline}>Revoke API key</span>
        <Image
          src="/icons/close-mini.svg"
          alt="close"
          width={24}
          height={24}
          className={styles.close}
          onClick={() => props.onClose()}
        />
      </div>
      <div className={styles.container}>
        <p>
          If you revoke the API key 123, all operations using it will fail
          immediately. Are you sure that you want to proceed?
        </p>
        <div className={styles.buttons}>
          <Button
            backgroundColor={buttonbackgroundColorEnum.grey}
            innerContent="Cancel"
            onClick={() => props.onClose()}
          />
          <Button
            backgroundColor={buttonbackgroundColorEnum.red}
            innerContent="Revoke"
          />
        </div>
      </div>
    </div>
  );
};

export default ApiKeysRevokeModal;
