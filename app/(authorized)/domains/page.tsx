'use client';

import React, { useState } from 'react';
import { Modal, Table } from 'antd';
import type { TableColumnsType } from 'antd';
import Image from 'next/image';
import styles from './page.module.scss';
import Search from '../../components/Search/Search';
import SitesSelect from '../../components/SitesSelect/SitesSelect';
import Button from '../../components/Button/Button';
import { buttonbackgroundColorEnum } from '../../components/Button/enum/button.enum';
import { domainsDummy } from './components/DomainsTable/domainsdummy/domains-dummy-data';
import { DomainsTablePropsInterface } from './components/interfaces/domains-table-props.interface';
import AddDomainModal from './components/AddDomainModal/AddDomainModal';

const Domains = (): JSX.Element => {
  const [selectedRows, setSelectedRows] = useState<React.Key[]>([]);
  const [isAddDomainModal, setIsAddDomainModal] = useState(false);

  const showModal = () => {
    setIsAddDomainModal(true);
  };

  const handleCancel = () => {
    setIsAddDomainModal(false);
  };

  const columns: TableColumnsType<DomainsTablePropsInterface> = [
    {
      title: 'Name',
      dataIndex: 'plugin',
      render: (text: string, record) => (
        <div className={record.isPrimary ? styles.primaryLabel : ''}>
          {text}
          {record.isPrimary && <div className={styles.primaryTag}>Primary</div>}
        </div>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (status: number) => (
        <div
          className={status === 1 ? styles.activeStatus : styles.inactiveStatus}
        >
          <span
            className={status === 1 ? styles.greenDot : styles.redDot}
          ></span>
          <span className={styles.status}>
            {status === 1 ? 'Active' : 'Disconnected'}
          </span>
        </div>
      ),
    },
    {
      title: 'Action',
      dataIndex: 'address',
      render: () => (
        <div className={styles.dotsWrapper}>
          <Image
            src={'/icons/3dots.svg'}
            alt={'3dots'}
            width={14}
            height={16}
          />
        </div>
      ),
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[]) => {
      setSelectedRows(selectedRowKeys);
    },
  };

  return (
    <div className={styles.wrapper}>
      <h1>Domains</h1>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <Search
            placeholder={'Search Sites'}
            isPadded={true}
            onChange={() => {}}
          />
          <div className={styles.select}>
            <SitesSelect domains />
          </div>
        </div>
        <div className={styles.buttonsAdjust}>
          {selectedRows.length > 0 ? (
            <>
              <p>
                {selectedRows.length}{' '}
                {selectedRows.length === 1 ? 'Domain' : 'Domains'} selected
              </p>
              <div className={styles.buttons}>
                <Button
                  backgroundColor={buttonbackgroundColorEnum.grey}
                  innerContent={'Custom SSL'}
                />
                <Button
                  backgroundColor={buttonbackgroundColorEnum.domainsRed}
                  innerContent={'Delete Domains'}
                />
              </div>
            </>
          ) : (
            <>
              <Button
                backgroundColor={buttonbackgroundColorEnum.black}
                innerContent={'Add Domains'}
                onClick={showModal}
              />
            </>
          )}
        </div>
      </div>
      <div className={styles.tableWrapper}>
        <Table<DomainsTablePropsInterface>
          rowSelection={{
            type: 'checkbox',
            ...rowSelection,
          }}
          columns={columns}
          dataSource={domainsDummy}
          pagination={false}
          rowClassName={(record) => (record.isPrimary ? styles.primaryRow : '')}
        />
      </div>
      <Modal
        open={isAddDomainModal}
        onCancel={handleCancel}
        footer={null}
        closable={false}
        className={styles.modal}
        width="auto"
        centered
      >
        <AddDomainModal onClose={handleCancel} />
      </Modal>
    </div>
  );
};

export default Domains;
