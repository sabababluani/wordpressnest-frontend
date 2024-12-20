import Button from '@/app/components/Button/Button';
import styles from './ClearCacheModal.module.scss';
import Image from 'next/image';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';

const ClearCacheModal = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.headline}>Clear cache</span>
        <Image src="/icons/close-mini.svg" alt="close" width={24} height={24} />
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
