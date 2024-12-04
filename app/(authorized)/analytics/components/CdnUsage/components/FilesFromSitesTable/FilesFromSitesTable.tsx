import styles from '../../../Resource/components/TopRequestsTable/TopRequestsTable.module.scss';
import React from 'react';
import { Table } from 'antd';
import type { TableColumnsType } from 'antd';
import { FilesFromSitesTablePropsInterface } from './interfaces/files-from-sites-table-props.interface';
import { FilesFromSitesTableData } from './dummydata/files-from-sites-table-dummy';

const columns: TableColumnsType<FilesFromSitesTablePropsInterface> = [
  {
    title: 'Path',
    dataIndex: 'path',
  },
  {
    title: 'Site',
    dataIndex: 'site',
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

const FilesFromSitesTable = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <span className={styles.heading}>Top files by requests</span>
      </div>
      <div className={styles.tableWrapper}>
        <Table<FilesFromSitesTablePropsInterface>
          columns={columns}
          dataSource={FilesFromSitesTableData}
          pagination={false}
        />
      </div>
    </div>
  );
};

export default FilesFromSitesTable;
