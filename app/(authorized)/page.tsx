'use client';

import React, { useState } from 'react';
import styles from './page.module.scss';
import Search from '@/app/components/Search/Search';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { Modal, Select } from 'antd';
import AddSiteModal from './wpsites/components/AddSiteModal/AddSiteModal';
import { ActionOptions } from './wpsites/utils/action-options';

const Wpsites = () => {
  type ModalType = 'Actions' | 'addSite' | null;

  const [modalState, setModalState] = useState<{
    modalType: ModalType;
    currentStep: number;
  }>({
    modalType: null,
    currentStep: 1,
  });

  const openModal = (type: ModalType) =>
    setModalState({ ...modalState, modalType: type });
  const closeModal = () => setModalState({ modalType: null, currentStep: 1 });

  const handleStepChange = (step: number) => {
    setModalState((prev) => ({ ...prev, currentStep: step }));
  };

  const renderModalContent = () => {
    if (modalState.modalType === 'addSite') {
      return (
        <AddSiteModal
          onClose={closeModal}
          onStepChange={handleStepChange}
          currentStep={modalState.currentStep}
        />
      );
    }
    return null;
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
            onChange={(value) => openModal(value as ModalType)}
          />
          <div className={styles.buttons}>
            <Button
              backgroundColor={buttonbackgroundColorEnum.black}
              innerContent="Create New Site"
              onClick={() => openModal('addSite')}
            />
          </div>
        </div>
      </div>
      <Modal
        open={!!modalState.modalType}
        onCancel={closeModal}
        footer={null}
        closable={false}
        width={modalState.currentStep > 1 ? 840 : 1213}
      >
        {renderModalContent()}
      </Modal>
    </div>
  );
};

export default Wpsites;
