import Image from 'next/image';
import styles from './UsersModal.module.scss';
import Search from "@/app/components/Search/Search";
import SitesSelect from "@/app/components/SitesSelect/SitesSelect";
import Button from "@/app/components/Button/Button";
import {buttonbackgroundColorEnum} from "@/app/components/Button/enum/button.enum";

const UsersModal = (): JSX.Element => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.header}>
        <span className={styles.headline}>Invite Users</span>
        <Image
          src="/icons/close-mini.svg"
          alt="close"
          width={24}
          height={24}
          className={styles.close}
        />
      </div>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <span className={styles.title}>Email Address(es)</span>
          <div className={styles.redirectWrapper}>
            <Search
              isPadded
              noIcon
              placeholder="example:https://www.novatori.ge"
            />
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
            innerContent="Invite Users"
            backgroundColor={buttonbackgroundColorEnum.black}
          />
        </div>
      </div>
    </div>
  );
};

export default UsersModal;
