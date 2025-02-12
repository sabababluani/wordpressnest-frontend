'use client';

import { Radio, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import styles from './RedirectsModal.module.scss';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { RedirectsModalPropsInterface } from '../interfaces/redirects-modal-props.interface';
import ModalHeader from '@/app/components/ModalHeader/ModalHeader';
import { useGetData } from '@/app/hooks/useGetData';
import { UserInterface } from '@/app/components/Navigation/interfaces/navigation.props.interface';

const RedirectsModal = (props: RedirectsModalPropsInterface): JSX.Element => {
  const [redirectFrom, setRedirectFrom] = useState('');
  const [redirectTo, setRedirectTo] = useState('');
  const [httpStatusCode, setHttpStatusCode] = useState('302');

  const { data: domains } = useGetData<UserInterface>({
    endpoint: 'user/me',
  });

  useEffect(() => {
    if (props.rowData) {
      setRedirectFrom(props.rowData.oldUrl || '');
      setRedirectTo(props.rowData.newUrl || '');
      setHttpStatusCode(props.rowData.statusCode || '302');
    }
  }, [props.rowData]);

  const handleSave = () => {
    const updatedRow = {
      key: props.rowData ? props.rowData.key : '',
      oldUrl: redirectFrom,
      newUrl: redirectTo,
      statusCode: httpStatusCode,
      domain: domains?.setup?.[0]?.siteTitle || '',
    };
    props.onSave(updatedRow);

    setRedirectFrom('');
    setRedirectTo('');
    setHttpStatusCode('302');
  };

  return (
    <div className={styles.mainWrapper}>
      <ModalHeader
        headline={props.rowData ? 'Edit Redirect Rule' : 'Add Redirect Rule'}
        onClose={props.onClose}
      />
      <div className={styles.container}>
        <div className={styles.infoWrapper}>
          <span className={styles.text}>
            Redirect rules are added to your website&nbsp;s Nginx configuration
            and are interpreted as regular expressions.
          </span>
          <span className={styles.text}>
            If you want to redirect traffic coming from a specific location,
            first turn on the Geolocation Tool.
          </span>
        </div>

        <div className={styles.contentWrapper}>
          <span className={styles.title}>Domain</span>
          <Select
            className={styles.select}
            value={
              domains?.setup?.find((domain) => domain.siteTitle)?.siteTitle
            }
            options={domains?.setup?.map((domain) => ({
              label: domain.siteName,
              value: domain.siteName,
            }))}
          />
        </div>

        <div className={styles.redirectWrapper}>
          <div className={styles.contentWrapper}>
            <span className={styles.title}>Redirect From</span>
            <input
              type="text"
              value={redirectFrom}
              onChange={(e) => setRedirectFrom(e.target.value)}
              placeholder="example: https://www.novatori.com"
            />
          </div>
          <div className={styles.contentWrapper}>
            <span className={styles.title}>Redirect To</span>
            <input
              type="text"
              value={redirectTo}
              onChange={(e) => setRedirectTo(e.target.value)}
              placeholder="example: https://www.new-location.com"
            />
          </div>
        </div>

        <div className={styles.contentWrapper}>
          <span className={styles.title}>HTTP Status Code</span>
          <Radio.Group
            value={httpStatusCode}
            onChange={(e) => setHttpStatusCode(e.target.value)}
          >
            <div className={styles.radioWrapper}>
              <Radio value="302">302 - Moved Temporarily</Radio>
              <Radio value="301">301 - Moved Permanently</Radio>
            </div>
          </Radio.Group>
        </div>
      </div>

      <div className={styles.footer}>
        <Button
          innerContent="Cancel"
          backgroundColor={buttonbackgroundColorEnum.grey}
          onClick={props.onClose}
        />
        <Button
          innerContent={props.rowData ? 'Save Changes' : 'Add Redirect Rule'}
          backgroundColor={buttonbackgroundColorEnum.black}
          onClick={handleSave}
        />
      </div>
    </div>
  );
};

export default RedirectsModal;
