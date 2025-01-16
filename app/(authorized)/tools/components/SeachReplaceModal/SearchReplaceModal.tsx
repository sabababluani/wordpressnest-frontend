import styles from './SearchReplaceModal.module.scss';
import Image from 'next/image';
import { SearchReplaceModalPropsInterface } from './interfaces/search-replace-modal-props.interfaces';
import { Checkbox } from 'antd';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';

const SearchReplaceModal = (props: SearchReplaceModalPropsInterface) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.headline}>Search and replace</span>
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
        <p>
          You can search and optionally replace in your WordPress database. This
          tool does not affect the files of your site, e.g. theme or media. It
          only works in the database, e.g. post and page contents.
        </p>
        <div className={styles.inputContainer}>
          <span>Search</span>
          <input type="text" />
        </div>
        <div className={styles.checkContainer}>
          <div className={styles.checkbox}>
            <Checkbox></Checkbox>
          </div>
          <span>Replace</span>
        </div>
        <div className={styles.inputContainer}>
          <span>Search</span>
          <input type="text" />
        </div>
        <div className={styles.checkContainer}>
          <div className={styles.checkbox}>
            <Checkbox></Checkbox>
          </div>
          <span>Clear cache when ready</span>
        </div>
        <p>
          You&apos;re replacing the live environment. Before starting this
          we&apos;ll create an automatic system generated backup, so in case of
          any error you&apos;ll be able to restore that.
        </p>
        <div className={styles.buttons}>
          <Button
            backgroundColor={buttonbackgroundColorEnum.grey}
            innerContent="Cancel"
            onClick={() => props.onClose()}
          />
          <Button
            backgroundColor={buttonbackgroundColorEnum.black}
            innerContent="Replace"
            onClick={() => props.onSuccess()}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchReplaceModal;
