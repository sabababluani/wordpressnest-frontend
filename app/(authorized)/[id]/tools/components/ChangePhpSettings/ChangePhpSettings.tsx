import ModalHeader from '@/app/components/ModalHeader/ModalHeader';
import { ChangePhpSettingsPropsInterface } from './interfaces/change-php-settings-props.interface';
import { Radio, Select } from 'antd';
import styles from './ChangePhpSettings.module.scss';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { useState } from 'react';

const PHP_VERSIONS = [
  {
    value: '8,4',
    label: (
      <div className={styles.optionContainer}>
        <span className={styles.versions}>PHP 8.4</span>
      </div>
    ),
  },
  {
    value: '8,3',
    label: (
      <div className={styles.optionContainer}>
        <span className={styles.versions}>PHP 8.3</span>
      </div>
    ),
  },
  {
    value: '8,2',
    label: (
      <div className={styles.optionContainer}>
        <span className={styles.versions}>PHP 8.2</span>
      </div>
    ),
  },
  {
    value: '8,1',
    label: (
      <div className={styles.optionContainer}>
        <span className={styles.versions}>PHP 8.1</span>
      </div>
    ),
  },
  {
    value: '8,0',
    label: (
      <div className={styles.optionContainer}>
        <span className={styles.versions}>PHP 8.0</span>
        <div className={styles.ltsContainer}>
          <span>LTS</span>
        </div>
      </div>
    ),
  },
  {
    value: '7,4',
    label: (
      <div className={styles.optionContainer}>
        <span className={styles.versions}>PHP 7.4</span>
        <div className={styles.ltsContainer}>
          <span>LTS</span>
        </div>
      </div>
    ),
  },
];

const ChangePhpSettings = (props: ChangePhpSettingsPropsInterface) => {
  const initialPhpVersion = PHP_VERSIONS[0].value;
  const [isLTSVersion, setIsLTSVersion] = useState(
    initialPhpVersion === '7,4' || initialPhpVersion === '8,0',
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
              defaultValue={PHP_VERSIONS[0]}
              dropdownClassName={styles.selectDropdown}
              onChange={(value) => {
                setIsLTSVersion(value.value === '7,4' || value.value === '8,0');
                console.log(isLTSVersion);
              }}
            />
          </div>
        </div>
        <div className={styles.containerContent}>
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
          innerContent="Replace"
          onClick={props.onClick}
        />
      </div>
    </>
  );
};

export default ChangePhpSettings;
