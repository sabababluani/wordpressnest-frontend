'use client';

import React, { useState } from 'react';
import { Modal, Select, Table, TableColumnsType } from 'antd';
import styles from './page.module.scss';
import Search from '../../components/Search/Search';
import Button from '../../components/Button/Button';
import { buttonbackgroundColorEnum } from '../../components/Button/enum/button.enum';
import { domainsDummy } from './components/domainsdummy/domains-dummy-data';
import { DomainsTablePropsInterface } from './components/interfaces/domains-table-props.interface';
import AddDomainModal from './components/AddDomainModal/AddDomainModal';
import Image from 'next/image';
import CustomSsl from './components/CustomSsl/CustomSsl';

// left last item dropdown z-index, dynamic page and connect to backend

const Domains = (): JSX.Element => {
  const [selectedRows, setSelectedRows] = useState<React.Key[]>([]);
  const [isAddDomainModal, setIsAddDomainModal] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<React.Key | null>(null);
  const [isSslOpen, seIsSslOpen] = useState(false);

  const showModal = () => {
    setIsAddDomainModal(true);
  };

  const handleCancel = () => {
    setIsAddDomainModal(false);
  };

  const handleRowSelectionChange = {
    onChange: (selectedRowKeys: React.Key[]) => {
      setSelectedRows(selectedRowKeys);
    },
  };

  const toggleDropdown = (key: React.Key) => {
    setActiveDropdown((prev) => (prev === key ? null : key));
  };

  const DomainsTableColumns: TableColumnsType<DomainsTablePropsInterface> = [
    {
      title: 'Name',
      dataIndex: 'plugin',
      render: (text: string, record) => (
        <div className={record.isPrimary ? styles.primaryLabel : ''}>
          {text}
          {record.isPrimary && <div className={styles.primaryTag}>Primary</div>}
        </div>
      ),
      width: '40%',
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
      render: (_, record) => (
        <div className={styles.actionWrapper}>
          <div
            className={styles.dotsWrapper}
            onClick={() => toggleDropdown(record.key)}
          >
            <Image
              src={'/icons/3dots.svg'}
              alt={'3dots'}
              width={18}
              height={18}
            />
          </div>
          {activeDropdown === record.key && (
            <div
              className={
                !record.isPrimary ? styles.dropdown : styles.dropdownDisabled
              }
            >
              <span>Make primary domain</span>
            </div>
          )}
        </div>
      ),
    },
  ];

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
            <Select defaultValue={'All sites'} />
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
                  onClick={() => seIsSslOpen(true)}
                />
                <Button
                  backgroundColor={buttonbackgroundColorEnum.red}
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
            ...handleRowSelectionChange,
          }}
          columns={DomainsTableColumns}
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
        width={840}
        centered
      >
        <AddDomainModal onClose={handleCancel} />
      </Modal>
      <Modal
        open={isSslOpen}
        onCancel={() => seIsSslOpen(false)}
        footer={null}
        closable={false}
        width={840}
        centered
      >
        <CustomSsl onClose={() => seIsSslOpen(false)} />
      </Modal>
    </div>
  );
};

export default Domains;
