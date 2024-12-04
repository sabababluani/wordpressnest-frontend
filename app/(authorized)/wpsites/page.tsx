'use client';

import React, { useState } from 'react';
import DashboardTable from './components/DashboardTable/DashboardTable';
import styles from './page.module.scss';
import Search from '@/app/components/Search/Search';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { Modal } from 'antd';
import InputFields from './components/InputFields/InputFields';

const Wpsites: React.FC = () => {
  const [isModuleOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div className={styles.wrapper}>
      <h1>WordPress Sites</h1>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <Search
            placeholder={'Search Sites'}
            isPadded={true}
            onChange={() => {}}
          />
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
              onClick={() => setIsModalOpen(true)}
            />
          </div>
        </div>
      </div>
      <div className={styles.tableContainer}>
        <DashboardTable />
      </div>
      <Modal
        title=""
        open={isModuleOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        closable={false}
      >
        <InputFields />
      </Modal>
    </div>
  );
};

export default Wpsites;
