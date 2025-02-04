import { ChangeEvent, useState } from 'react';
import { Checkbox } from 'antd';
import styles from './DeleteSiteModal.module.scss';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { DeleteSiteModalPropsInterface } from './interfaces/delete-site-modal-props.interface';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import {
  SiteInterface,
  UserInterface,
} from '@/app/components/Navigation/interfaces/navigation.props.interface';
import { useGetData } from '@/app/hooks/useGetData';
import { useParams } from 'next/navigation';
import { deleteData } from '@/app/api/crudService';
import ModalHeader from '@/app/components/ModalHeader/ModalHeader';

const DeleteSiteModal = (
  props: DeleteSiteModalPropsInterface,
): React.JSX.Element => {
  const { id } = useParams();

  const [checkbox1, setCheckbox1] = useState<boolean>(false);
  const [checkbox2, setCheckbox2] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');

  const specificData: UserInterface | undefined = useGetData<UserInterface>({
    endpoint: 'user/me',
  }).data;
  const siteName: string | undefined = specificData?.setup.find(
    (item: SiteInterface) => item.id === +id,
  )?.siteName;

  const isButtonEnabled = checkbox1 && checkbox2 && inputValue === siteName;

  const onDeleteFunction = () => {
    deleteData('wordpress/setup', id.toString());
    props.onCancel();
  };

  return (
    <div className={styles.wrapper}>
      <ModalHeader headline="Add Domains" onClose={props.onClose} />
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.heading}>
            By deleting jigaro, all of its data will be destroyed. This is not
            recoverable.
          </span>
          <span className={styles.confirm}>
            Confirm that you understand the following:
          </span>
        </div>
        <div className={styles.container}>
          <div className={styles.content}>
            <span className={styles.heading}>
              By deleting jigaro, all of its data will be destroyed. This is not
              recoverable.
            </span>
            <span className={styles.confirm}>
              Confirm that you understand the following:
            </span>
          </div>
          <div className={styles.check}>
            <div className={styles.checkbox}>
              <Checkbox
                checked={checkbox1}
                onChange={(e: CheckboxChangeEvent) =>
                  setCheckbox1(e.target.checked)
                }
              />
            </div>
            <div>
              <span className={styles.deleted}>
                Files and database for{' '}
                <span className={styles.title}>jigaro</span> will be deleted
              </span>
            </div>
          </div>
          <div className={styles.check}>
            <div className={styles.checkbox}>
              <Checkbox
                checked={checkbox2}
                onChange={(e: CheckboxChangeEvent) =>
                  setCheckbox2(e.target.checked)
                }
              />
            </div>
            <div>
              <span className={styles.deleted}>
                Removing this site does not cancel the WordPress hosting plan
              </span>
            </div>
          </div>
          <div className={styles.inputContainer}>
            <span className={styles.deleted}>
              Enter the text <span className={styles.title}>jigaro-live</span>{' '}
              here to reset your site:
            </span>
            <input
              type="text"
              value={inputValue}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setInputValue(e.target.value)
              }
            />
          </div>
        </div>
      </div>
      <div className={styles.buttons}>
        <Button
          backgroundColor={buttonbackgroundColorEnum.grey}
          innerContent="Back"
          onClick={props.onClose}
        />
        <Button
          backgroundColor={buttonbackgroundColorEnum.black}
          innerContent="Delete WordPress site"
          onClick={onDeleteFunction}
          disableButton={!isButtonEnabled}
        />
      </div>
    </div>
  );
};

export default DeleteSiteModal;
