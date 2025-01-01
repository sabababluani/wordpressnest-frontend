'use client';

import React, { useState } from 'react';
import { Modal, Select, Table } from 'antd';
import styles from './page.module.scss';
import Search from '../../components/Search/Search';
import Button from '../../components/Button/Button';
import { buttonbackgroundColorEnum } from '../../components/Button/enum/button.enum';
import { domainsDummy } from './components/DomainsTable/domainsdummy/domains-dummy-data';
import { DomainsTablePropsInterface } from './components/interfaces/domains-table-props.interface';
import AddDomainModal from './components/AddDomainModal/AddDomainModal';
import { DomainsTableColumns } from './utils/domains-table-columns';

const Domains = (): JSX.Element => {
  const [selectedRows, setSelectedRows] = useState<React.Key[]>([]);
  const [isAddDomainModal, setIsAddDomainModal] = useState(false);

  const showModal = () => {
    setIsAddDomainModal(true);
  };

  const handleCancel = () => {
    setIsAddDomainModal(false);
  };

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
