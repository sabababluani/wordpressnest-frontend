import styles from './ActivateModal.module.scss';
import Image from 'next/image';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { ActivateModalPropsInterface } from './interfaces/activate-modal-props.interface';

const ActivateModal = (props: ActivateModalPropsInterface) => {
  const isActivate = props.modalAction === 'activate';

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.headerContainer}>
          <span className={styles.headline}>
            {isActivate ? 'Activate' : 'Deactivate'} {props.pluginName} plugin
          </span>
        </div>
        <Image
          src="/icons/close-mini.svg"
          alt="close"
          width={24}
          height={24}
          onClick={props.onClose}
        />
      </div>
      <div className={styles.textContainer}>
        <span className={styles.text}>
          Are you sure you want to {isActivate ? 'activate' : 'deactivate'} the
          plugin {props.pluginName}? This process may take a few minutes, if it
          last longer than usual, WordPress will automatically enable
          maintenance mode
        </span>
        <div className={styles.buttons}>
          <Button
            backgroundColor={buttonbackgroundColorEnum.grey}
            innerContent="Cancel"
            onClick={props.onClose}
          />
          <Button
            backgroundColor={buttonbackgroundColorEnum.black}
            innerContent={isActivate ? 'Activate plugin' : 'Deactivate plugin'}
            onClick={props.onActivate}
          />
        </div>
      </div>
    </div>
  );
};

export default ActivateModal;
