import { Checkbox } from 'antd';
import styles from './ResetSiteModal.module.scss';
import Image from 'next/image';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { ChangeEvent, useState } from 'react';
import ResetSiteConfirmation from './components/ResetSiteConfirmation/ResetSiteConfirmation';
import { ResetSiteModalPropsInterface } from './interfaces/reset-site-modal-props.interface';
import { useParams } from 'next/navigation';
import { createData } from '@/app/api/crudService';
import { useGetData } from '@/app/hooks/useGetData';
import {
  SiteInterface,
  UserInterface,
} from '@/app/components/Navigation/interfaces/navigation.props.interface';

const ResetSiteModal = (props: ResetSiteModalPropsInterface): JSX.Element => {
  const [steper, setSteper] = useState<number>(1);
  const [password, setPassword] = useState<string>('');
  const [siteTitle, setSiteTitle] = useState<string>('');

  const { id } = useParams();
  const { data: specificUser } = useGetData<UserInterface>({
    endpoint: `user/me`,
  });

  const isValidated: boolean =
    specificUser?.setup.find((item) => item.id === +id)?.siteTitle ===
    siteTitle;

  const onResetButton = async () => {
    if (password)
      try {
        await createData<Record<string, string>>(`wordpress/resetSetup/${id}`, {
          wpAdminPassword: password,
        } as Record<string, string>);
      } catch (error) {
        console.log(error);
      }
  };

  const onChangePasswordField = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.headline}>Reset Wordpress Website</span>
        <Image
          src="/icons/close-mini.svg"
          alt="close"
          width={24}
          height={24}
          className={styles.close}
          onClick={props.onClose}
        />
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.container}>
          <div className={styles.steper}>
            <span>Site Details</span>
            <div className={styles.progress}>
              <div className={styles.circle}></div>
              <div className={styles.line}></div>
            </div>
          </div>
          <div className={styles.steper}>
            <span>Confirmation</span>
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
        {steper === 1 ? (
          <div>
            <div className={styles.contentContainer}>
              <div className={styles.content}>
                <span>
                  By resetting your site, a new WordPress is being installed to
                  this site. While you can keep all existing settings, a new
                  password is mandatory.
                </span>
              </div>
              <div className={styles.siteTitleContainer}>
                <span>WordPress site title</span>
                <span>
                  Appears across the top of every page of the site. You can
                  always change it later.
                </span>
                <input
                  type="text"
                  defaultValue={
                    specificUser?.setup.find(
                      (item: SiteInterface) => item.id === +id,
                    )?.siteTitle
                  }
                  disabled
                />
              </div>
              <div className={styles.siteTitleContainer}>
                <span>WordPress admin username</span>
                <input
                  type="text"
                  defaultValue={specificUser?.firstName}
                  disabled
                />
              </div>
              <div className={styles.siteTitleContainer}>
                <span>WordPress admin password</span>
                <input type="password" onChange={onChangePasswordField} />
              </div>
              <div className={styles.siteTitleContainer}>
                <span>WordPress admin Email</span>
                <input
                  type="text"
                  defaultValue={'novatorimagaria@gmail.com'}
                  disabled
                />
              </div>
              <div className={styles.checkBoxContainer}>
                <div className={styles.check}>
                  <div className={styles.checkbox}>
                    <Checkbox></Checkbox>
                  </div>
                  <div>
                    <span className={styles.plugins}>
                      Install Wordpress multsite
                    </span>
                  </div>
                </div>
                <div className={styles.check}>
                  <div className={styles.checkbox}>
                    <Checkbox></Checkbox>
                  </div>
                  <div>
                    <span className={styles.plugins}>Install WooCommerce</span>
                  </div>
                </div>
                <div className={styles.check}>
                  <div className={styles.checkbox}>
                    <Checkbox></Checkbox>
                  </div>
                  <div>
                    <span className={styles.plugins}>Install YoastSEO</span>
                  </div>
                </div>
                <div className={styles.check}>
                  <div className={styles.checkbox}>
                    <Checkbox></Checkbox>
                  </div>
                  <div>
                    <span className={styles.plugins}>
                      Install Easy Digital Downloads
                    </span>
                  </div>
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
                innerContent="Continue"
                onClick={() => setSteper(2)}
              />
            </div>
          </div>
        ) : (
          <ResetSiteConfirmation
            siteTitle={
              specificUser?.setup.find((item: SiteInterface) => item.id === +id)
                ?.siteTitle
            }
            onClick={onResetButton}
            onBack={() => setSteper(1)}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSiteTitle(e.target.value)
            }
            validation={isValidated}
            siteTitleInputField={siteTitle}
          />
        )}
      </div>
    </div>
  );
};

export default ResetSiteModal;
