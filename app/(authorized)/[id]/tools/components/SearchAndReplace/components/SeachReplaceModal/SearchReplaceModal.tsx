import React, { useState } from 'react';
import styles from './SearchReplaceModal.module.scss';
import { SearchReplaceModalPropsInterface } from './interfaces/search-replace-modal-props.interfaces';
import { Checkbox } from 'antd';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { createData } from '@/app/api/crudService';
import { useParams } from 'next/navigation';
import ModalHeader from '@/app/components/ModalHeader/ModalHeader';

const SearchReplaceModal = (props: SearchReplaceModalPropsInterface) => {
  const { id } = useParams();
  const [isReplaceChecked, setIsReplaceChecked] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [replaceValue, setReplaceValue] = useState('');

  const onSubmit = async () => {
    try {
      const payload = {
        search: searchValue,
        replace: isReplaceChecked ? replaceValue : undefined,
      };
      await createData(`wp-cli/search-replace/${id}`, payload);
      console.log(payload);
      props.onSuccess();
    } catch (error) {
      console.error('Failed to submit data:', error);
    }
  };

  return (
    <div className={styles.wrapper}>
      <ModalHeader headline="Search and Replace" onClose={props.onClose} />
      <div className={styles.container}>
        <p>
          You can search and optionally replace in your WordPress database. This
          tool does not affect the files of your site, e.g. theme or media. It
          only works in the database, e.g. post and page contents.
        </p>
        <div className={styles.inputContainer}>
          <span>Search</span>
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        <div className={styles.checkContainer}>
          <div className={styles.checkbox}>
            <Checkbox
              onChange={(e) => setIsReplaceChecked(e.target.checked)}
            ></Checkbox>
          </div>
          <span>Replace</span>
        </div>

        {isReplaceChecked && (
          <>
            <div className={styles.inputContainer}>
              <span>Replace With</span>
              <input
                type="text"
                value={replaceValue}
                onChange={(e) => setReplaceValue(e.target.value)}
              />
            </div>
            <div className={styles.checkContainer}>
              <div className={styles.checkbox}>
                <Checkbox></Checkbox>
              </div>
              <span>Clear cache when ready</span>
            </div>
            <p>
              You&apos;re replacing the live environment. Before starting this
              we&apos;ll create an automatic system-generated backup, so in case
              of any error you&apos;ll be able to restore that.
            </p>
          </>
        )}

        <div className={styles.buttons}>
          <Button
            backgroundColor={buttonbackgroundColorEnum.grey}
            innerContent="Cancel"
            onClick={() => props.onClose()}
          />
          <Button
            backgroundColor={buttonbackgroundColorEnum.black}
            innerContent="Replace"
            onClick={onSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchReplaceModal;
