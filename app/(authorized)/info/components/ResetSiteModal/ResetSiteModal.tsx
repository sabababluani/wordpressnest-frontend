import { Checkbox } from 'antd';
import styles from './ResetSiteModal.module.scss';
import Image from 'next/image';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { useState } from 'react';
import ResetSiteConfirmation from './components/ResetSiteConfirmation/ResetSiteConfirmation';

const ResetSiteModal = () => {
  const [steper, setSteper] = useState(1);

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
          //   onClick={props.onClose}
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
                Appears across the top of every page of the site. You can always
                change it later.
              </span>
              <input type="text" defaultValue={'Kaizen'} disabled />
            </div>
            <div className={styles.siteTitleContainer}>
              <span>WordPress admin username</span>
              <input type="text" defaultValue={'Kaizen'} disabled />
            </div>
            <div className={styles.siteTitleContainer}>
              <span>WordPress admin username</span>
              <input type="password" />
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
            <div className={styles.buttons}>
              <Button
                backgroundColor={buttonbackgroundColorEnum.grey}
                innerContent="Back"
              />
              <Button
                backgroundColor={buttonbackgroundColorEnum.black}
                innerContent="Continue"
                onClick={() => setSteper(2)}
              />
            </div>
          </div>
        ) : (
          <ResetSiteConfirmation />
        )}
      </div>
    </div>
  );
};

export default ResetSiteModal;
