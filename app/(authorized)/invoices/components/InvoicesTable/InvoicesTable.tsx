'use client';

import { Modal, Table } from 'antd';
import type { TableColumnsType } from 'antd';
import React, { useState } from 'react';
import styles from './InvoicesTable.module.scss';
// import BaseApi from '@/app/api/BaseApi';
// import useSWR from 'swr';
import { InvoicesTablePropsInterface } from './interfaces/invoicesTable.props.interface';
import Image from 'next/image';
import InvoicesModal from '../InvoicesModal/InvoicesModal';

const invoiceData: InvoicesTablePropsInterface[] = [
  {
    key: 1,
    invoiceNumber: 'Invoice #007',
    serviceType: 'Wordpress',
    total: '35 USD',
    status: 'Paid',
    timing: 'Nov 25, 2024',
    period: 'Monthly',
    pdf: 'Download',
  },
  {
    key: 2,
    invoiceNumber: 'Invoice #008',
    serviceType: 'Wordpress',
    total: '35 USD',
    status: 'Unpaid',
    timing: 'Nov 26, 2024',
    period: 'Monthly',
    pdf: 'Download',
  },
  {
    key: 3,
    invoiceNumber: 'Invoice #009',
    serviceType: 'Wordpress',
    total: '35 USD',
    status: 'Paid',
    timing: 'Nov 27, 2024',
    period: 'Monthly',
    pdf: 'Download',
  },
];

const InvoicesTable: React.FC = () => {
  const [selectionType] = useState<'checkbox'>('checkbox');
  const [isActive, setIsActive] = useState(false);
  // const fetcher = (url: string) =>
  //   BaseApi.get(url).then((response) => {
  //     return response.data;
  //   });

  // const { data: tableData } = useSWR<InvoicesTablePropsInterface[]>(
  //   '/setup/wordpress',
  //   fetcher
  // );
  const columns: TableColumnsType<InvoicesTablePropsInterface> = [
    {
      title: 'Invoice Number',
      dataIndex: 'invoiceNumber',
      className: 'no-left-border',
    },
    {
      title: 'Service Type',
      dataIndex: 'serviceType',
    },
    {
      title: 'Total',
      dataIndex: 'total',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (status: string) => (
        <div
          className={
            status === 'Paid'
              ? styles.paidStatus
              : status === 'Unpaid'
                ? styles.unpaidStatus
                : ''
          }
        >
          {status === 'Paid' ? (
            <Image src="/icons/check.svg" alt="check" width={16} height={16} />
          ) : (
            <Image
              src="/icons/uncheck.svg"
              alt="check"
              width={12}
              height={12}
            />
          )}
          <span
            className={
              status === 'Paid'
                ? styles.paidStatusText
                : status === 'Unpaid'
                  ? styles.unpaidStatusText
                  : ''
            }
          >
            {status}
          </span>
        </div>
      ),
    },
    {
      title: 'Period',
      dataIndex: 'period',
    },
    {
      title: 'PDF',
      dataIndex: 'pdf',
      // record: InvoicesTablePropsInterface dasamatebelia
      render: (_: unknown) => (
        <div className={styles.pdf}>
          <Image
            src="/icons/document.svg"
            alt="Document Icon"
            width={20}
            height={20}
            style={{ cursor: 'pointer' }}
            onClick={() => setIsActive(true)}
          />
          <Image
            src="/icons/download.svg"
            alt="Download Icon"
            width={20}
            height={20}
            style={{ cursor: 'pointer' }}
          />
        </div>
      ),
    },
  ];

  return (
    <>
      <div className={styles.tableWrapper}>
        <Table<InvoicesTablePropsInterface>
          rowSelection={{ type: selectionType }}
          columns={columns}
          dataSource={invoiceData}
          pagination={false}
          scroll={{ x: 'max-content' }}
        />
      </div>
      <Modal
        width={800}
        centered
        open={isActive}
        onCancel={() => setIsActive(false)}
        footer={null}
        closable={false}
      >
        <InvoicesModal onClose={() => setIsActive(false)} />
      </Modal>
    </>
  );
};

export default InvoicesTable;
