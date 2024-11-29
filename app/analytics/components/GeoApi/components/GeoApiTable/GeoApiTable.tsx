import styles from './GeoApiTable.module.scss';
import React from 'react';
import { Divider, Table } from 'antd';
import type { TableColumnsType } from 'antd';
import Image from 'next/image';
import { GeoApiTablePropsInterface } from './interfaces/geo-api-table-props.interface';
import { CountriesData } from './apidummy/api-dummy';

const columns: TableColumnsType<GeoApiTablePropsInterface> = [
  {
    title: 'Country',
    dataIndex: 'country',
    render: (text, record) => (
      <div className={styles.renderWrapper}>
        <Image
          src={record.flag}
          alt={`${record.country} flag`}
          width={32}
          height={32}
        />
        <span>{record.country}</span>
      </div>
    ),
    width: '90%',
  },
  {
    title: 'Requests',
    dataIndex: 'requests',
  },
];

const GeoApiTable: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <span className={styles.heading}>Top countries</span>
      </div>
      <Divider />
      <div className={styles.tableWrapper}>
        <Table<GeoApiTablePropsInterface>
          columns={columns}
          dataSource={CountriesData}
          pagination={false}
        />
      </div>
    </div>
  );
};

export default GeoApiTable;
