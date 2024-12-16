'use client';

import Button from '@/app/components/Button/Button';
import styles from './UpdateModal.module.scss';
import Image from 'next/image';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { Table } from 'antd';
import { useState } from 'react';
import { PluginModalDummy } from './dummy/plugin-modal-dummy';
import { UpdatePluginModalPropsInterface } from './interfaces/update-plugin-modal-props.interface';

const columns = [
  {
    title: 'Plugin',
    dataIndex: 'pluginName',
  },
  {
    title: 'Needs updating',
    dataIndex: 'needsUpdating',
  },
  {
    title: 'Latest Version',
    dataIndex: 'latestVersion',
  },
];

const UpdateModal = () => {
  const [, setSelectedRows] = useState<React.Key[]>([]);

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[]) => {
      setSelectedRows(selectedRowKeys);
    },
  };
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.header}>
        <span className={styles.headline}>Update plugins</span>
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
            Which plugins do you want to update for 2 selected environments? All
            selected plugins will be updated to their respective latest versions
            indicated below
          </span>
        </div>
        <div className={styles.tableWrapper}>
          <Table<UpdatePluginModalPropsInterface>
            rowSelection={{
              type: 'checkbox',
              ...rowSelection,
            }}
            columns={columns}
            dataSource={PluginModalDummy}
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

export default UpdateModal;
