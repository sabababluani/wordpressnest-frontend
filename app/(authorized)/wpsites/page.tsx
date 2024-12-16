'use client';
import React, { useState } from 'react';
import DashboardTable from './components/DashboardTable/DashboardTable';
import styles from './page.module.scss';
import Search from '@/app/components/Search/Search';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { Modal, Select } from 'antd';
import AddSiteModal from './components/AddSiteModal/AddSiteModal';
import ClearCacheModal from './components/ClearCacheModal/ClearCacheModal';
import UpdateModal from './components/UpdateModal/UpdateModal';
import LabelModal from './components/LabelModal/LabelModal';
import ChangeCdnModal from './components/ChangeCdnModal/ChangeCdnModal';
import PhpModal from './components/PhpModal/PhpModal';
import { ActionOptions } from './utils/action-options';

const Wpsites = () => {
  const [isAddSiteModalOpen, setIsAddSiteModalOpen] = useState<boolean>(false);
  const [isCacheModalOpen, setIsCacheModalOpen] = useState<boolean>(false);
  const [isUpdatePluginOpen, setIsUpdatePluginOpen] = useState<boolean>(false);
  const [isLabelOpen, setIsLabelOpen] = useState<boolean>(false);
  const [isCdnOpen, setIsCdnOpen] = useState<boolean>(false);
  const [isPhpOpen, setIsPhpOpen] = useState<boolean>(false);
  const [isThemeOpen, setIsThemeOpen] = useState<boolean>(false);

  const [click, setClick] = useState<number>(1);

  const handleContinue = () => {
    setClick((prev) => (prev === 4 ? 1 : prev + 1));
  };

  const handleBack = () => {
    setClick((prev) => (prev === 1 ? 1 : prev - 1));
  };

  const handleSelectChange = (value: string) => {
    if (value === 'cache') {
      setIsCacheModalOpen(true);
    } else if (value === 'plugins') {
      setIsUpdatePluginOpen(true);
    } else if (value === 'label') {
      setIsLabelOpen(true);
    } else if (value === 'cdn') {
      setIsCdnOpen(true);
    } else if (value === 'php') {
      setIsPhpOpen(true);
    } else if (value === 'themes') {
      setIsThemeOpen(true);
    }
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
          <Select
            className={styles.select}
            value="Actions"
            options={ActionOptions}
            onChange={handleSelectChange}
          />
          <div className={styles.buttons}>
            <Button
              backgroundColor={buttonbackgroundColorEnum.black}
              innerContent="Create New Site"
              onClick={() => setIsAddSiteModalOpen(true)}
            />
          </div>
        </div>
      </div>
      <div className={styles.tableContainer}>
        <DashboardTable />
      </div>

      <Modal
        open={isAddSiteModalOpen}
        onCancel={() => setIsAddSiteModalOpen(false)}
        footer={null}
        closable={false}
        width={click > 1 ? 840 : 1213}
        centered
      >
        <AddSiteModal
          click={click}
          onContinue={handleContinue}
          onBack={handleBack}
          onClose={() => setIsAddSiteModalOpen(false)}
        />
      </Modal>

      <Modal
        open={isCacheModalOpen}
        onCancel={() => setIsCacheModalOpen(false)}
        footer={null}
        closable={false}
        width={840}
      >
        <ClearCacheModal />
      </Modal>

      <Modal
        open={isUpdatePluginOpen}
        onCancel={() => setIsUpdatePluginOpen(false)}
        footer={null}
        closable={false}
        width={840}
      >
        <UpdateModal />
      </Modal>

      <Modal
        open={isLabelOpen}
        onCancel={() => setIsLabelOpen(false)}
        footer={null}
        closable={false}
        width={840}
      >
        <LabelModal />
      </Modal>

      <Modal
        open={isLabelOpen}
        onCancel={() => setIsLabelOpen(false)}
        footer={null}
        closable={false}
        width={840}
      >
        <LabelModal />
      </Modal>

      <Modal
        open={isCdnOpen}
        onCancel={() => setIsCdnOpen(false)}
        footer={null}
        closable={false}
        width={840}
      >
        <ChangeCdnModal />
      </Modal>

      <Modal
        open={isPhpOpen}
        onCancel={() => setIsPhpOpen(false)}
        footer={null}
        closable={false}
        width={840}
      >
        <PhpModal />
      </Modal>

      <Modal
        open={isThemeOpen}
        onCancel={() => setIsThemeOpen(false)}
        footer={null}
        closable={false}
        width={840}
      >
        <PhpModal />
      </Modal>
    </div>
  );
};

export default Wpsites;
