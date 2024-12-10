'use client';
import React, { useState } from 'react';
import DashboardTable from './components/DashboardTable/DashboardTable';
import styles from './page.module.scss';
import Search from '@/app/components/Search/Search';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { Modal } from 'antd';
import AddSiteModal from './components/AddSiteModal/AddSiteModal';

const Wpsites: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [click, setClick] = useState<number>(1);

  const handleContinue = () => {
    setClick((prev) => (prev === 4 ? 1 : prev + 1));
  };

  const handleBack = () => {
    setClick((prev) => (prev === 1 ? 1 : prev - 1));
  };

  return (
    <div className={styles.wrapper}>
      <h1>WordPress Sites</h1>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <Search
            placeholder="Search Sites"
            isPadded={true}
            onChange={() => {}}
          />
        </div>
        <div className={styles.contentWrapperButtons}>
          <div className={styles.requestbuttons}>
            <Button
              backgroundColor={buttonbackgroundColorEnum.grey}
              innerContent="Request Migration"
            />
          </div>
          <div className={styles.buttons}>
            <Button
              backgroundColor={buttonbackgroundColorEnum.black}
              innerContent="Create New Site"
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
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        closable={false}
        className={styles.modal}
        width={click > 1 ? 840 : 1213}
        centered
      >
        <AddSiteModal
          click={click}
          onContinue={handleContinue}
          onBack={handleBack}
          onClose={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  );
};

export default Wpsites;
