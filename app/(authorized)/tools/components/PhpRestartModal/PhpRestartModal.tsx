import Button from '@/app/components/Button/Button';
import styles from './PhpRestartModal.module.scss';
import Image from 'next/image';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { PhpRestartModalPropsInterface } from './interfaces/php-restart-modal-props.interface';

const PhpRestartModal = (props: PhpRestartModalPropsInterface) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.headline}>Restart PHP</span>
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
        <p>Are you sure you want to restart your site&apos;s PHP engine?</p>
      </div>
      <div className={styles.buttons}>
        <Button
          backgroundColor={buttonbackgroundColorEnum.grey}
          innerContent="Cancel"
          onClick={() => props.onClose()}
        />
        <Button
          backgroundColor={buttonbackgroundColorEnum.black}
          innerContent="Restart PHP"
          onClick={() => props.onSuccess()}
          //   loading={props.loading}
          //   setLoading={props.setLoading}
        />
      </div>
    </div>
  );
};

export default PhpRestartModal;
