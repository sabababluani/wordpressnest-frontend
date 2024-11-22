import Image from 'next/image';
import styles from './EditModal.module.scss';
import SitesSelect from '@/app/components/SitesSelect/SitesSelect';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';

const EditModal = (props: UsersModalPropsInterface): JSX.Element => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.header}>
        <span className={styles.headline}>Edit Users</span>
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
        <div className={styles.userWrapper}>
          <span>Novatori.ge</span>
          <div className={styles.user}>
            <Image
              src="/man.png"
              alt="man"
              width={36}
              height={36}
              className={styles.picture}
            />
            <div className={styles.userInfo}>
              <span className={styles.name}>Beka Jikurishvili</span>
              <span className={styles.email}>Jikurishvilib@gmail.com</span>
            </div>
          </div>
          <div className={styles.selectWrapper}>
            <SitesSelect />
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.finishWrapper}>
          <Button
            innerContent="Cancel"
            backgroundColor={buttonbackgroundColorEnum.grey}
          />
          <Button
            innerContent="Edit Users"
            backgroundColor={buttonbackgroundColorEnum.black}
          />
        </div>
      </div>
    </div>
  );
};

export default EditModal;
