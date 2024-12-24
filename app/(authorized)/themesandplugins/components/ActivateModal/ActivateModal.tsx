import Button from '@/app/components/Button/Button';
import styles from './ActivateModal.module.scss';
import Image from 'next/image';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';

const ActivateModal = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.headerContainer}>
          <span className={styles.headline}>Activate plugin Akismet</span>
        </div>
        <Image src="/icons/close-mini.svg" alt="close" width={24} height={24} />
      </div>
      <div className={styles.textContainer}>
        <span className={styles.text}>
          Are you sure to want to activate the plugin Akisment anti-spam: spam
          protection on your WordPress site? This process may take a few
          minutes. if it last longer than usual, WordPress will automatically
          enable maintenance mode
        </span>
        <div className={styles.buttons}>
          <Button
            backgroundColor={buttonbackgroundColorEnum.grey}
            innerContent="Cancel"
            //   onClick={props.onClose}
          />
          <Button
            backgroundColor={buttonbackgroundColorEnum.black}
            innerContent="Activate plugin"
          />
        </div>
      </div>
    </div>
  );
};

export default ActivateModal;
