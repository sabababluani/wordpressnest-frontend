import Image from 'next/image';
import { Table, TableProps } from 'antd';
import styles from './EnableExternalTable.module.scss';
import {
  EnableExternalTableProps,
  EnableExternalTablePropsInterface,
} from './interfaces/enable-external-table-props.interface';

const EnableExternalTable = (props: EnableExternalTableProps) => {
  const columns: TableProps<EnableExternalTablePropsInterface>['columns'] = [
    {
      title: 'Date',
      dataIndex: 'formatedCreatedAt',
      key: 'formatedCreatedAt',
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
      render: (_, record) => (
        <Image
          src={
            record.status === 'done'
              ? '/icons/succesDone.svg'
              : '/icons/information.svg'
          }
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
        dataSource={props.dataSource}
        pagination={false}
      />
    </div>
  );
};

export default EnableExternalTable;
