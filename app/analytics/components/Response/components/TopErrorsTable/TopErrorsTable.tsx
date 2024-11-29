import styles from './TopErrorsTable.module.scss';
import React from 'react';
import { Table } from 'antd';
import type { TableColumnsType } from 'antd';
import { TopErrorsTablePropsInterface } from './interfaces/top-errors-table-props.interface';
import { errorsData } from './errorsDummy/errors-dummy';

const columns: TableColumnsType<TopErrorsTablePropsInterface> = [
  {
    title: 'Path',
    dataIndex: 'path',
  },
  {
    title: 'Requests',
    dataIndex: 'requests',
  },
];

const TopErrorsTable = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <span className={styles.heading}>Top 404 errors</span>
      </div>
      <div className={styles.tableWrapper}>
        <Table<TopErrorsTablePropsInterface>
          columns={columns}
          dataSource={errorsData}
          pagination={false}
        />
      </div>
    </div>
  );
};

export default TopErrorsTable;
