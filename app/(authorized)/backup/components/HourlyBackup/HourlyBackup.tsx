'use client';

import styles from './HourlyBackup.module.scss';
import { useState } from 'react';
import HourlyBox from './components/HourlyBox/HourlyBox';
import { HourlyBoxContent } from './utils/hourly-box-content';
import SixHoursModal from './components/SixHoursModal/SixHoursModal';
import { Modal } from 'antd';

const HourlyBackup = () => {
  const [activeCheckbox, setActiveCheckbox] = useState<number>(0);
  const [isModalVisable, setIsModalVisable] = useState<boolean>(false);

  const handleCheckboxClick = (index: number) => {
    setActiveCheckbox(index);
    if (index === 1) {
      setIsModalVisable(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalVisable(false);
    setActiveCheckbox(0);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h1>Daily Backup</h1>
        <span>You can set backups every 6-hours or every hour.</span>
      </div>
      <div className={styles.containers}>
        {HourlyBoxContent.map((content) => (
          <HourlyBox
            key={content.id}
            id={content.id}
            hours={content.hours}
            price={content.price}
            description={content.description}
            isActive={activeCheckbox === content.id}
            onClick={() => handleCheckboxClick(content.id)}
          />
        ))}
      </div>
      <Modal
        width={'auto'}
        centered
        open={isModalVisable}
        onCancel={handleCloseModal}
        footer={null}
        closable={false}
      >
        <SixHoursModal onCancle={handleCloseModal} />
      </Modal>
    </div>
  );
};

export default HourlyBackup;
