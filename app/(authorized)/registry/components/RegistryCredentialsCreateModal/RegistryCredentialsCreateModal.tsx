import { Select } from 'antd';
import styles from './RegistryCredentialsCreateModal.module.scss';
import Image from 'next/image';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { RegistryCredentialsModalPropsInterface } from '../../interfaces/registry-credentials-modal-props.interface';

const RegistryCredentialsCreateModal = (
  props: RegistryCredentialsModalPropsInterface,
) => {
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
          onClick={props.onClose}
        />
      </div>
      <div className={styles.container}>
        <div className={styles.spansWrapper}>
          <div className={styles.spansContainer}>
            <span className={styles.labels}>Name</span>
            <span className={styles.validate}>
              Unique name for your credential helps to identify it.
            </span>
          </div>
          <input type="text" />
        </div>
        <div className={styles.spansWrapper}>
          <div className={styles.spansContainer}>
            <span className={styles.labels}>Registry</span>
          </div>
          <Select
            className={styles.select}
            placeholder="Please selec an option"
          />
        </div>
        <div className={styles.spansWrapper}>
          <div className={styles.spansContainer}>
            <span className={styles.labels}>User name</span>
          </div>
          <input type="text" />
        </div>
        <div className={styles.spansWrapper}>
          <div className={styles.spansContainer}>
            <span className={styles.labels}>Personal access token</span>
          </div>
          <input type="text" />
        </div>
        <div className={styles.buttons}>
          <Button
            backgroundColor={buttonbackgroundColorEnum.grey}
            innerContent="Cancel"
            onClick={props.onClose}
          />
          <Button
            backgroundColor={buttonbackgroundColorEnum.black}
            innerContent="Create"
          />
        </div>
      </div>
    </div>
  );
};

export default RegistryCredentialsCreateModal;
