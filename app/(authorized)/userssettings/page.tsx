'use client';

import { Checkbox, Table, TableColumnsType } from 'antd';
import UsersServiceContianer from './components/UsersServiceContianer/UsersServiceContianer';
import styles from './page.module.scss';
import Image from 'next/image';
import { UserRecordPropsInterface } from './interface/table-interface';
import { usersSettingsDummy } from './usersDummy/user-dummy';

const columns: TableColumnsType<UserRecordPropsInterface> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (_: any, record: UserRecordPropsInterface) => (
      <div className={styles.checkboxAndUserWrapper}>
        <Checkbox className={styles.checkboxStyle} />
        <Image
          src={record.image}
          alt={record.name}
          width={40}
          height={40}
          className={styles.userImageStylr}
        />
        {record.name}
      </div>
    ),
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Role',
    dataIndex: 'role',
    key: 'role',
  },
  {
    title: 'Access',
    dataIndex: 'access',
    key: 'access',
    render: (text: string) => <span>{text}</span>,
  },
  {
    title: '',
    key: 'empty',
    render: (_: any, record: UserRecordPropsInterface) => (
      <div className={styles.buttonAndIconsWrapper}>
        {record.button && (
          <button
            className={styles.buttonStyle}
            onClick={() => handleButtonClick(record)}
          >
            Transfer ownership
          </button>
        )}
        {record.icon && (
          <div className={styles.iconsWrapper}>
            <Image
              src={record.icon}
              alt="Icon"
              width={24}
              height={24}
              className={styles.imageIconStyle}
              onClick={() => handleIconClick(record)}
            />
            <Image
              src={String(record.iconSecond)}
              alt="Icon"
              width={24}
              height={24}
              className={styles.imageIconStyle}
              onClick={() => handleIconClick(record)}
            />
          </div>
        )}
      </div>
    ),
  },
];

const handleButtonClick = (record: UserRecordPropsInterface) => {
  console.log('////');
};

const handleIconClick = (record: UserRecordPropsInterface) => {
  console.log('////');
};

const UsersSettings = (): JSX.Element => {
  return (
    <div className={styles.mainContainer}>
      <UsersServiceContianer />
      <div className={styles.tableWrapper}>
        <Table
          columns={columns}
          dataSource={usersSettingsDummy}
          className={styles.usersTable}
          pagination={false}
        />
      </div>
    </div>
  );
};

export default UsersSettings;