'use client';
import { Select, Pagination } from 'antd';
import styles from './page.module.scss';
import { useState } from 'react';
import Image from 'next/image';

const Logs = () => {
  const [selectState, setSelectState] = useState<string>('Errors.log');
  const [quantity, setQuantity] = useState<string>('1000');
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Hardcoded 100 dummy log entries
  const dummyLogs = [
    '/wp-content/uploads/2024/14/banner3-1',
    '/wp-content/uploads/2024/14/banner3-2',
    '/wp-content/uploads/2024/14/banner3-3',
    '/wp-content/uploads/2024/14/banner3-4',
    '/wp-content/uploads/2024/14/banner3-5',
    '/wp-content/uploads/2024/14/banner3-6',
    '/wp-content/uploads/2024/14/banner3-7',
    '/wp-content/uploads/2024/14/banner3-8',
    '/wp-content/uploads/2024/14/banner3-9',
    '/wp-content/uploads/2024/14/banner3-10',
    '/wp-content/uploads/2024/14/banner3-11',
    '/wp-content/uploads/2024/14/banner3-12',
    '/wp-content/uploads/2024/14/banner3-13',
    '/wp-content/uploads/2024/14/banner3-14',
    '/wp-content/uploads/2024/14/banner3-15',
    '/wp-content/uploads/2024/14/banner3-16',
    '/wp-content/uploads/2024/14/banner3-17',
    '/wp-content/uploads/2024/14/banner3-18',
    '/wp-content/uploads/2024/14/banner3-19',
    '/wp-content/uploads/2024/14/banner3-20',
    '/wp-content/uploads/2024/14/banner3-21',
    '/wp-content/uploads/2024/14/banner3-22',
    '/wp-content/uploads/2024/14/banner3-23',
    '/wp-content/uploads/2024/14/banner3-24',
    '/wp-content/uploads/2024/14/banner3-25',
    '/wp-content/uploads/2024/14/banner3-26',
    '/wp-content/uploads/2024/14/banner3-27',
    '/wp-content/uploads/2024/14/banner3-28',
    '/wp-content/uploads/2024/14/banner3-29',
    '/wp-content/uploads/2024/14/banner3-30',
    '/wp-content/uploads/2024/14/banner3-31',
    '/wp-content/uploads/2024/14/banner3-32',
    '/wp-content/uploads/2024/14/banner3-33',
    '/wp-content/uploads/2024/14/banner3-34',
    '/wp-content/uploads/2024/14/banner3-35',
    '/wp-content/uploads/2024/14/banner3-36',
    '/wp-content/uploads/2024/14/banner3-37',
    '/wp-content/uploads/2024/14/banner3-38',
    '/wp-content/uploads/2024/14/banner3-39',
    '/wp-content/uploads/2024/14/banner3-40',
    '/wp-content/uploads/2024/14/banner3-41',
    '/wp-content/uploads/2024/14/banner3-42',
    '/wp-content/uploads/2024/14/banner3-43',
    '/wp-content/uploads/2024/14/banner3-44',
    '/wp-content/uploads/2024/14/banner3-45',
    '/wp-content/uploads/2024/14/banner3-46',
    '/wp-content/uploads/2024/14/banner3-47',
    '/wp-content/uploads/2024/14/banner3-48',
    '/wp-content/uploads/2024/14/banner3-49',
    '/wp-content/uploads/2024/14/banner3-50',
    '/wp-content/uploads/2024/14/banner3-51',
    '/wp-content/uploads/2024/14/banner3-52',
    '/wp-content/uploads/2024/14/banner3-53',
    '/wp-content/uploads/2024/14/banner3-54',
    '/wp-content/uploads/2024/14/banner3-55',
    '/wp-content/uploads/2024/14/banner3-56',
    '/wp-content/uploads/2024/14/banner3-57',
    '/wp-content/uploads/2024/14/banner3-58',
    '/wp-content/uploads/2024/14/banner3-59',
    '/wp-content/uploads/2024/14/banner3-60',
    '/wp-content/uploads/2024/14/banner3-61',
    '/wp-content/uploads/2024/14/banner3-62',
    '/wp-content/uploads/2024/14/banner3-63',
    '/wp-content/uploads/2024/14/banner3-64',
    '/wp-content/uploads/2024/14/banner3-65',
    '/wp-content/uploads/2024/14/banner3-66',
    '/wp-content/uploads/2024/14/banner3-67',
    '/wp-content/uploads/2024/14/banner3-68',
    '/wp-content/uploads/2024/14/banner3-69',
    '/wp-content/uploads/2024/14/banner3-70',
    '/wp-content/uploads/2024/14/banner3-71',
    '/wp-content/uploads/2024/14/banner3-72',
    '/wp-content/uploads/2024/14/banner3-73',
    '/wp-content/uploads/2024/14/banner3-74',
    '/wp-content/uploads/2024/14/banner3-75',
    '/wp-content/uploads/2024/14/banner3-76',
    '/wp-content/uploads/2024/14/banner3-77',
    '/wp-content/uploads/2024/14/banner3-78',
    '/wp-content/uploads/2024/14/banner3-79',
    '/wp-content/uploads/2024/14/banner3-80',
    '/wp-content/uploads/2024/14/banner3-81',
    '/wp-content/uploads/2024/14/banner3-82',
    '/wp-content/uploads/2024/14/banner3-83',
    '/wp-content/uploads/2024/14/banner3-84',
    '/wp-content/uploads/2024/14/banner3-85',
    '/wp-content/uploads/2024/14/banner3-86',
    '/wp-content/uploads/2024/14/banner3-87',
    '/wp-content/uploads/2024/14/banner3-88',
    '/wp-content/uploads/2024/14/banner3-89',
    '/wp-content/uploads/2024/14/banner3-90',
    '/wp-content/uploads/2024/14/banner3-91',
    '/wp-content/uploads/2024/14/banner3-92',
    '/wp-content/uploads/2024/14/banner3-93',
    '/wp-content/uploads/2024/14/banner3-94',
    '/wp-content/uploads/2024/14/banner3-95',
    '/wp-content/uploads/2024/14/banner3-96',
    '/wp-content/uploads/2024/14/banner3-97',
    '/wp-content/uploads/2024/14/banner3-98',
    '/wp-content/uploads/2024/14/banner3-99',
    '/wp-content/uploads/2024/14/banner3-100',
  ];

  const logsPerPage = 9;
  const paginatedLogs = dummyLogs.slice(
    (currentPage - 1) * logsPerPage,
    currentPage * logsPerPage
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
