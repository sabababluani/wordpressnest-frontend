import { TableColumnsType } from 'antd';
import Image from 'next/image';
import styles from '../page.module.scss';
import { DomainsTablePropsInterface } from '../components/interfaces/domains-table-props.interface';

export const DomainsTableColumns: TableColumnsType<DomainsTablePropsInterface> =
  [
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
