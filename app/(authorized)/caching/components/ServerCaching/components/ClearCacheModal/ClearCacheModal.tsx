import Button from '@/app/components/Button/Button';
import styles from './ClearCacheModal.module.scss';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { ClearCacheModalPropsInterface } from './interfaces/clear-cache-modal-props.interface';
import ModalHeader from '@/app/components/ModalHeader/ModalHeader';

const ClearCacheModal = (props: ClearCacheModalPropsInterface) => {
  return (
    <div className={styles.wrapper}>
      <ModalHeader headline="Clear cache" onClose={props.onClose} />
      <div className={styles.container}>
        <span className={styles.content}>
          You are about to clear the CDN cache, witch purges the assigned CDN
          zone. The process may take up to five minutes
        </span>
        <div className={styles.buttons}>
          <Button
            backgroundColor={buttonbackgroundColorEnum.grey}
            innerContent="Cancel"
            onClick={props.onClose}
          />
          <Button
            backgroundColor={buttonbackgroundColorEnum.black}
            innerContent="Clear cache"
          />
        </div>
      </div>
    </div>
  );
};

export default ClearCacheModal;
