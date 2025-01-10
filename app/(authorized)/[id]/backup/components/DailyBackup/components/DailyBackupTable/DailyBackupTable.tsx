'use client';

import React, { useState } from 'react';
import { Modal, Select, Table } from 'antd';
import type { TableProps } from 'antd';
import Image from 'next/image';
import styles from './DailyBackupTable.module.scss';
import { DailyBackupPropsInterface } from './interfaces/daily-backup-table-props.interface';
import { Dailydata } from './dummy-data/daily-backup-table';
import DailyBackupModal from '../DailyBackupModal/DailyBackupModal';

const DailyBackupTable = () => {
  const [isModalVisable, setIsModalVisable] = useState(false);
  const [selectedRestoreOption] = useState('Restore To');

  const columns: TableProps<DailyBackupPropsInterface>['columns'] = [
    {
      title: (
        <div className={styles.title}>
          <Image
            src="/icons/calendar.svg"
            alt="calendar"
            width={24}
            height={24}
          />
          <span>Date & Time</span>
        </div>
      ),
      dataIndex: 'dateTime',
      key: 'dateTime',
      width: '85%',
    },
    {
      title: 'Restore',
      key: 'restore',
      width: '15%',
      render: () => (
        <Select
          className={styles.select}
          value={selectedRestoreOption}
          options={[
            {
              value: 'live',
              label: (
                <div className={styles.option}>
                  <div className={styles.dot}></div>
                  <span>Live</span>
                </div>
              ),
            },
          ]}
          onChange={(value) => {
            if (value === 'live') {
              setIsModalVisable(true);
            }
          }}
        />
      ),
    },
  ];

  return (
    <div className={styles.tableWrapper}>
      <Table<DailyBackupPropsInterface>
        columns={columns}
        dataSource={Dailydata}
        pagination={false}
        rowKey={(record) => record.id}
      />
      <Modal
        width={840}
        open={isModalVisable}
        onCancel={() => setIsModalVisable(false)}
        footer={null}
        closable={false}
      >
        <DailyBackupModal onClose={() => setIsModalVisable(false)} />
      </Modal>
    </div>
  );
};

export default DailyBackupTable;
