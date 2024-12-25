import Button from '@/app/components/Button/Button';
import styles from './UpdateThemesAndPlugins.module.scss';
import Image from 'next/image';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { Table } from 'antd';
import { useState, useEffect } from 'react';
import { PluginDataPropsInterface } from '../PluginTable/interfaces/plugin-table.interfaces';
import { updateData } from '@/app/api/crudService';
import { useParams } from 'next/navigation';
import { mutate } from 'swr';

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

interface UpdateThemesAndPluginsProps {
  selectedPlugins: PluginDataPropsInterface[];
  onClose: () => void;
}

const UpdateThemesAndPlugins = (props: UpdateThemesAndPluginsProps) => {
  const { id } = useParams();
  const numberId = +id;
  const [selectedRows, setSelectedRows] = useState<React.Key[]>(
    props.selectedPlugins.map((plugin) => plugin.name),
  );

  const pluginsWithUpdates = props.selectedPlugins.filter(
    (plugin) => plugin.update !== 'none',
  );

  const rowSelection = {
    selectedRowKeys: selectedRows,
    onChange: (selectedRowKeys: React.Key[]) => {
      setSelectedRows(selectedRowKeys);
    },
  };

  const handleUpdate = async () => {
    try {
      await updateData('wp-cli/plugins', numberId, {
        plugins: selectedRows,
      });
      mutate(`wp-cli/plugin/${id}`);
    } catch (error) {
      console.log(error);
    }
    props.onClose();
  };

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.header}>
        <span className={styles.headline}>
          Update {pluginsWithUpdates.length} WordPress plugin
          {pluginsWithUpdates.length > 1 ? 's' : ''}
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
            Are you sure you want to update the {pluginsWithUpdates.length}{' '}
            selected WordPress plugin{pluginsWithUpdates.length > 1 ? 's' : ''}?
            If it lasts longer than usual, WordPress will automatically enable
            maintenance mode. MyHosting will create a system-generated backup so
            you can revert the process if necessary.
          </span>
        </div>
        <div className={styles.tableWrapper}>
          <Table
            rowSelection={{
              type: 'checkbox',
              ...rowSelection,
            }}
            columns={columns}
            dataSource={pluginsWithUpdates.map((plugin) => ({
              key: plugin.name,
              pluginName: plugin.name,
              updateAvailable: plugin.update_version,
            }))}
            pagination={false}
            scroll={{ x: 'max-content' }}
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
