import React, { useState } from 'react';
import { Modal, Table } from 'antd';
import Button from '@/app/components/Button/Button';
import styles from './ApiKeys.module.scss';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import ApiKeysAddModal from './ApiKeysAddModal/ApiKeysAddModal';
import { apiDummyData } from '../apiDummy/api-keys-dummy';
import RevokeModal from '@/app/components/RevokeModal/RevokeModal';

const ApiKeys = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRevokeModalOpen, setIsRevokeModalOpen] = useState(false);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '45%',
    },
    {
      title: 'Expiry Date',
      dataIndex: 'expiryDate',
      key: 'expiryDate',
      width: '40%',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: () => (
        <div className={styles.button}>
          <Button
            backgroundColor={buttonbackgroundColorEnum.grey}
            innerContent="Revoke"
            onClick={() => setIsRevokeModalOpen(true)}
          />
        </div>
      ),
      width: '15%',
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.head}>
          <span className={styles.headline}>API Keys</span>
          <span className={styles.text}>
            Earn credits by referring your friends to hosting. Earnings accrue
            when referrals start using and paying for hosting services. You can
            view total credits below or when you have credits available, they
            are also shown on the payment methods page, as an account balance.
          </span>
        </div>
        <Button
          innerContent="Create API Key"
          backgroundColor={buttonbackgroundColorEnum.black}
          onClick={() => setIsModalOpen(true)}
        />
      </div>
      <div className={styles.container}>
        <div className={styles.tableWrapper}>
          <Table
            columns={columns}
            dataSource={apiDummyData}
            pagination={false}
            locale={{ emptyText: 'API keys will appear here' }}
            className={styles.table}
          />
        </div>
      </div>
      <Modal
        width={840}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        closable={false}
        footer={null}
      >
        <ApiKeysAddModal onClose={() => setIsModalOpen(false)} />
      </Modal>
      <Modal
        width={840}
        open={isRevokeModalOpen}
        onCancel={() => setIsRevokeModalOpen(false)}
        closable={false}
        footer={null}
      >
        <RevokeModal
          onClose={() => setIsRevokeModalOpen(false)}
          headline={'Revoke API key'}
          content={
            'If you revoke the API key 123, all operations using it will fail immediately. Are you sure that you want to proceed?'
          }
          buttonText={'Revoke'}
          onSuccess={() => {}}
        />
      </Modal>
    </div>
  );
};

export default ApiKeys;
