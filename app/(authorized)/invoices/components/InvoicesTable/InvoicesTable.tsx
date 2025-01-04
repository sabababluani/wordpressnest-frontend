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
import { invoiceData } from './invoices-dummy/invoices-dummy';

const InvoicesTable = () => {
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
      width: '10%',
    },
    {
      title: 'Total',
      dataIndex: 'total',
      width: '10%',
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
      width: '10%',
    },
    {
      title: 'Period',
      dataIndex: 'period',
      width: '10%',
    },
    {
      title: 'Created',
      dataIndex: 'created',
      width: '10%',
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
      width: '10%',
    },
  ];

  return (
    <>
      <div className={styles.tableWrapper}>
        <Table<InvoicesTablePropsInterface>
          rowSelection={{ type: 'checkbox' }}
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
