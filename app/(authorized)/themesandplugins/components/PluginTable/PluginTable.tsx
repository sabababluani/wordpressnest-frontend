'use client';

import React, { useState } from 'react';
import { Table, TableColumnsType } from 'antd';
import { useParams } from 'next/navigation';
import useSWR, { mutate } from 'swr';
import BaseApi from '@/app/api/BaseApi';
import styles from '@/app/(authorized)/domains/components/DomainsTable/DomainsTable.module.scss';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { PluginDataPropsInterface } from './interfaces/plugin-table.interfaces';
import Search from '@/app/components/Search/Search';

const fetcher = (url: string) =>
  BaseApi.get(url).then((response) => response.data);

const PluginTable = () => {
  const { id } = useParams();

  const [selectionType] = useState<'checkbox'>('checkbox');
  const [searchValue, setSearchValue] = useState('');

  const { data: plugins } = useSWR<PluginDataPropsInterface[]>(
    `wp-cli/plugin/${id}/?search=${searchValue}`,
    fetcher
  );

  const onHandleUpdate = async (pluginName: string) => {
    try {
      await BaseApi.put(`wp-cli/plugin/update/${id}?plugin=${pluginName}`);
      mutate(`wp-cli/plugin/${id}?search=${searchValue}`);
    } catch (error) {
      console.log(error);
    }
  };

  const onHandleActive = async (pluginName: string) => {
    try {
      await BaseApi.patch(`wp-cli/plugin/activate/${id}?plugin=${pluginName}`);
      mutate(`wp-cli/plugin/${id}/?search=${searchValue}`);
    } catch (error) {
      console.log(error);
    }
  };

  const onHandleDeactivate = async (pluginName: string) => {
    try {
      await BaseApi.patch(
        `wp-cli/plugin/deactivate/${id}?plugin=${pluginName}`
      );
      mutate(`wp-cli/plugin/${id}/?search=${searchValue}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleReload = () => {
    mutate(`wp-cli/plugin/${id}/?search=${searchValue}`);
  };

  const columns: TableColumnsType<PluginDataPropsInterface> = [
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
      render: (_: unknown, record: PluginDataPropsInterface) =>
        record.update === 'none'
          ? 'Up-To-Date'
          : record.update_version + ' Available',
    },
    {
      title: '',
      dataIndex: '',
      render: (_: unknown, record: PluginDataPropsInterface) => (
        <div className={styles.buttons}>
          {record.update !== 'none' ? (
            <div className={styles.buttonsUpdate}>
              <Button
                backgroundColor={buttonbackgroundColorEnum.black}
                innerContent="Update"
                onClick={() => onHandleUpdate(record.name)}
              />
            </div>
          ) : null}
          {record.status === 'active' ? (
            <div className={styles.buttonsDeactive}>
              <Button
                backgroundColor={buttonbackgroundColorEnum.grey}
                innerContent="Deactivate"
                onClick={() => onHandleDeactivate(record.name)}
              />
            </div>
          ) : (
            <div className={styles.buttonsActive}>
              <Button
                backgroundColor={buttonbackgroundColorEnum.grey}
                innerContent="Activate"
                onClick={() => onHandleActive(record.name)}
              />
            </div>
          )}
        </div>
      ),
    },
  ];

  return (
    <div className={styles.tableWrapper}>
      <div className={styles.searchPadding}>
        <div className={styles.searchContainer}>
          <Search
            placeholder="Search By Plugin Name"
            isPadded
            onChange={(value) => setSearchValue(value)}
          />
          <div className={styles.reloadWrap}>
            <span>Updated 2 Days Ago</span>
            <Button
              backgroundColor={buttonbackgroundColorEnum.grey}
              innerContent="Reload"
              innerContentIconActive
              innerContentIcon="/icons/reload.svg"
              onClick={handleReload}
            />
          </div>
        </div>
      </div>
      <Table<PluginDataPropsInterface>
        rowSelection={{ type: selectionType }}
        columns={columns}
        dataSource={plugins}
        pagination={false}
        scroll={{ x: 'max-content' }}
        rowKey={(record) => record.name}
        loading={plugins === undefined}
      />
    </div>
  );
};

export default PluginTable;
