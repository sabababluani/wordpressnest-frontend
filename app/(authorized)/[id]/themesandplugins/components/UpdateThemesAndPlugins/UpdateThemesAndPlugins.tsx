import Button from '@/app/components/Button/Button';
import styles from './UpdateThemesAndPlugins.module.scss';
import Image from 'next/image';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { Table } from 'antd';
import { useState } from 'react';
import { updateData } from '@/app/api/crudService';
import { useParams } from 'next/navigation';
import { mutate } from 'swr';
import { UpdateThemesAndPluginsProps } from './interfaces/update-themes-and-plugins-props.interface';

const columns = [
  {
    title: 'Name',
    dataIndex: 'itemName',
  },
  {
    title: 'Update available',
    dataIndex: 'updateAvailable',
  },
];

const UpdateThemesAndPlugins = (props: UpdateThemesAndPluginsProps) => {
  const { id } = useParams();
  const numberId = Number(id);

  const itemsWithUpdates = props.selectedPlugins.filter(
    (plugin) => plugin.update !== 'none',
  );

  const [selectedRows, setSelectedRows] = useState<React.Key[]>(
    itemsWithUpdates.map((plugin) => plugin.name),
  );

  const rowSelection = {
    selectedRowKeys: selectedRows,
    onChange: (selectedRowKeys: React.Key[]) => {
      setSelectedRows(selectedRowKeys);
    },
  };

  const handleUpdate = async () => {
    try {
      await updateData(`wp-cli/${props.type}s`, numberId, {
        [props.type === 'plugin' ? 'plugins' : 'themes']: selectedRows,
      });
      mutate(`wp-cli/${props.type}/${id}`);
    } catch (error) {
      console.error(error);
    }
    props.onClose();
  };

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.header}>
        <span className={styles.headline}>
          Update {itemsWithUpdates.length} WordPress {props.type}
          {itemsWithUpdates.length > 1 ? 's' : ''}
        </span>
        <Image
          src="/icons/close-mini.svg"
          width={24}
          height={24}
          alt="close"
          className={styles.close}
          onClick={props.onClose}
        />
      </div>
      <div className={styles.middleContainer}>
        <div className={styles.middleHeader}>
          <span className={styles.middleContainersMainCaption}>
            Are you sure you want to update the {itemsWithUpdates.length}{' '}
            selected WordPress {props.type}
            {itemsWithUpdates.length > 1 ? 's' : ''}? If it lasts longer than
            usual, WordPress will automatically enable maintenance mode.
            MyHosting will create a system-generated backup so you can revert
            the process if necessary.
          </span>
        </div>
        <div className={styles.tableWrapper}>
          <Table
            rowSelection={{
              type: 'checkbox',
              ...rowSelection,
            }}
            columns={columns}
            dataSource={itemsWithUpdates.map((item) => ({
              key: item.name,
              itemName: item.name,
              updateAvailable: item.update_version,
            }))}
            pagination={false}
          />
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <Button
          backgroundColor={buttonbackgroundColorEnum.grey}
          innerContent="Cancel"
          onClick={props.onClose}
        />
        <Button
          backgroundColor={buttonbackgroundColorEnum.black}
          innerContent="Update"
          onClick={handleUpdate}
        />
      </div>
    </div>
  );
};

export default UpdateThemesAndPlugins;
