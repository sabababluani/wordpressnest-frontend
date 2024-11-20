'use client';

import styles from './page.module.scss';
import UsersModal from './components/UsersModal/UsersModal';
import { Modal } from 'antd';
import { useState } from 'react';
import Button from '../components/Button/Button';
import UsersTable from './components/UsersTable/UsersTable';
import { buttonbackgroundColorEnum } from '../components/Button/enum/button.enum';

const Users = (): JSX.Element => {
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
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1>Users Managment</h1>
        <Button
          backgroundColor={buttonbackgroundColorEnum.black}
          innerContentIconActive
          innerContent={'Invite Users'}
          innerContentIcon={'icons/adduser.svg'}
          onClick={showModal}
        />
      </div>
      <div>
        <UsersTable />
      </div>
      <div className={styles.modal}>
        <Modal
          title=""
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
          closable={false}
        >
          <UsersModal onClose={handleCancel} />
        </Modal>
      </div>
    </div>
  );
};

export default Users;
