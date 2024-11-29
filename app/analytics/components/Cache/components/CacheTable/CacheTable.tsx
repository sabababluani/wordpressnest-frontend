import styles from './CacheTable.module.scss';
import React from 'react';
import { Table } from 'antd';
import type { TableColumnsType } from 'antd';
import { CacheTablePropsInterface } from './interfaces/cache-table-props.interface';
import { cacheData } from './dummy/cache-dummy';

const columns: TableColumnsType<CacheTablePropsInterface> = [
  {
    title: 'Path',
    dataIndex: 'path',
  },
];

const CacheTable = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <span className={styles.heading}>Cache component chart</span>
      </div>
      <div className={styles.tableWrapper}>
        <Table<CacheTablePropsInterface>
          columns={columns}
          dataSource={cacheData}
          pagination={false}
        />
      </div>
    </div>
  );
};

export default CacheTable;
