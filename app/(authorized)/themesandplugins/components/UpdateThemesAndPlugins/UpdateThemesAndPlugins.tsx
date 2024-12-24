'use client';

import Button from '@/app/components/Button/Button';
import styles from './UpdateThemesAndPlugins.module.scss';
import Image from 'next/image';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { Table } from 'antd';
import { useState } from 'react';
import { UpdateThemesAndPluginsPropsInterface } from './interfaces/update-themes-and-plugins-props.interface';

const columns = [
  {
    title: 'Plugin',
    dataIndex: 'pluginName',
  },
  {
    title: 'Update available',
    dataIndex: 'updateAvailable',
  },
];

const dummyData = [
  {
    key: '1',
    pluginName: 'Plugin One',
    updateAvailable: '1 environments ',
  },
  {
    key: '2',
    pluginName: 'Plugin Two',
    updateAvailable: '1 environments ',
  },
  {
    key: '3',
    pluginName: 'Plugin Three',
    updateAvailable: '1 environments ',
  },
];

const UpdateThemesAndPlugins = () => {
  const [, setSelectedRows] = useState<React.Key[]>([]);

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[]) => {
      setSelectedRows(selectedRowKeys);
    },
  };

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.header}>
        <span className={styles.headline}>Update 3 WordPress plugin</span>
        <Image
          src="/icons/close-mini.svg"
          width={24}
          height={24}
          alt="close"
          className={styles.close}
        />
      </div>
      <div className={styles.middleContainer}>
        <div className={styles.middleHeader}>
          <span className={styles.middleContainersMainCaption}>
            Are you sure you want to update the 3 selected WordPress plugin? if
            it last longer than usual, WordPress will automatically elable
            maintenance mode. MyHosting will create a system-generated backup so
            you can revert the process if necssary
          </span>
        </div>
        <div className={styles.tableWrapper}>
          <Table<UpdateThemesAndPluginsPropsInterface>
            rowSelection={{
              type: 'checkbox',
              ...rowSelection,
            }}
            columns={columns}
            dataSource={dummyData}
            pagination={false}
          />
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.buttonsWrapper}>
          <Button
            backgroundColor={buttonbackgroundColorEnum.grey}
            innerContent="Back"
          />
          <Button
            backgroundColor={buttonbackgroundColorEnum.black}
            innerContent="Update plugins"
          />
        </div>
      </div>
    </div>
  );
};

export default UpdateThemesAndPlugins;
