import styles from './ThemeActivateModal.module.scss';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { ThemeActivateModalPropsInterface } from './interfaces/theme-activate-modal-props.interface';
import ModalHeader from '@/app/components/ModalHeader/ModalHeader';

const ThemeActivateModal = (props: ThemeActivateModalPropsInterface) => {
  return (
    <div className={styles.wrapper}>
      <ModalHeader
        headline={`Activate theme ${props.themeName}`}
        onClose={() => props.onClose}
      />
      <div className={styles.textContainer}>
        <span className={styles.text}>
          Are you sure you want to deactivate the plugin {props.themeName}? This
          process may take a few minutes, if it last longer than usual,
          WordPress will automatically enable maintenance mode
        </span>
        <div className={styles.buttons}>
          <Button
            backgroundColor={buttonbackgroundColorEnum.grey}
            innerContent="Cancel"
            onClick={props.onClose}
          />
          <Button
            backgroundColor={buttonbackgroundColorEnum.black}
            innerContent={'Activate theme'}
            onClick={props.onActivate}
            loading={props.loading}
            setLoading={props.setLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default ThemeActivateModal;
