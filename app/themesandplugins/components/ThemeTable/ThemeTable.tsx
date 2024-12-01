'use client';

import React, { useState } from 'react';
import useSWR, { mutate } from 'swr';
import { Table, TableColumnsType } from 'antd';
import { useParams } from 'next/navigation';
import BaseApi from '@/app/api/BaseApi';
import styles from '@/app/domains/components/DomainsTable/DomainsTable.module.scss';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import Search from '@/app/components/Search/Search';
import { ThemesTablePropsInterface } from './interfaces/theme-table.interfaces';

const fetcher = (url: string) =>
  BaseApi.get(url).then((response) => response.data);

const ThemeTable: React.FC = () => {
  const { id } = useParams();
  const [searchValue, setSearchValue] = useState('');

  const { data: themes } = useSWR<ThemesTablePropsInterface[]>(
    `wp-cli/theme/list?setupId=${id}&search=${searchValue}`,
    fetcher
  );

  const handleReload = () => {
    mutate(`wp-cli/theme/list?setupId=${id}&search=${searchValue}`);
  };

  const onHandleUpdate = async (themeName: string) => {
    try {
      await BaseApi.post(`wp-cli/theme/update?setupId=${id}`, {
        theme: themeName,
      });
      mutate(`wp-cli/theme/list?setupId=${id}&search=${searchValue}`);
    } catch (error) {
      alert(error);
    }
  };

  const onHandleActive = async (themeName: string) => {
    try {
      await BaseApi.post(`wp-cli/theme/activate?setupId=${id}`, {
        theme: themeName,
      });

      if (themes) {
        const updatedThemes = themes.map((theme) =>
          theme.name === themeName
            ? { ...theme, status: 'active' }
            : { ...theme, status: 'inactive' }
        );
        mutate(
          `wp-cli/theme/list?setupId=${id}&search=${searchValue}`,
          updatedThemes,
          true
        );
      }
    } catch (error) {
      console.error(error);
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
      render: (_: any, record: ThemesTablePropsInterface) =>
        record.update === 'none' ? 'Up-To-Date' : record.update_version,
    },
    {
      title: '',
      dataIndex: '',
      render: (_: any, record: ThemesTablePropsInterface) => (
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
        loading={themes === undefined}
      />
    </div>
  );
};

export default ThemeTable;
