import Steps from '@/app/components/Steps/Steps';
import styles from './SiteOptions.module.scss';
import { Select, Checkbox } from 'antd';
import { useState } from 'react';
import { dummySites } from './dummy-sites/dummy-sites';

const SiteOptions = () => {
  const [selectState, setSelectState] = useState<string>(dummySites[0].value);
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({
    cdn: false,
    edgeCaching: false,
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
        confirmation={false}
        firstHeadline={'Site options'}
        secondHeadline={'WordPress options'}
      />
      <div className={styles.infoWrapper}>
        <div className={styles.info}>
          <span className={styles.headline}>Site name</span>
          <span className={styles.text}>
            This name is only visible in hosting
          </span>
        </div>
        <input type="text" className={styles.input} placeholder="New Site" />
      </div>
      <div className={styles.infoWrapper}>
        <div className={styles.info}>
          <span className={styles.headline}>Data center location</span>
          <span className={styles.text}>
            Choose from 37 data centers to place your website in the
            geographical location closest to your visitors. Boosted regions are
            data center locations where we have made considerably faster
            infrastructure available at no extra charge.
          </span>
        </div>
        <Select
          onChange={onSelectChange}
          className={styles.selectStyle}
          value={selectState}
          options={dummySites}
        />
      </div>
      <div className={styles.chooseWrapper}>
        <span className={styles.headline}>
          Performance improvements enabled by default
        </span>
        <div className={styles.optionsWrapper}>
          <div className={styles.checkboxWrapper}>
            <div className={styles.checkbox}>
              <Checkbox
                checked={checkedItems.cdn}
                onChange={(e) => onCheckboxChange('cdn', e.target.checked)}
              />
            </div>
            <div className={styles.checkboxContent}>
              <span className={styles.title}>CDN</span>
              <span className={styles.description}>
                Serves website files from hundreds of servers worldwide,
                increasing performance by as much as 40%
              </span>
            </div>
          </div>
          <div className={styles.checkboxWrapper}>
            <div className={styles.checkbox}>
              <Checkbox
                checked={checkedItems.edgeCaching}
                onChange={(e) =>
                  onCheckboxChange('edgeCaching', e.target.checked)
                }
              />
            </div>
            <div className={styles.checkboxContent}>
              <span className={styles.title}>Edge Caching</span>
              <span className={styles.description}>
                Dynamically generates HTML content of your site, improving
                website speed by up to 45%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteOptions;
