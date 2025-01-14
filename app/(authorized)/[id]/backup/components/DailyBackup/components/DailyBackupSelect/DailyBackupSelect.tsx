'use client';

import React, { useState, useRef, useEffect } from 'react';
import styles from './DailyBackupSelect.module.scss';
import Image from 'next/image';
import { Modal } from 'antd';
import DailyBackupModal from '../DailyBackupModal/DailyBackupModal';

const DailyBackupSelect = () => {
  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);
  const [isModalVisable, setIsModalVisable] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const toggleSelect = () => setIsSelectOpen((prev) => !prev);

  const handleCloseModal = () => {
    setIsModalVisable(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsSelectOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <div className={styles.container} onClick={toggleSelect}>
        <span>Restore To</span>
        <Image src="/icons/arrowdown.svg" alt="arrow" width={24} height={24} />
      </div>
      {isSelectOpen && (
        <div
          className={styles.liveContainer}
          onClick={() => setIsModalVisable(true)}
        >
          <div className={styles.circle}></div>
          <span className={styles.live}>Live</span>
        </div>
      )}
      <Modal
        width={840}
        open={isModalVisable}
        onCancel={handleCloseModal}
        footer={null}
        closable={false}
      >
        <DailyBackupModal onClose={handleCloseModal} onSuccess={() => {}} />
      </Modal>
    </div>
  );
};

export default DailyBackupSelect;
