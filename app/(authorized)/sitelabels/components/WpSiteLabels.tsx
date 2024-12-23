import Button from '@/app/components/Button/Button';
import styles from './WpSiteLabels.module.scss';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { Modal } from 'antd';
import { useState } from 'react';
import AddNewLabelModal from './AddNewLabelModal/AddNewLabelModal';

const WpSiteLabels = () => {
  const [isModalVisable, setIsModalVisable] = useState<boolean>(false);

  const showModal = () => {
    setIsModalVisable(true);
  };

  const handleCancel = () => {
    setIsModalVisable(false);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.head}>
          <span className={styles.headline}>WordPress site labels</span>
        </div>
        <Button
          innerContent="Add new label"
          backgroundColor={buttonbackgroundColorEnum.black}
          onClick={showModal}
        />
      </div>
      <div className={styles.container}>
        <div className={styles.table}>
          <span className={styles.title}>Name</span>
          <span className={styles.title}>Sites</span>
          <span className={styles.title}>Actions</span>
        </div>
        <div className={styles.apikey}>
          <span className={styles.apikeytext}>
            Your labels will appear here
          </span>
        </div>
      </div>
      <Modal
        open={isModalVisable}
        onCancel={handleCancel}
        footer={null}
        closable={false}
        width={840}
      >
        <AddNewLabelModal onClose={handleCancel} />
      </Modal>
    </div>
  );
};

export default WpSiteLabels;
