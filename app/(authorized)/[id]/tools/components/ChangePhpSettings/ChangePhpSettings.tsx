import ModalHeader from '@/app/components/ModalHeader/ModalHeader';
import { ChangePhpSettingsPropsInterface } from './interfaces/change-php-settings-props.interface';
import { Radio, Select } from 'antd';
import styles from './ChangePhpSettings.module.scss';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { useState } from 'react';
import { PHP_VERSIONS } from './utils/change-php-settings-options.utils';

const ChangePhpSettings = (props: ChangePhpSettingsPropsInterface) => {
  const [isLTSVersionDepricated, setIsLTSVersionDepricated] = useState(
    PHP_VERSIONS[0].value === '7.4' || PHP_VERSIONS[0].value === '8.0',
  );

  return (
    <>
      <ModalHeader headline={'Change PHP settings'} onClose={props.onClose} />
      <div className={styles.container}>
        <div className={styles.containerHeader}>
          <span>PHP version</span>
          <p>
            Changing PHP versions may cause a few seconds of downtime for the
            WordPress backend.
          </p>
          <div className={styles.selectWrapper}>
            <Select
              className={styles.select}
              options={PHP_VERSIONS}
              defaultValue={PHP_VERSIONS[0].value}
              dropdownClassName={styles.selectDropdown}
              onChange={(selectedValue) => {
                setIsLTSVersionDepricated(
                  selectedValue === '7.4' || selectedValue === '8.0',
                );
              }}
            />
          </div>
        </div>
        <div className={styles.containerContent}>
          <div className={styles.content}>
            <span>Automatic PHP updates</span>
            <p>
              When enabled, if this environment uses a PHP version that reaches
              its end of life, we will automatically upgrade to the last
              supported PHP version.
            </p>
          </div>
          <div
            className={
              isLTSVersionDepricated ? styles.disabledRadios : styles.types
            }
          >
            <Radio.Group onChange={(e) => console.log(e.target.value)}>
              <div className={styles.radios}>
                <Radio value="enabled">Enabled (Recomended)</Radio>
                <Radio value="disabled">Disabled</Radio>
              </div>
            </Radio.Group>
          </div>
        </div>
        {isLTSVersionDepricated && (
          <div className={styles.ltsMessageContainer}>
            <p>
              Automatic PHP updates are disabled when you choose a version of
              PHP that has reached its end of life.
              <br /> The last officially supported PHP version is PHP 8.2. Older
              versions of PHP offered by Kinsta receive long-term support (LTS)
              security patches but will produce suboptimal performance. Updating
              the environment to an officially supported version of PHP can
              significantly boost website performance.
            </p>
          </div>
        )}
      </div>
      <div className={styles.buttons}>
        <Button
          backgroundColor={buttonbackgroundColorEnum.grey}
          innerContent="Cancel"
          onClick={props.onClose}
        />
        <Button
          backgroundColor={buttonbackgroundColorEnum.black}
          innerContent="Replace"
          disableButton={isLTSVersionDepricated}
          onClick={props.onClick}
        />
      </div>
    </>
  );
};

export default ChangePhpSettings;
