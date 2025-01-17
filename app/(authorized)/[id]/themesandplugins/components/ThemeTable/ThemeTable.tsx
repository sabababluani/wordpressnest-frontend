'use client';

import React, { useEffect, useState } from 'react';
import { Modal, Table, TableColumnsType } from 'antd';
import { useParams } from 'next/navigation';
import styles from '@/app/styles/shared-table.module.scss';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import Search from '@/app/components/Search/Search';
import { ThemesTablePropsInterface } from './interfaces/theme-table.interface';
import { useGetData } from '@/app/hooks/useGetData';
import { patchData, updateData } from '@/app/api/crudService';
import ThemeActivateModal from './components/ThemeActivateModal/ThemeActivateModal';
import { ThemeActivateModalPropsInterface } from './components/ThemeActivateModal/interfaces/theme-activate-modal-props.interface';
import UpdateThemesAndPlugins from '../UpdateThemesAndPlugins/UpdateThemesAndPlugins';
import { ThemesAndPluginsStatusEnum } from '../enum/themes-and-plugins.enum';
import PluginUpdateModal from '../PluginTable/components/PluginUpdateModal/PluginUpdateModal';

const ThemeTable = () => {
  const { id } = useParams();
  const NumberId = Number(id);

  const [searchValue, setSearchValue] = useState('');
  const [selectedThemes, setSelectedThemes] = useState<
    ThemesTablePropsInterface[]
  >([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] =
    useState<ThemeActivateModalPropsInterface | null>(null);
  const [isTableOpen, setIsTableOpen] = useState(false);
  const [filteredThemes, setFilteredThemes] = useState<
    ThemesTablePropsInterface[]
  >([]);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    data: themes,
    mutate,
    isLoading,
  } = useGetData<ThemesTablePropsInterface[]>({
    endpoint: `wp-cli/theme/${id}`,
  });

  const handleReload = () => mutate();

  const onHandleUpdate = async (themeName: string) => {
    try {
      await updateData(`wp-cli/themes`, NumberId, { themes: [themeName] });
      mutate();
    } catch (error) {
      alert(error);
    }
    setIsUpdateModalOpen(false);
  };

  useEffect(() => {
    if (themes) {
      const filtered = themes.filter((theme) =>
        theme.name.toLowerCase().includes(searchValue.toLowerCase()),
      );
      setFilteredThemes(filtered);
    }
  }, [themes, searchValue]);

  const onHandleActive = async (themeName: string) => {
    setLoading(true);
    try {
      await patchData(`wp-cli/theme`, NumberId, { theme: themeName });
      mutate();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
    setModalOpen(false);
  };

  const onModalAction = (theme: ThemesTablePropsInterface) => {
    const themeModalProps: ThemeActivateModalPropsInterface = {
      themeName: theme.name,
    };
    setSelectedTheme(themeModalProps);
    setModalOpen(true);
  };

  const handleRowSelectionChange = (
    _: React.Key[],
    selectedRows: ThemesTablePropsInterface[],
  ) => {
    setSelectedThemes(selectedRows);
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
            status === ThemesAndPluginsStatusEnum.ACTIVE
              ? styles.activeStatus
              : status === ThemesAndPluginsStatusEnum.INACTIVE
                ? styles.inactiveStatus
                : ''
          }
        >
          <span
            className={
              status === ThemesAndPluginsStatusEnum.ACTIVE
                ? styles.greenDot
                : status === ThemesAndPluginsStatusEnum.INACTIVE
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
        record.update === 'none'
          ? 'Up-To-Date'
          : `${record.update_version} Available`,
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
                onClick={() => {
                  setIsUpdateModalOpen(true);
                  setSelectedTheme({ themeName: record.name });
                }}
              />
            </div>
          ) : null}
          {record.status === ThemesAndPluginsStatusEnum.ACTIVE ? (
            <div className={styles.buttonsDeactive}>
              <Button
                backgroundColor={buttonbackgroundColorEnum.grey}
                innerContent="Deactivate"
                disableButton
              />
            </div>
          ) : (
            <div className={styles.buttonsActive}>
              <Button
                backgroundColor={buttonbackgroundColorEnum.grey}
                innerContent="Activate"
                onClick={() => onModalAction(record)}
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
              <h2>Installed Themes</h2>
              {selectedThemes.length > 0 && (
                <div className={styles.reloadWrap}>
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
                placeholder="Search By Theme Name"
                isPadded
                onChange={(value) => setSearchValue(value)}
              />
              <div className={styles.reloadContainer}>
                {selectedThemes.length > 0 ? (
                  <div className={styles.checkedWrapper}>
                    <span>
                      {selectedThemes.length}{' '}
                      {selectedThemes.length > 1
                        ? 'themes selected'
                        : 'theme selected'}
                    </span>
                    <Button
                      backgroundColor={buttonbackgroundColorEnum.grey}
                      innerContent="Update"
                      disableButton={
                        !selectedThemes.some((theme) => theme.update !== 'none')
                      }
                      onClick={() => {
                        if (
                          selectedThemes.some(
                            (theme) => theme.update !== 'none',
                          )
                        ) {
                          setIsTableOpen(true);
                        }
                      }}
                    />
                  </div>
                ) : (
                  <div className={styles.reloadWrap}>
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
      <Table<ThemesTablePropsInterface>
        rowSelection={{
          type: 'checkbox',
          onChange: handleRowSelectionChange,
        }}
        columns={columns}
        dataSource={filteredThemes}
        pagination={false}
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
        <ThemeActivateModal
          themeName={selectedTheme?.themeName}
          onClose={() => setModalOpen(false)}
          onActivate={() =>
            selectedTheme && onHandleActive(selectedTheme.themeName!)
          }
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
          selectedPlugins={selectedThemes}
          onClose={() => setIsTableOpen(false)}
          type={'theme'}
        />
      </Modal>

      <Modal
        open={isUpdateModalOpen}
        onCancel={() => setIsUpdateModalOpen(false)}
        footer={null}
        closable={false}
        width={840}
      >
        <PluginUpdateModal
          pluginName={selectedTheme?.themeName}
          onClose={() => setIsUpdateModalOpen(false)}
          onActivate={() => onHandleUpdate(selectedTheme?.themeName || '')}
          type={'theme'}
        />
      </Modal>
    </div>
  );
};

export default ThemeTable;
