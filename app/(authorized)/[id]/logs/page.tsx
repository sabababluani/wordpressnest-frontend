'use client';
import { Select } from 'antd';
import styles from './page.module.scss';
import { useState } from 'react';
import Image from 'next/image';
import { useGetData } from '@/app/hooks/useGetData';
import { UserInterface } from '@/app/components/Navigation/interfaces/navigation.props.interface';
import LogFetcher from './components/LogFetcher/LogFetcher';

const Logs = () => {
  const [infoLogs] = useState<string[]>([]);
  const [selectState, setSelectState] = useState<string>('error.log');
  const [quantity, setQuantity] = useState<string>('1000');
  const [, setCurrentPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const { data: userInfo } = useGetData<UserInterface>({
    endpoint: 'user/me/',
  });

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
              { value: 'error.log', label: 'error.log' },
              { value: 'access.log', label: 'access.log' },
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
              { value: '1000', label: '1000 Logs' },
              { value: '2000', label: '2000 Logs' },
              { value: '3000', label: '3000 Logs' },
              { value: '4000', label: '4000 Logs' },
              { value: '5000', label: '5000 Logs' },
              { value: '7500', label: '7500 Logs' },
              { value: '10000', label: '10000 Logs' },
              { value: '15000', label: '15000 Logs' },
              { value: '20000', label: '20000 Logs' },
            ]}
          />
          <div className={styles.searchWrapper}>
            <input
              type="text"
              placeholder="Search logs"
              className={styles.search}
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
            />
            <Image
              src="/icons/search.svg"
              alt="Search"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
      {userInfo && (
        <LogFetcher
          userInfo={userInfo}
          logFile={selectState}
          limit={quantity}
          infoLogs={infoLogs}
          searchQuery={searchQuery}
        />
      )}
    </div>
  );
};

export default Logs;
