'use client';

import { useState } from 'react';
import { Table, Modal } from 'antd';
import Button from '@/app/components/Button/Button';
import RegistryCredentialsDeleteModal from '../RegistryCredentialsDeleteModal/RegistryCredentialsDeleteModal';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import styles from './RegistryCredentials.module.scss';
import RegistryCredentialsCreateModal from '../RegistryCredentialsCreateModal/RegistryCredentialsCreateModal';
import { RegistryTableDummy } from './dummy/registry-credentials-table-dummy';

const RegistryCredentials = () => {
  const [isActive, setIsActive] = useState(false);
  const [isCreateActive, setIsCreateActive] = useState(false);

  const onCreateClick = () => {
    setIsCreateActive(true);
  };

  // const onClick = () => {
  //   setIsActive(true);
  // };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Registry',
      dataIndex: 'registry',
      key: 'registry',
    },
    {
      title: 'Created',
      dataIndex: 'created',
      key: 'created',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: () => (
        <div className={styles.button}>
          <Button
            innerContent="Delete"
            backgroundColor={buttonbackgroundColorEnum.grey}
            onClick={() => setIsActive(true)}
          />
        </div>
      ),
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.head}>
          <span className={styles.headline}>
            Container registry credentials
          </span>
          <span className={styles.text}>
            Earn credits by referring your friend to hosting. Earnings accrue
            when referrals start using and paying for hosting services. You can
            view total credits below or when you have credits available, they
            are also shown on the payment methods page, as an account balance.
          </span>
        </div>
        <Button
          innerContent="Create credentials"
          backgroundColor={buttonbackgroundColorEnum.black}
          onClick={onCreateClick}
        />
      </div>
      <div className={styles.container}>
        <div className={styles.tableWrapper}>
          <Table
            columns={columns}
            dataSource={RegistryTableDummy}
            pagination={false}
            locale={{
              emptyText: 'Container registry credentials will appear here',
            }}
          />
        </div>
      </div>
      <Modal
        open={isActive}
        onCancel={() => setIsActive(false)}
        footer={null}
        closable={false}
        width={800}
      >
        <RegistryCredentialsDeleteModal onClose={() => setIsActive(false)} />
      </Modal>
      <Modal
        open={isCreateActive}
        onCancel={() => setIsCreateActive(false)}
        footer={null}
        closable={false}
        width={800}
      >
        <RegistryCredentialsCreateModal
          onClose={() => setIsCreateActive(false)}
        />
      </Modal>
    </div>
  );
};

export default RegistryCredentials;
