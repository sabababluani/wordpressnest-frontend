import ModalHeader from '@/app/components/ModalHeader/ModalHeader';
import { ChangePhpSettingsPropsInterface } from './interfaces/change-php-settings-props.interface';
import { Radio, Select } from 'antd';
import styles from './ChangePhpSettings.module.scss';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';

const ChangePhpSettings = (props: ChangePhpSettingsPropsInterface) => {
  return (
    <>
      <ModalHeader headline={'Change PHP settings'} onClose={props.onClose} />
      <div className={styles.container}>
        <div>
          <span>PHP version</span>
          <p>
            Changing PHP versions may cause a few seconds of downtime for the
            WordPress backend.
          </p>
          <Select className={styles.select} />
        </div>
        <div>
          <span>Automatic PHP updates</span>
          <p>
            When enabled, if this environment uses a PHP version that reaches
            its end of life, we will automatically upgrade to the last supported
            PHP version.
          </p>
          <div className={styles.types}>
            <Radio.Group>
              <div className={styles.radios}>
                <Radio value="enabled">Enabled (Recomended)</Radio>
                <Radio value="disabled">Disabled</Radio>
              </div>
            </Radio.Group>
          </div>
        </div>
      </div>
      <div className={styles.buttons}>
        <Button
          backgroundColor={buttonbackgroundColorEnum.grey}
          innerContent="Cancel"
          onClick={props.onClose}
        />
        <Button
          backgroundColor={buttonbackgroundColorEnum.black}
          innerContent="Next"
          onClick={props.onClick}
        />
      </div>
    </>
  );
};

export default ChangePhpSettings;
