'use client';
import { Select, Pagination } from 'antd';
import styles from './page.module.scss';
import { useState } from 'react';
import Image from 'next/image';
import { dummyLogs } from './dummy-logs/dummy-logs';

const Logs = () => {
  const [selectState, setSelectState] = useState<string>('Errors.log');
  const [quantity, setQuantity] = useState<string>('1000');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const logsPerPage = 9;
  const paginatedLogs = dummyLogs.slice(
    (currentPage - 1) * logsPerPage,
    currentPage * logsPerPage,
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const onSelectChange = (value: string) => {
    setSelectState(value);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.headerWrapper}>
        <div className={styles.header}>
          <span className={styles.headline}>Log viewer</span>
          <p className={styles.text}>
            Error and access logs are useful for debugging your application and
            seeing whats going on under the hood. You can also view these logs
            via SFTP. Check out our documentation for more information.
          </p>
        </div>
        <div className={styles.selectWrapper}>
          <Select
            onChange={onSelectChange}
            className={styles.selectStyle}
            value={selectState}
            options={[
              { value: 'Errors.log', label: 'Errors.log' },
              { value: 'Access.log', label: 'Access.log' },
              {
                value: 'Hosting-cache-perf.log',
                label: 'Hosting-cache-perf.log',
              },
            ]}
          />
          <Select
            onChange={(value) => setQuantity(value)}
            className={styles.selectStyle}
            value={quantity}
            options={[
              { value: '1,000', label: '1,000' },
              { value: '2,000', label: '2,000' },
              {
                value: '3,000',
                label: '3,000',
              },
              {
                value: '4,000',
                label: '4,000',
              },
              {
                value: '5,000',
                label: '5,000',
              },
              {
                value: '7,500',
                label: '7,500',
              },
              {
                value: '10,000',
                label: '10,000',
              },
              {
                value: '15,000',
                label: '15,000',
              },
              {
                value: '20,000',
                label: '20,000',
              },
            ]}
          />
        </div>
      </div>
      <div className={styles.container}>
        {paginatedLogs.map((log, index) => (
          <span key={index} className={styles.info}>
            {log}
          </span>
        ))}
      </div>
      <div className={styles.paginationWrapper}>
        <Pagination
          className={styles.pagination}
          current={currentPage}
          pageSize={logsPerPage}
          total={dummyLogs.length}
          onChange={handlePageChange}
          showSizeChanger={false}
          showLessItems={false}
          itemRender={(page, type) => {
            if (type === 'prev') {
              return (
                <div className={styles.arrow}>
                  <Image
                    src="/icons/left.svg"
                    alt="Previous"
                    width={24}
                    height={24}
                  />
                </div>
              );
            }
            if (type === 'next') {
              return (
                <div className={styles.arrow}>
                  <Image
                    src="/icons/right.svg"
                    alt="Next"
                    width={24}
                    height={24}
                  />
                </div>
              );
            }
            return <a>{page}</a>;
          }}
        />
      </div>
    </div>
  );
};

export default Logs;
