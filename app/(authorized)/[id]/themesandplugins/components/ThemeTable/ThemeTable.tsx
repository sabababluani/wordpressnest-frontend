'use client';

import React, { useCallback, useState } from 'react';
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

  const {
    data: themes,
    mutate,
    isLoading,
  } = useGetData<ThemesTablePropsInterface[]>({
    endpoint: `wp-cli/theme/${id}`,
    queryParams: { search: searchValue },
  });

  const handleReload = () => mutate();

  const onHandleUpdate = useCallback(
    async (themeName: string) => {
      try {
        await updateData(`wp-cli/themes`, NumberId, { themes: themeName });
        mutate();
      } catch (error) {
        alert(error);
      }
    },
    [NumberId, mutate],
  );

  const onHandleActive = async (themeName: string) => {
    try {
      await patchData(`wp-cli/theme`, NumberId, { theme: themeName });
      mutate();
    } catch (error) {
      console.log(error);
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
                onClick={() => onHandleUpdate(record.name)}
              />
            </div>
          ) : null}
          {record.status === 'active' ? (
            <div className={styles.buttonsDeactive}>
              <Button
                backgroundColor={buttonbackgroundColorEnum.grey}
                innerContent="Deactivate"
                onClick={() => onHandleActive(record.name)}
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
                      onClick={() => setIsTableOpen(true)}
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
      <Table<ThemesTablePropsInterface>
        rowSelection={{
          type: 'checkbox',
          onChange: handleRowSelectionChange,
        }}
        columns={columns}
        dataSource={themes}
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
        <ThemeActivateModal
          themeName={selectedTheme?.themeName || 'Unknown Plugin'}
          onClose={() => setModalOpen(false)}
          onActivate={() =>
            selectedTheme && onHandleActive(selectedTheme.themeName!)
          }
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
    </div>
  );
};

export default ThemeTable;
