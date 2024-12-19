'use client';

import React, { useState } from 'react';
import { Table, TableColumnsType } from 'antd';
import { useParams } from 'next/navigation';
import styles from '@/app/(authorized)/domains/components/DomainsTable/DomainsTable.module.scss';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import Search from '@/app/components/Search/Search';
import { ThemesTablePropsInterface } from './interfaces/theme-table.interfaces';
import { useGetData } from '@/app/hooks/useGetData';
import { patchData, updateData } from '@/app/api/crudService';

const ThemeTable: React.FC = () => {
  const { id } = useParams();
  const [searchValue, setSearchValue] = useState('');

  const {
    data: themes,
    mutate,
    isLoading,
  } = useGetData<ThemesTablePropsInterface[]>({
    endpoint: `wp-cli/theme/${id}`,
    queryParams: { search: searchValue },
  });

  const handleReload = () => {
    mutate();
  };

  const onHandleUpdate = async (themeName: string) => {
    try {
      await updateData(`wp-cli/theme/${id}`, themeName, { theme: themeName });
      mutate();
    } catch (error) {
      alert(error);
    }
  };

  const onHandleActive = async (themeName: string) => {
    try {
      await patchData(`wp-cli/theme`, +id, { theme: themeName });
      mutate();
    } catch (error) {
      console.log(error);
    }
  };

  const columns: TableColumnsType<ThemesTablePropsInterface> = [
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
      render: (_: unknown, record: ThemesTablePropsInterface) =>
        record.update === 'none' ? 'Up-To-Date' : record.update_version,
    },
    {
      title: '',
      dataIndex: '',
      render: (_: unknown, record: ThemesTablePropsInterface) => (
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
              />
            </div>
          ) : (
            <div className={styles.buttonsActive}>
              <Button
                backgroundColor={buttonbackgroundColorEnum.grey}
                innerContent="Active"
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
            placeholder={'Search By Theme name'}
            isPadded
            onChange={(value) => setSearchValue(value)}
          />
          <div className={styles.reloadWrap}>
            <span>Updated 2 Days Ago</span>
            <Button
              backgroundColor={buttonbackgroundColorEnum.grey}
              innerContent={'Reload'}
              innerContentIconActive
              innerContentIcon={'/icons/reload.svg'}
              onClick={handleReload}
            />
          </div>
        </div>
      </div>
      <Table<ThemesTablePropsInterface>
        columns={columns}
        dataSource={themes}
        rowSelection={{ type: 'checkbox' }}
        pagination={false}
        scroll={{ x: 'max-content' }}
        loading={isLoading}
      />
    </div>
  );
};

export default ThemeTable;
