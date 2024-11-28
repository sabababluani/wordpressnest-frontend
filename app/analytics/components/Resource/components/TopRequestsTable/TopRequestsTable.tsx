import styles from './TopRequestsTable.module.scss';
import React from 'react';
import { Divider, Table } from 'antd';
import type { TableColumnsType } from 'antd';
import { TopRequestsTablePropsInterface } from './interfaces/top-requests-table-props.interface';
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

const TopRequestsTable = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <span className={styles.heading}>Top requests by bytes</span>
        <span className={styles.textContent}>
          Top requests by bytes shows which requests have used the most
          bandwidth
        </span>
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
