import { Checkbox, Select } from 'antd';
import styles from './WpOptions.module.scss';
import { useState } from 'react';
import Steps from '@/app/components/Steps/Steps';
import { dummyOptions } from './dummy-options/dummy-options';

const WpOptions = () => {
  const [selectState, setSelectState] = useState<string>(dummyOptions[0].value);

  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({
    WooCommerce: false,
    EDD: false,
    Yoast: false,
  });

  const onSelectChange = (value: string) => {
    setSelectState(value);
  };

  const onCheckboxChange = (key: string, checked: boolean) => {
    setCheckedItems((prev) => ({
      ...prev,
      [key]: checked,
    }));
  };

  return (
    <div className={styles.container}>
      <Steps
        confirmation={true}
        firstHeadline={'Site options'}
        secondHeadline={'WordPress options'}
      />
      <div className={styles.infoWrapper}>
        <div className={styles.info}>
          <span className={styles.headline}>WordPress site title</span>
          <span className={styles.text}>
            Appears across the top of every page of the site. You can always
            change it later
          </span>
        </div>
        <input type="text" className={styles.input} placeholder="New Site" />
      </div>
      <div className={styles.infoWrapper}>
        <div className={styles.info}>
          <span className={styles.headline}>WordPress admin username</span>
        </div>
        <input
          type="text"
          className={styles.input}
          placeholder="Admin Username"
        />
      </div>
      <div className={styles.infoWrapper}>
        <div className={styles.info}>
          <span className={styles.headline}>WordPress admin password</span>
        </div>
        <input
          type="password"
          className={styles.input}
          placeholder="Admin Password"
        />
      </div>
      <div className={styles.infoWrapper}>
        <div className={styles.info}>
          <span className={styles.headline}>WordPress admin email</span>
        </div>
        <input
          type="email"
          className={styles.input}
          placeholder="Admin Email"
        />
      </div>
      <div className={styles.infoWrapper}>
        <div className={styles.info}>
          <span className={styles.headline}>Select a language</span>
        </div>
        <Select
          onChange={onSelectChange}
          className={styles.selectStyle}
          value={selectState}
          options={dummyOptions}
        />
      </div>
      <div className={styles.checkboxWrapper}>
        <div className={styles.checkbox}>
          <Checkbox
            checked={checkedItems.WooCommerce}
            onChange={(e) => onCheckboxChange('WooCommerce', e.target.checked)}
          />
          <span className={styles.plugin}>Install WooCommerce</span>
        </div>
        <div className={styles.checkbox}>
          <Checkbox
            checked={checkedItems.EDD}
            onChange={(e) => onCheckboxChange('EDD', e.target.checked)}
          />
          <span className={styles.plugin}>Install Easy Digital Downloads</span>
        </div>
        <div className={styles.checkbox}>
          <Checkbox
            checked={checkedItems.Yoast}
            onChange={(e) => onCheckboxChange('Yoast', e.target.checked)}
          />
          <span className={styles.plugin}>Install Yoast SEO</span>
        </div>
      </div>
    </div>
  );
};

export default WpOptions;
