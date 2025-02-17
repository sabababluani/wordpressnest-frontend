'use client';

import React, { useState, useEffect } from 'react';
import DashboardTable from './components/DashboardTable/DashboardTable';
import styles from './page.module.scss';
import Search from '@/app/components/Search/Search';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { Modal, Select } from 'antd';
import AddSiteModal from './components/AddSiteModal/AddSiteModal';
import ClearCacheModal from './components/ClearCacheModal/ClearCacheModal';
import UpdateModal from './components/UpdateModal/UpdateModal';
// import LabelModal from './components/LabelModal/LabelModal';
import ChangeCdnModal from './components/ChangeCdnModal/ChangeCdnModal';
import PhpModal from './components/PhpModal/PhpModal';
import UpdateThemesModal from './components/UpdateThemesModal/UpdateThemesModal';
import CacheModal from './components/CacheModal/CacheModal';
import { ModalType } from './types/wp-sites-modal.type';
import { ActionOptions } from './utils/action-options';
import { ModalContext } from './components/AddSiteModal/components/ModalContext/ModalContext';

interface ModalState {
  modalType: ModalType | null;
  click: number;
}

const Wpsites = () => {
  const [modalState, setModalState] = useState<ModalState>({
    modalType: null,
    click: 1,
  });
  const [shouldCloseAddSiteModal, setShouldCloseAddSiteModal] =
    useState<boolean>(false);

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

  const handleSelectChange = (value: ModalType) => openModal(value);
  useEffect(() => {
    if (shouldCloseAddSiteModal && modalState.modalType === 'addSite') {
      closeModal();
      setShouldCloseAddSiteModal(false);
    }
  }, [shouldCloseAddSiteModal, modalState.modalType]);

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
      // case 'label': (commented temporarily)
      // return <LabelModal />;
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

  return (
    <ModalContext.Provider
      value={{ shouldCloseAddSiteModal, setShouldCloseAddSiteModal }}
    >
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
            <span>1 environment selected</span>
            {
              <Select
                className={styles.select}
                value="Actions"
                options={ActionOptions}
                onChange={handleSelectChange}
              />
            }
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
    </ModalContext.Provider>
  );
};

export default Wpsites;
