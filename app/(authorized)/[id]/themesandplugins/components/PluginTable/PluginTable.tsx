'use client';

import React, { useCallback, useEffect, useState } from 'react';
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

  const handleModalClose = useCallback(() => setModalOpen(false), []);
  const handleReload = useCallback(() => mutate(), [mutate]);

  const handleRowSelectionChange = useCallback(
    (_: React.Key[], selectedRows: PluginDataPropsInterface[]) => {
      setSelectedPlugins(selectedRows);
    },
    [],
  );

  const onCheckedes = useCallback(
    async (action: 'enable' | 'disable', pluginName: string[]) => {
      setModalOpen(true);
      setRowChecked(false);

      try {
        await patchData(`wp-cli/plugin/${action}`, numberId, {
          plugins: pluginName,
        });
        mutate();
      } catch (error) {
        console.log(error);
      }
      setModalOpen(false);
    },
    [numberId, mutate],
  );

  const onModalAction = useCallback(
    (plugin: PluginDataPropsInterface, action: 'activate' | 'deactivate') => {
      setSelectedPlugin(plugin);
      setModalAction(action);
      setModalOpen(true);
      setRowChecked(true);
    },
    [],
  );

  const onHandleUpdate = useCallback(
    async (pluginName: string) => {
      try {
        await updateData(`wp-cli/plugins`, numberId, {
          plugins: [pluginName],
        });
        mutate();
      } catch (error) {
        console.log(error);
      }
    },
    [numberId, mutate],
  );

  useEffect(() => {
    if (plugins?.length) {
      const updatedSelectedPlugins = plugins.filter((plugin) =>
        selectedPlugins.some((selected) => selected.name === plugin.name),
      );
      setSelectedPlugins(updatedSelectedPlugins);
    }
  }, [plugins]);

  const filteredSelectedPlugins = selectedPlugins.filter((plugin) =>
    modalAction === 'activate'
      ? plugin.status !== 'active'
      : plugin.status === 'active',
  );

  const pluginName = rowChecked
    ? filteredSelectedPlugins.length > 1
      ? selectedPlugin?.name || 'Unknow'
      : filteredSelectedPlugins.length === 0
        ? selectedPlugin?.name || 'unknow'
        : `${filteredSelectedPlugins.length}`
    : `${filteredSelectedPlugins.length}`;

  const handleAction = useCallback(() => {
    const action = modalAction === 'activate' ? 'enable' : 'disable';
    const pluginNames = selectedPlugins
      .filter((plugin) =>
        modalAction === 'activate'
          ? plugin.status !== 'active'
          : plugin.status === 'active',
      )
      .map((plugin) => plugin.name);

    onCheckedes(action, pluginNames);
  }, [modalAction, selectedPlugins, onCheckedes]);

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
                        setModalAction('activate');
                        setModalOpen(true);
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
                        setModalAction('deactivate');
                        setModalOpen(true);
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
          type: 'checkbox',
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
          onActivate={handleAction}
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
          type={'plugin'}
        />
      </Modal>
    </div>
  );
};

export default PluginTable;
