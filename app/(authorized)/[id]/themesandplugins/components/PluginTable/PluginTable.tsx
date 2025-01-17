'use client';

import React, { useEffect, useState } from 'react';
import { Modal, Table, TableColumnsType } from 'antd';
import { useParams } from 'next/navigation';
import { patchData, updateData } from '@/app/api/crudService';
import styles from '@/app/styles/shared-table.module.scss';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { PluginDataPropsInterface } from './interfaces/plugin-table.interfaces';
import Search from '@/app/components/Search/Search';
import { useGetData } from '@/app/hooks/useGetData';
import ActivateModal from '../ActivateModal/ActivateModal';
import UpdateThemesAndPlugins from '../UpdateThemesAndPlugins/UpdateThemesAndPlugins';
import PluginUpdateModal from './components/PluginUpdateModal/PluginUpdateModal';
import {
  ThemesAndPluginsActionEnum,
  ThemesAndPluginsStatusEnum,
} from '../enum/themes-and-plugins.enum';

const PluginTable = () => {
  const { id } = useParams();
  const numberId = Number(id);

  const [searchValue, setSearchValue] = useState('');
  const [selectedPlugins, setSelectedPlugins] = useState<
    PluginDataPropsInterface[]
  >([]);
  const [selectedPlugin, setSelectedPlugin] =
    useState<PluginDataPropsInterface | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalAction, setModalAction] = useState<
    ThemesAndPluginsActionEnum.ACTIVATE | ThemesAndPluginsActionEnum.DEACTIVATE
  >(ThemesAndPluginsActionEnum.ACTIVATE);
  const [isTableOpen, setIsTableOpen] = useState(false);
  const [rowChecked, setRowChecked] = useState(false);
  const [isUpdateAction, setIsUpdateAction] = useState(false);
  const [filteredPlugins, setFilteredPlugins] = useState<
    PluginDataPropsInterface[]
  >([]);
  const [loading, setLoading] = useState(false);

  const {
    data: plugins,
    isLoading,
    mutate,
  } = useGetData<PluginDataPropsInterface[]>({
    endpoint: `wp-cli/plugin/${id}`,
  });

  const handleModalClose = () => setModalOpen(false);
  const handleReload = () => mutate();

  const handleRowSelectionChange = (
    _: React.Key[],
    selectedRows: PluginDataPropsInterface[],
  ) => {
    setSelectedPlugins(selectedRows);
  };

  const onCheckedes = async (
    action:
      | ThemesAndPluginsActionEnum.ENABLE
      | ThemesAndPluginsActionEnum.DISABLE,
    pluginName: string[],
  ) => {
    setModalOpen(true);
    try {
      await patchData(`wp-cli/plugin/${action}`, numberId, {
        plugins: pluginName,
      });
      setRowChecked(false);
      mutate();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
    setModalOpen(false);
  };

  useEffect(() => {
    if (plugins) {
      const filtered = plugins.filter((plugin) =>
        plugin.name.toLowerCase().includes(searchValue.toLowerCase()),
      );
      setFilteredPlugins(filtered);
    }
  }, [plugins, searchValue]);

  const onModalAction = (
    plugin: PluginDataPropsInterface,
    action:
      | ThemesAndPluginsActionEnum.ACTIVATE
      | ThemesAndPluginsActionEnum.DEACTIVATE,
  ) => {
    setSelectedPlugin(plugin);
    setModalAction(action);
    setModalOpen(true);
    setRowChecked(true);
  };

  const onHandleUpdate = async (pluginName: string) => {
    try {
      await updateData(`wp-cli/plugins`, numberId, {
        plugins: [pluginName],
      });
      setIsTableOpen(false);
      setIsUpdateAction(false);
      mutate();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
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

  const filteredSelectedPlugins = selectedPlugins.filter((plugin) =>
    modalAction === ThemesAndPluginsActionEnum.ACTIVATE
      ? plugin.status !== ThemesAndPluginsStatusEnum.ACTIVE
      : plugin.status === ThemesAndPluginsStatusEnum.ACTIVE,
  );

  const pluginName = rowChecked
    ? filteredSelectedPlugins.length >= 0
      ? selectedPlugin?.name || 'Unknow'
      : `${filteredSelectedPlugins.length}`
    : `${filteredSelectedPlugins.length}`;

  const handleAction = () => {
    setLoading(true);
    const isActivating = modalAction === ThemesAndPluginsActionEnum.ACTIVATE;
    const action = isActivating
      ? ThemesAndPluginsActionEnum.ENABLE
      : ThemesAndPluginsActionEnum.DISABLE;

    const pluginNames = rowChecked
      ? selectedPlugin
        ? [selectedPlugin.name]
        : []
      : selectedPlugins
          .filter((plugin) =>
            isActivating
              ? plugin.status !== 'active'
              : plugin.status === 'active',
          )
          .map((plugin) => plugin.name);

    if (pluginNames.length) onCheckedes(action, pluginNames);
  };

  const hasUpdatablePlugins = selectedPlugins.some(
    (plugin) => plugin.update !== 'none',
  );

  const hasInactivePlugins = selectedPlugins.some(
    (plugin) => plugin.status === ThemesAndPluginsStatusEnum.INACTIVE,
  );

  const hasActivePlugins = selectedPlugins.some(
    (plugin) => plugin.status === ThemesAndPluginsStatusEnum.ACTIVE,
  );

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
            status === ThemesAndPluginsStatusEnum.ACTIVE
              ? styles.activeStatus
              : styles.inactiveStatus
          }
        >
          <span
            className={
              status === ThemesAndPluginsStatusEnum.ACTIVE
                ? styles.greenDot
                : styles.redDot
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
            <Button
              backgroundColor={buttonbackgroundColorEnum.black}
              innerContent="Update"
              onClick={() => {
                setIsUpdateAction(true);
                setSelectedPlugin(record);
                setRowChecked(true);
              }}
            />
          )}
          <Button
            backgroundColor={buttonbackgroundColorEnum.grey}
            innerContent={
              record.status === ThemesAndPluginsStatusEnum.ACTIVE
                ? 'Deactivate'
                : 'Activate'
            }
            onClick={() =>
              onModalAction(
                record,
                record.status === ThemesAndPluginsStatusEnum.ACTIVE
                  ? ThemesAndPluginsActionEnum.DEACTIVATE
                  : ThemesAndPluginsActionEnum.ACTIVATE,
              )
            }
          />
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
                <Button
                  backgroundColor={buttonbackgroundColorEnum.grey}
                  innerContent="Reload"
                  innerContentIconActive
                  innerContentIcon="/icons/reload.svg"
                  onClick={handleReload}
                />
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
                      disableButton={!hasUpdatablePlugins}
                      onClick={() => {
                        if (hasUpdatablePlugins) setIsTableOpen(true);
                      }}
                    />
                    <Button
                      backgroundColor={buttonbackgroundColorEnum.grey}
                      innerContent="Activate"
                      disableButton={!hasInactivePlugins}
                      onClick={() => {
                        if (hasInactivePlugins) {
                          setModalAction(ThemesAndPluginsActionEnum.ACTIVATE);
                          setModalOpen(true);
                        }
                      }}
                    />
                    <Button
                      backgroundColor={buttonbackgroundColorEnum.grey}
                      innerContent="Deactivate"
                      disableButton={!hasActivePlugins}
                      onClick={() => {
                        if (hasActivePlugins) {
                          setModalAction(ThemesAndPluginsActionEnum.DEACTIVATE);
                          setModalOpen(true);
                        }
                      }}
                    />
                  </div>
                ) : (
                  <Button
                    backgroundColor={buttonbackgroundColorEnum.grey}
                    innerContent="Reload"
                    innerContentIconActive
                    innerContentIcon="/icons/reload.svg"
                    onClick={handleReload}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Table<PluginDataPropsInterface>
        rowSelection={{
          type: 'checkbox',
          onChange: handleRowSelectionChange,
        }}
        columns={columns}
        dataSource={filteredPlugins}
        pagination={false}
        rowKey={(record) => record.name}
        loading={isLoading}
      />
      <Modal
        open={modalOpen}
        onCancel={() => {
          setModalOpen(false);
          setRowChecked(false);
        }}
        footer={null}
        closable={false}
        width={840}
      >
        <ActivateModal
          pluginName={pluginName}
          onClose={handleModalClose}
          onActivate={handleAction}
          modalAction={modalAction}
          loading={loading}
          setLoading={setLoading}
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
          type={'plugin'}
        />
      </Modal>
      <Modal
        open={isUpdateAction}
        onCancel={() => setIsUpdateAction(false)}
        footer={null}
        closable={false}
        width={840}
      >
        {selectedPlugin && (
          <PluginUpdateModal
            pluginName={pluginName}
            onClose={() => setIsUpdateAction(false)}
            onActivate={() => {
              setLoading(true);
              onHandleUpdate(selectedPlugin.name);
            }}
            type={'plugin'}
            loading={loading}
            setLoading={setLoading}
          />
        )}
      </Modal>
    </div>
  );
};

export default PluginTable;
