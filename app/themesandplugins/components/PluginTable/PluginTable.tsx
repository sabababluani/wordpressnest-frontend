'use client';

import React, { useState } from 'react';
import { Table } from 'antd';
import useSWR from 'swr';
import BaseApi from '@/app/api/BaseApi';
import styles from '@/app/domains/components/DomainsTable/DomainsTable.module.scss';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { PluginDataPropsInterface } from './interfaces/plugin-table.interfaces';
import Search from '@/app/components/Search/Search';

const columns = [
  {
    title: 'Plugin',
    dataIndex: 'name',
    width: '30%',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    width: '15%',
    render: (status: string) => (
      <div
        className={
          status === 'active'
            ? styles.activeStatus
            : status === 'inactive'
            ? styles.inactiveStatus
            : ''
        }
      >
        <span
          className={
            status === 'active'
              ? styles.greenDot
              : status === 'inactive'
              ? styles.redDot
              : ''
          }
        ></span>
        <span className={styles.status}>
          {status[0].toUpperCase() + status.slice(1)}
        </span>
      </div>
    ),
  },
  {
    title: 'Installed',
    dataIndex: 'version',
    width: '15%',
  },
  {
    title: 'Latest',
    dataIndex: 'update_version',
    width: '15%',
    render: (_: any, record: PluginDataPropsInterface) =>
      record.update === 'none'
        ? 'Up-To-Date'
        : record.update_version + ' Available',
  },
  {
    title: '',
    dataIndex: '',
    render: (_: any, record: PluginDataPropsInterface) => (
      <div className={styles.buttons}>
        {record.update !== 'none' ? (
          <div className={styles.buttonsUpdate}>
            <Button
              backgroundColor={buttonbackgroundColorEnum.black}
              innerContent="Update"
            />
          </div>
        ) : null}
        {record.status === 'active' ? (
          <div className={styles.buttonsDeactive}>
            <Button
              backgroundColor={buttonbackgroundColorEnum.grey}
              innerContent="Deactivate"
            />
          </div>
        ) : (
          <div className={styles.buttonsActive}>
            <Button
              backgroundColor={buttonbackgroundColorEnum.grey}
              innerContent="Active"
            />
          </div>
        )}
      </div>
    ),
  },
];

const fetcher = (url: string) =>
  BaseApi.get(url).then((response) => response.data);

const PluginTable: React.FC = () => {
  const [selectionType] = useState<'checkbox'>('checkbox');
  const [searchValue, setSearchValue] = useState('');

  const {
    data: plugins,
    error,
    isLoading,
  } = useSWR<PluginDataPropsInterface[]>('wp-cli/plugin/list', fetcher);

  const filteredData = plugins?.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data!</div>;

  return (
    <div className={styles.tableWrapper}>
      <div className={styles.searchPadding}>
        <div className={styles.searchContainer}>
          <Search
            placeholder={'Search By Theme name'}
            isPadded
            onChange={(value) => setSearchValue(value)}
          />
          <div className={styles.reloadWrap}>
            <span>Update 2 Days Ago</span>
            <Button
              backgroundColor={buttonbackgroundColorEnum.grey}
              innerContent={'Reload'}
              innerContentIconActive
              innerContentIcon={'icons/reload.svg'}
            />
          </div>
        </div>
      </div>
      <Table
        rowSelection={{ type: selectionType }}
        columns={columns}
        dataSource={filteredData}
        pagination={false}
        scroll={{ x: 'max-content' }}
        rowKey={(record) => record.name}
      />
    </div>
  );
};

export default PluginTable;
