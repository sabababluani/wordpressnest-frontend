import Button from '@/app/components/Button/Button';
import styles from './ClearCacheModal.module.scss';
import Image from 'next/image';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { ClearCacheModalPropsInterface } from './interfaces/clear-cache-modal-props.interface';

const ClearCacheModal = (props: ClearCacheModalPropsInterface) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.headline}>Clear cache</span>
        <Image
          src="/icons/close-mini.svg"
          alt="close"
          width={24}
          height={24}
          onClick={props.onClose}
        />
      </div>
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
