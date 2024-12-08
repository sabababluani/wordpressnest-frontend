import { Table } from 'antd';
import styles from './RedirectsTable.module.scss';
import { DataType } from '@/app/(authorized)/redirects/components/interfaces/redirects-props.interface';
import { data } from '@/app/(authorized)/redirects/components/dummydata/dummydata';

const RedirectsTable = (): JSX.Element => {
  const columns = [
    {
      title: 'Redirect From',
      dataIndex: 'redirectFrom',
      key: 'redirectFrom',
    },
    {
      title: 'Redirect To',
      dataIndex: 'redirectTo',
      key: 'redirectTo',
    },
    {
      title: 'HTTP Status Code',
      dataIndex: 'httpStatusCode',
      key: 'httpStatusCode',
    },
  ];

  const rowSelection: {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => void;
  } = {
    onChange: (_selectedRowKeys, _selectedRows) => {},
  };

  return (
    <div className={styles.tableWrapper}>
      <Table<DataType>
        rowSelection={{
          type: 'checkbox',
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
        pagination={false}
      />
    </div>
  );
};

export default RedirectsTable;
