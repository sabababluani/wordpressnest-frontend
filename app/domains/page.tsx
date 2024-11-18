import React from 'react';
import styles from './page.module.scss';
import Search from '../components/Search/Search';
import SitesSelect from '../components/SitesSelect/SitesSelect';
import Button from '../components/Button/Button';
import { buttonbackgroundColorEnum } from '../components/Button/enum/button.enum';
import DomainsTable from './components/DomainsTable/DomainsTable';

const domains = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <h1>Domains</h1>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <Search placeholder={'Search Sites'} isPadded={true} />
          <div className={styles.select}>
            <SitesSelect />
          </div>
        </div>
        <div className={styles.buttonsAdjust}>
          <p>2 Domain selected</p>
          <div className={styles.buttons}>
            <Button
              backgroundColor={buttonbackgroundColorEnum.grey}
              innerContent={'Custom SSL'}
            />
            <Button
              backgroundColor={buttonbackgroundColorEnum.domainsRed}
              innerContent={'Delete Domains'}
            />
          </div>
        </div>
      </div>
      <div>
        <DomainsTable />
      </div>
    </div>
  );
};

export default domains;
