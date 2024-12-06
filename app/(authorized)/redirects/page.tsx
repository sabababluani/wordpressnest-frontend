'use client';

import React, { useState } from 'react';
import { Modal } from 'antd';
import styles from './page.module.scss';
import Button from '../../components/Button/Button';
import RedirectsTable from './components/RedirectsTable/RedirectsTable';
import { buttonbackgroundColorEnum } from '../../components/Button/enum/button.enum';
import RedirectsModal from './components/RedirectsModal/RedirectsModal';

const Redirects = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headline}>
          <span className={styles.text}>Redirects</span>
          <span className={styles.subtext}>
            Redirect Traffic From One Location To Another. This Is Useful For
            Preventing 404 Errors.
          </span>
        </div>
        <div className={styles.button}>
          <Button
            backgroundColor={buttonbackgroundColorEnum.black}
            innerContent="Add Redirect"
            onClick={showModal}
          />
        </div>
      </div>
      <RedirectsTable />
      <div className={styles.modal}>
        <Modal
          title=""
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
          closable={false}
          width="auto"
          centered
        >
          <RedirectsModal onClose={handleCancel} />
        </Modal>
      </div>
    </div>
  );
};

export default Redirects;
