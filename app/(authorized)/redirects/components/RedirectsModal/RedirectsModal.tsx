'use client';

import { Radio } from 'antd';
import Image from 'next/image';
import styles from './RedirectsModal.module.scss';
import SitesSelect from '@/app/components/SitesSelect/SitesSelect';
import Search from '@/app/components/Search/Search';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { RedirectsModalPropsInterface } from '../interfaces/redirects-modal-props.interface';

const RedirectsModal = (props: RedirectsModalPropsInterface): JSX.Element => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.header}>
        <span className={styles.headline}>Add Redirect Rule</span>
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
        <div className={styles.infoWrapper}>
          <span className={styles.text}>
            Redirect rules are added to your websites Nginx configuration and
            are interpreted as regular expressions.
          </span>
          <span className={styles.text}>
            If you want to redirect traffic coming from a specific location,
            first turn on the Geolocation Tool.
          </span>
        </div>
        <div className={styles.contentWrapper}>
          <span className={styles.title}>Domain</span>
          <SitesSelect />
        </div>
        <div className={styles.redirectWrapper}>
          <div className={styles.contentWrapper}>
            <span className={styles.title}>Redirect From</span>
            <Search
              isPadded
              noIcon
              placeholder="example:https://www.novatori.ge"
              onChange={() => {}}
            />
          </div>
          <div className={styles.contentWrapper}>
            <span className={styles.title}>Redirect To</span>
            <Search
              isPadded
              noIcon
              placeholder="example:https://www.novatori.com"
              onChange={() => {}}
            />
          </div>
        </div>
        <div className={styles.contentWrapper}>
          <span className={styles.title}>HTTP status code</span>
          <Radio.Group defaultValue="302">
            <div className={styles.radioWrapper}>
              <Radio value="302">302 - Moved Temporarily</Radio>
              <Radio value="301">301 - Moved Permanently</Radio>
            </div>
          </Radio.Group>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.finishWrapper}>
          <Button
            innerContent="Cancel"
            backgroundColor={buttonbackgroundColorEnum.grey}
            onClick={props.onClose}
          />
          <Button
            innerContent="Add Redirect Rule"
            backgroundColor={buttonbackgroundColorEnum.black}
          />
        </div>
      </div>
    </div>
  );
};

export default RedirectsModal;
