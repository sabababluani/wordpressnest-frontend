import React from 'react';
import { Table } from 'antd';
import Button from '@/app/components/Button/Button';
import styles from './ApiKeys.module.scss';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import ApiKeysAddModal from './ApiKeysAddModal/ApiKeysAddModal';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Expiry Date',
    dataIndex: 'expiryDate',
    key: 'expiryDate',
  },
  {
    title: 'Actions',
    key: 'actions',
    render: () => (
      <Button
        backgroundColor={buttonbackgroundColorEnum.grey}
        innerContent="Revoke"
      />
    ),
  },
];

const data = [{}];

const ApiKeys = () => {
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
        />
      </div>
      <div className={styles.container}>
        <div className={styles.tableWrapper}>
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            locale={{ emptyText: 'API keys will appear here' }}
            className={styles.table}
          />
        </div>
      </div>
      <ApiKeysAddModal />
    </div>
  );
};

export default ApiKeys;
