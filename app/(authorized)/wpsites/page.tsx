'use client';

import React, { useState } from 'react';
import DashboardTable from './components/DashboardTable/DashboardTable';
import styles from './page.module.scss';
import Search from '@/app/components/Search/Search';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { Modal } from 'antd';
import AddSiteModal from './components/AddSiteModal/AddSiteModal';
import ClearCacheModal from './components/ClearCacheModal/ClearCacheModal';
import UpdateModal from './components/UpdateModal/UpdateModal';
import LabelModal from './components/LabelModal/LabelModal';
import ChangeCdnModal from './components/ChangeCdnModal/ChangeCdnModal';
import PhpModal from './components/PhpModal/PhpModal';
import UpdateThemesModal from './components/UpdateThemesModal/UpdateThemesModal';
import CacheModal from './components/CacheModal/CacheModal';
// import { ActionOptions } from './utils/action-options';
import { ModalType } from './types/wp-sites-modal.type';
import Link from 'next/link';

const Wpsites = () => {
  const [modalState, setModalState] = useState<{
    modalType: ModalType;
    click: number;
  }>({
    modalType: null,
    click: 1,
  });

  const openModal = (type: ModalType) =>
    setModalState({ modalType: type, click: 1 });
  const closeModal = () => setModalState({ modalType: null, click: 1 });

  const handleStepChange = (step: number) => {
    setModalState((prev) => ({ ...prev, click: step }));
  };

  // const handleBack = () => {
  //   setModalState((prev) => ({
  //     ...prev,
  //     click: prev.click === 1 ? 1 : prev.click - 1,
  //   }));
  // };

  // const handleSelectChange = (value: ModalType) => openModal(value);

  const renderModalContent = () => {
    switch (modalState.modalType) {
      case 'addSite':
        return (
          <AddSiteModal
            onStepChange={handleStepChange}
            onClose={closeModal}
            currentStep={modalState.click}
          />
        );
      case 'clearCache':
        return <ClearCacheModal />;
      case 'plugins':
        return <UpdateModal />;
      case 'label':
        return <LabelModal />;
      case 'cdn':
        return <ChangeCdnModal />;
      case 'php':
        return <PhpModal />;
      case 'themes':
        return <UpdateThemesModal />;
      case 'edge':
        return <CacheModal />;
      default:
        return null;
    }
  };

  //TODO SELECT ON TABLE CHECKBOX CLICKS REMINDERRRR!!!!!!
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
          {/* <span>1 environment selected</span> */}
          {/* <Select
            className={styles.select}
            value="Actions"
            options={ActionOptions}
            onChange={handleSelectChange}
          /> */}
          <Link href="/migration">
            <Button
              backgroundColor={buttonbackgroundColorEnum.white}
              innerContent="Requset Migration"
            />
          </Link>
          <div className={styles.buttons}>
            <Button
              backgroundColor={buttonbackgroundColorEnum.black}
              innerContent="Create New Site"
              onClick={() => openModal('addSite')}
            />
          </div>
        </div>
      </div>
      <DashboardTable />
      <Modal
        open={!!modalState.modalType}
        onCancel={closeModal}
        footer={null}
        closable={false}
        width={
          modalState.modalType === 'addSite'
            ? modalState.click > 1
              ? 840
              : 1213
            : 840
        }
      >
        {renderModalContent()}
      </Modal>
    </div>
  );
};

export default Wpsites;
