import styles from './TopRequestsTable.module.scss';
import React from 'react';
import { Table } from 'antd';
import type { TableColumnsType } from 'antd';
import {
  TopRequestsTableContentPropsInterface,
  TopRequestsTablePropsInterface,
} from './interfaces/top-requests-table-props.interface';
import { TopRequestsTableData } from './dummydata/top-request-dummy';

const columns: TableColumnsType<TopRequestsTablePropsInterface> = [
  {
    title: 'Path',
    dataIndex: 'path',
  },
  {
    title: 'Requests',
    dataIndex: 'requests',
  },
  {
    title: 'Bandwidth',
    dataIndex: 'bandwidth',
  },
];

const TopRequestsTable = (props: TopRequestsTableContentPropsInterface) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <span className={styles.heading}>{props.heading}</span>
        <span className={styles.textContent}>{props.textContent}</span>
      </div>
      <div className={styles.tableWrapper}>
        <Table<TopRequestsTablePropsInterface>
          columns={columns}
          dataSource={TopRequestsTableData}
          pagination={false}
        />
      </div>
    </div>
  );
};

export default TopRequestsTable;
