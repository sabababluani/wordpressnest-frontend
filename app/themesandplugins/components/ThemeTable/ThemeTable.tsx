'use client';

import React, { useState } from 'react';
import useSWR from 'swr';
import { Table } from 'antd';
import type { TableColumnsType } from 'antd';
import BaseApi from '@/app/api/BaseApi';
import styles from '@/app/domains/components/DomainsTable/DomainsTable.module.scss';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { PluginDataPropsInterface } from '../PluginTable/interfaces/plugin-table.interfaces';
import Search from '@/app/components/Search/Search';

const columns: TableColumnsType<PluginDataPropsInterface> = [
  {
    title: 'Themes',
    dataIndex: 'name',
    className: 'no-left-border',
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
      record.update === 'none' ? 'Up-To-Date' : record.update_version,
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

const ThemeTable: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const { data } = useSWR<PluginDataPropsInterface[]>(
    'wp-cli/theme/list',
    fetcher
  );

  const filteredData = data?.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  );

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
      <Table<PluginDataPropsInterface>
        columns={columns}
        dataSource={filteredData}
        rowSelection={{ type: 'checkbox' }}
        pagination={false}
        scroll={{ x: 'max-content' }}
      />
    </div>
  );
};

export default ThemeTable;
