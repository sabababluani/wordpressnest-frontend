import { useState } from 'react';
import styles from './ApiKeysAddModal.module.scss';
import Image from 'next/image';
import { DatePicker, Select } from 'antd';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { apiKeyOptions } from './utils/api-keys-select-options';
import { ApiKeyPropsInterface } from '../../interfaces/api-keys-props.interface';

const ApiKeysAddModal = (props: ApiKeyPropsInterface) => {
  const [steper, setSteper] = useState(1);
  const [isOptionSelected, setIsOptionSelected] = useState(false);

  const handleSelectChange = (value: string) => {
    setIsOptionSelected(!!value);
  };

  const onCancelClick = () => {
    if (steper === 1) props.onClose();
    else setSteper(1);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.headline}>Create credential</span>
        <Image
          src="/icons/close-mini.svg"
          alt="close"
          width={24}
          height={24}
          className={styles.close}
          onClick={() => props.onClose()}
        />
      </div>
      <div className={styles.wholeWrapper}>
        <div className={styles.container}>
          <div className={styles.steper}>
            <span>Generate API key</span>
            <div className={styles.progress}>
              <div className={styles.circle}></div>
              <div className={styles.line}></div>
            </div>
          </div>
          <div className={styles.steper}>
            <span>Verification</span>
            <div className={styles.progress}>
              <div
                className={steper === 1 ? styles.grayCircle : styles.circle}
              ></div>
              <div
                className={steper === 1 ? styles.lineCircle : styles.line}
              ></div>
            </div>
          </div>
        </div>

        {steper === 1 && (
          <div className={styles.steperOneWrapper}>
            <div className={styles.spansWrapper}>
              <div className={styles.spansContainer}>
                <span className={styles.labels}>Expiry</span>
              </div>
              <Select
                className={styles.select}
                placeholder="Please select an option"
                onChange={handleSelectChange}
                options={apiKeyOptions}
              />
            </div>

            {isOptionSelected && (
              <div className={styles.addContainer}>
                <div className={styles.spansContainer}>
                  <span>Expiry date</span>
                  <DatePicker className={styles.datePicker} />
                </div>
                <div className={styles.spansContainer}>
                  <span>Expiry time</span>
                  <Select className={styles.dateSelect} />
                </div>
              </div>
            )}

            <div className={styles.spansWrapper}>
              <div className={styles.spansContainer}>
                <span className={styles.labels}>API key name</span>
                <span className={styles.unique}>
                  Unique name for your API key helps to identify it.
                </span>
              </div>
              <input type="text" />
            </div>
          </div>
        )}

        {steper === 2 && (
          <div className={styles.apiWrapper}>
            <div className={styles.apiContainer}>
              <span className={styles.apiKey}>API key</span>
              <span className={styles.copy}>
                Copy the API key and store it. This is the only time it is
                displayed.
              </span>
            </div>
            <div className={styles.copyContainer}>
              <span>
                c93a55c40fa7fdb6dc474a2f993216168226bf16e4d5596a6fdd9ceffa4a128b
              </span>
              <Image
                src={'/icons/copyright.svg'}
                alt="copy"
                width={16}
                height={16}
              />
            </div>
          </div>
        )}

        <div className={styles.buttons}>
          <Button
            backgroundColor={buttonbackgroundColorEnum.grey}
            innerContent="Cancel"
            onClick={onCancelClick}
          />
          <Button
            backgroundColor={buttonbackgroundColorEnum.black}
            innerContent="Generate"
            onClick={() => setSteper(steper + 1)}
          />
        </div>
      </div>
    </div>
  );
};

export default ApiKeysAddModal;