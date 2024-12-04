import styles from '../GeoApiTable/GeoApiTable.module.scss';
import React from 'react';
import { Divider, Table } from 'antd';
import type { TableColumnsType } from 'antd';
import { ApiDatas } from './dummy/dummy';
import { ClientApiTablePropsInterface } from './interfaces/client-api-table-props.interface';

const columns: TableColumnsType<ClientApiTablePropsInterface> = [
  {
    title: 'IP',
    dataIndex: 'ip',
    width: '90%',
  },
  {
    title: 'Requests',
    dataIndex: 'requests',
  },
];

const ClientApiTable: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <span className={styles.heading}>Top client IPs</span>
      </div>
      <Divider />
      <div className={styles.tableWrapper}>
        <Table<ClientApiTablePropsInterface>
          columns={columns}
          dataSource={ApiDatas}
          pagination={false}
        />
      </div>
    </div>
  );
};

export default ClientApiTable;
