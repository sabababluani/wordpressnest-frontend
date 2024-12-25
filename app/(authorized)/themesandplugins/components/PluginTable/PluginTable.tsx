'use client';

import React, { useEffect, useState } from 'react';
import { Modal, Table, TableColumnsType } from 'antd';
import { useParams } from 'next/navigation';
import { patchData, updateData } from '@/app/api/crudService';
import styles from '@/app/(authorized)/domains/components/DomainsTable/DomainsTable.module.scss';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { PluginDataPropsInterface } from './interfaces/plugin-table.interfaces';
import Search from '@/app/components/Search/Search';
import { useGetData } from '@/app/hooks/useGetData';
import ActivateModal from '../ActivateModal/ActivateModal';
import UpdateThemesAndPlugins from '../UpdateThemesAndPlugins/UpdateThemesAndPlugins';

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
  const [isTableOpen, setIsTableOpen] = useState(false);
  const [rowChecked, setRowChecked] = useState(false);

  const {
    data: plugins,
    isLoading,
    mutate,
  } = useGetData<PluginDataPropsInterface[]>({
    endpoint: `wp-cli/plugin/${id}`,
    queryParams: { search: searchValue },
  });

  // const onModalActivateCheck = () => {
  //   if (selectedPlugins.some((plugin) => plugin.status !== 'active')) {
  //     setModalOpen(true);
  //   }
  // };

  const onButtonAction = (
    plugin: PluginDataPropsInterface,
    action: 'activate' | 'deactivate',
  ) => {
    setModalAction(action);
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

  const onCheckedes = async (
    action: 'activate' | 'deactivate',
    pluginName: string[],
  ) => {
    setModalAction(action);
    setModalOpen(true);
    setRowChecked(false);
    try {
      await patchData(`wp-cli/plugins/${action}`, numberId, {
        plugins: [pluginName],
      });
      mutate();
    } catch (error) {
      console.log(error);
    }
  };

  const onModalAction = (
    plugin: PluginDataPropsInterface,
    action: 'activate' | 'deactivate',
  ) => {
    setSelectedPlugin(plugin);
    setModalAction(action);
    setModalOpen(true);
    setRowChecked(true);
  };

  const onHandleAction = async (
    action: 'enable' | 'disable',
    pluginName: string,
  ) => {
    try {
      await patchData(`wp-cli/plugin/${action}`, numberId, {
        plugins: [pluginName],
      });
      mutate();
    } catch (error) {
      console.log(error);
    }
    setModalOpen(false);
  };

  const onHandleUpdate = async (pluginName: string) => {
    try {
      await updateData(`wp-cli/plugins`, numberId, {
        plugins: [pluginName],
      });
      mutate();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (plugins?.length) {
      const updatedSelectedPlugins = plugins.filter((plugin) =>
        selectedPlugins.some((selected) => selected.name === plugin.name),
      );
      setSelectedPlugins(updatedSelectedPlugins);
    }
  }, [plugins]);

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
            status === 'active' ? styles.activeStatus : styles.inactiveStatus
          }
        >
          <span
            className={status === 'active' ? styles.greenDot : styles.redDot}
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
            <Button
              backgroundColor={buttonbackgroundColorEnum.black}
              innerContent="Update"
              onClick={() => onHandleUpdate(record.name)}
            />
          )}
          {record.status === 'active' ? (
            <Button
              backgroundColor={buttonbackgroundColorEnum.grey}
              innerContent="Deactivate"
              onClick={() => onModalAction(record, 'deactivate')}
            />
          ) : (
            <Button
              backgroundColor={buttonbackgroundColorEnum.grey}
              innerContent="Activate"
              onClick={() => onModalAction(record, 'activate')}
            />
          )}
        </div>
      ),
    },
  ];

  const filteredSelectedPlugins = selectedPlugins.filter((plugin) =>
    modalAction === 'activate'
      ? plugin.status !== 'active'
      : plugin.status === 'active',
  );

  const pluginName =
    rowChecked && filteredSelectedPlugins.length > 1
      ? selectedPlugin?.name || 'Unknown Plugin'
      : ` ${filteredSelectedPlugins.length}`;

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
                      onClick={() => setIsTableOpen(true)}
                    />
                    <Button
                      backgroundColor={buttonbackgroundColorEnum.grey}
                      innerContent="Activate"
                      disableButton={
                        !selectedPlugins.some(
                          (plugin) => plugin.status !== 'active',
                        )
                      }
                      onClick={() => {
                        const pluginNames = selectedPlugins
                          .filter((plugin) => plugin.status === 'active')
                          .map((plugin) => plugin.name);

                        onCheckedes('activate', pluginNames);
                      }}
                    />
                    <Button
                      backgroundColor={buttonbackgroundColorEnum.grey}
                      innerContent="Deactivate"
                      disableButton={
                        !selectedPlugins.some(
                          (plugin) => plugin.status === 'active',
                        )
                      }
                      onClick={() => {
                        const pluginNames = selectedPlugins
                          .filter((plugin) => plugin.status === 'active')
                          .map((plugin) => plugin.name);

                        onCheckedes('deactivate', pluginNames);
                      }}
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
        onRow={(record) => ({
          onClick: () => {
            setSelectedPlugin(record);
          },
        })}
      />
      <Modal
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        footer={null}
        closable={false}
        width={840}
      >
        <ActivateModal
          pluginName={pluginName}
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
      <Modal
        open={isTableOpen}
        onCancel={() => setIsTableOpen(false)}
        footer={null}
        closable={false}
        width={840}
      >
        <UpdateThemesAndPlugins
          selectedPlugins={selectedPlugins}
          onClose={() => setIsTableOpen(false)}
        />
      </Modal>
    </div>
  );
};

export default PluginTable;
