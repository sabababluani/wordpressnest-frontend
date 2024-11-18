import React from 'react';
import DashboardTable from './components/DashboardTable/DashboardTable';
import styles from './page.module.scss';
import Search from "@/app/components/Search/Search";
import Button from "@/app/components/Button/Button";
import {buttonbackgroundColorEnum} from "@/app/components/Button/enum/button.enum";

const wpsites: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <h1>WordPress Sites</h1>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <Search placeholder={'Search Sites'} isPadded={true} />
        </div>
        <div className={styles.contentWrapperButtons}>
          <div className={styles.requestbuttons}>
            <Button
              backgroundColor={buttonbackgroundColorEnum.grey}
              innerContent={'Request Migration'}
            />
          </div>
          <div className={styles.buttons}>
            <Button
              backgroundColor={buttonbackgroundColorEnum.black}
              innerContent={'Create New Site'}
            />
          </div>
        </div>
      </div>
      <div className={styles.tableContainer}>
        <DashboardTable />
      </div>
    </div>
  );
};

export default wpsites;
