'use client';

import { useState } from 'react';
import Button from '../../components/Button/Button';
import { buttonbackgroundColorEnum } from '../../components/Button/enum/button.enum';
import PaymentCard from './components/PaymentCard/PaymentCard';
import styles from './page.module.scss';
import { Modal } from 'antd';
import AddCardModal from './components/PaymentCard/AddCardModal/AddCardModal';

const PaymentMethods = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <p>Payment methods</p>
        <Button
          backgroundColor={buttonbackgroundColorEnum.black}
          innerContent="Add payment methods"
          onClick={showModal}
        />
      </div>
      <div className={styles.container}>
        <PaymentCard />
        <PaymentCard />
      </div>

      <Modal
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={840}
        closable={false}
      >
        <AddCardModal onClose={() => setIsModalVisible(false)} />
      </Modal>
    </div>
  );
};

export default PaymentMethods;
