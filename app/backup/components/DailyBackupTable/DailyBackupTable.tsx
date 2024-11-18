'use client';

import { Table } from 'antd';
import type { TableProps } from 'antd';
import Image from 'next/image';
import React from 'react';
import styles from './DailyBackupTable.module.scss';
import DailyBackupSelect from '../DailyBackupSelect/DailyBackupSelect';

interface DataTypeDaily {
  key: string;
  dateTime: string;
}

const columns: TableProps<DataTypeDaily>['columns'] = [
  {
    title: (
      <div className={styles.title}>
        <Image
          src={'/icons/calendar.svg'}
          alt={'calendar'}
          width={24}
          height={24}
        />
        <span>Date & Time</span>
      </div>
    ),
    dataIndex: 'dateTime',
    key: 'dateTime',
  },
  {
    title: 'Restore',
    key: 'restore',
    render: () => <DailyBackupSelect />,
  },
];

const Dailydata: DataTypeDaily[] = [
  {
    key: '1',
    dateTime: 'Oct 16 , 2024 , 3 : 55 AM',
  },
  {
    key: '2',
    dateTime: 'Oct 16 , 2024 , 3 : 55 AM',
  },
  {
    key: '3',
    dateTime: 'Oct 16 , 2024 , 3 : 55 AM',
  },
  {
    key: '4',
    dateTime: 'Oct 16 , 2024 , 3 : 55 AM',
  },
  {
    key: '5',
    dateTime: 'Oct 16 , 2024 , 3 : 55 AM',
  },
];

const DailyBackupTable: React.FC = () => {
  return (
    <div className={styles.tableWrapper}>
      <Table<DataTypeDaily>
        columns={columns}
        dataSource={Dailydata}
        pagination={false}
      />
    </div>
  );
};

export default DailyBackupTable;
