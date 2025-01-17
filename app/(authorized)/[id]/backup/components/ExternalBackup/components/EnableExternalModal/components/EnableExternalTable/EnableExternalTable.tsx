import Image from 'next/image';
import { Table, TableProps } from 'antd';
import styles from './EnableExternalTable.module.scss';
import { EnableExternalTablePropsInterface } from './interfaces/enable-external-table-props.interface';

const EnableExternalTable = () => {
  const dailyBackups: EnableExternalTablePropsInterface[] = [
    {
      created: '2025-01-15',
      size: '500 MB',
      storage: 'AWS',
      status: 'Success',
    },
    {
      created: '2025-01-14',
      size: '480 MB',
      storage: 'AWS',
      status: 'Failed',
    },
    {
      created: '2025-01-13',
      size: '520 MB',
      storage: 'AWS',
      status: 'Success',
    },
  ];

  const columns: TableProps<EnableExternalTablePropsInterface>['columns'] = [
    {
      title: 'Created',
      dataIndex: 'created',
      key: 'created',
    },
    {
      title: 'Size (Zipped)',
      dataIndex: 'size',
      key: 'size',
    },
    {
      title: 'Storage',
      dataIndex: 'storage',
      key: 'storage',
      render: () => <Image src="/aws.svg" alt="aws" width={40} height={24} />,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: () => (
        <Image
          src="/icons/information.svg"
          alt="information"
          width={24}
          height={24}
        />
      ),
    },
  ];

  return (
    <div className={styles.tableWrapper}>
      <Table<EnableExternalTablePropsInterface>
        columns={columns}
        dataSource={dailyBackups}
        pagination={false}
      />
    </div>
  );
};

export default EnableExternalTable;
