'use client';

import React, { useState } from 'react';
import { Modal, Table, TableColumnsType } from 'antd';
import { useParams } from 'next/navigation';
import { updateData, patchData } from '@/app/api/crudService';
import styles from '@/app/(authorized)/domains/components/DomainsTable/DomainsTable.module.scss';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { PluginDataPropsInterface } from './interfaces/plugin-table.interfaces';
import Search from '@/app/components/Search/Search';
import { useGetData } from '@/app/hooks/useGetData';
import ActivateModal from '../ActivateModal/ActivateModal';

const PluginTable = () => {
  const { id } = useParams();
  const numberId = +id;
  const [selectionType] = useState<'checkbox'>('checkbox');
  const [searchValue, setSearchValue] = useState('');
  const [selectedPlugins, setSelectedPlugins] = useState<
    PluginDataPropsInterface[]
  >([]);
  const [selectedPlugin, setSelectedPlugin] =
    useState<PluginDataPropsInterface | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalAction, setModalAction] = useState<'activate' | 'deactivate'>(
    'activate',
  );

  const {
    data: plugins,
    isLoading,
    mutate,
  } = useGetData<PluginDataPropsInterface[]>({
    endpoint: `wp-cli/plugin/${id}`,
    queryParams: { search: searchValue },
  });

  const onModalActivateCheck = () => {
    if (selectedPlugins.some((plugin) => plugin.status !== 'active')) {
      setModalOpen(true);
    }
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleReload = () => {
    mutate();
  };

  const handleRowSelectionChange = (
    selectedRowKeys: React.Key[],
    selectedRows: PluginDataPropsInterface[],
  ) => {
    setSelectedPlugins(selectedRows);
  };

  const onModalAction = (
    plugin: PluginDataPropsInterface,
    action: 'activate' | 'deactivate',
  ) => {
    setSelectedPlugin(plugin);
    setModalAction(action);
    setModalOpen(true);
  };

  const onHandleAction = async (
    action: 'enable' | 'disable',
    pluginName: string,
  ) => {
    try {
      await patchData(`wp-cli/plugin/${action}`, numberId, {
        plugin: pluginName,
      });
      mutate();
    } catch (error) {
      console.log(error);
    }
    setModalOpen(false);
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
          {record.update !== 'none' && (
            <div className={styles.buttonsUpdate}>
              <Button
                backgroundColor={buttonbackgroundColorEnum.black}
                innerContent="Update"
                onClick={() => onHandleAction('enable', record.name)}
              />
            </div>
          )}
          {record.status === 'active' ? (
            <div className={styles.buttonsDeactive}>
              <Button
                backgroundColor={buttonbackgroundColorEnum.grey}
                innerContent="Deactivate"
                onClick={() => onModalAction(record, 'deactivate')}
              />
            </div>
          ) : (
            <div className={styles.buttonsActive}>
              <Button
                backgroundColor={buttonbackgroundColorEnum.grey}
                innerContent="Activate"
                onClick={() => onModalAction(record, 'activate')}
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
          <div className={styles.searchWrap}>
            <div className={styles.searchHeader}>
              <h2>Installed Plugins</h2>
              {selectedPlugins.length > 0 && (
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
              )}
            </div>
            <div className={styles.searchInput}>
              <Search
                placeholder="Search By Plugin Name"
                isPadded
                onChange={(value) => setSearchValue(value)}
              />
              <div className={styles.reloadContainer}>
                {selectedPlugins.length > 0 ? (
                  <div className={styles.checkedWrapper}>
                    <span>
                      {selectedPlugins.length}{' '}
                      {selectedPlugins.length > 1
                        ? 'plugins selected'
                        : 'plugin selected'}
                    </span>
                    <Button
                      backgroundColor={buttonbackgroundColorEnum.grey}
                      innerContent="Update"
                      disableButton={
                        !selectedPlugins.some(
                          (plugin) => plugin.update !== 'none',
                        )
                      }
                    />
                    <Button
                      backgroundColor={buttonbackgroundColorEnum.grey}
                      innerContent="Activate"
                      disableButton={
                        !selectedPlugins.some(
                          (plugin) => plugin.status !== 'active',
                        )
                      }
                      onClick={onModalActivateCheck}
                    />
                    <Button
                      backgroundColor={buttonbackgroundColorEnum.grey}
                      innerContent="Deactivate"
                      disableButton={
                        !selectedPlugins.some(
                          (plugin) => plugin.status === 'active',
                        )
                      }
                    />
                  </div>
                ) : (
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
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Table<PluginDataPropsInterface>
        rowSelection={{
          type: selectionType,
          onChange: handleRowSelectionChange,
        }}
        columns={columns}
        dataSource={plugins}
        pagination={false}
        scroll={{ x: 'max-content' }}
        rowKey={(record) => record.name}
        loading={isLoading}
      />
      <Modal
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        footer={null}
        closable={false}
        width={840}
      >
        <ActivateModal
          pluginName={selectedPlugin?.name || 'Unknown Plugin'}
          onClose={handleModalClose}
          onActivate={() =>
            selectedPlugin &&
            onHandleAction(
              modalAction === 'activate' ? 'enable' : 'disable',
              selectedPlugin.name,
            )
          }
          modalAction={modalAction}
        />
      </Modal>
    </div>
  );
};

export default PluginTable;
