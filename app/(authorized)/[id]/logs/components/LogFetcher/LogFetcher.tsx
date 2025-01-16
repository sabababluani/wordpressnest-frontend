import { useGetData } from '@/app/hooks/useGetData';
import { LogFetcherPropsInterface } from './interfaces/log-fetcher-props.interface';
import styles from './LogFetcher.module.scss';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import { Spin } from 'antd';

const LogFetcher = (props: LogFetcherPropsInterface) => {
  const { id } = useParams();

  const [currentPage] = useState(1);

  const logsPerPage = 500;

  const selectedSetup = props.userInfo?.setup.find(
    (setup) => setup.id === Number(id),
  );

  const { data: fetchedLogs, isLoading } = useGetData<string[]>({
    endpoint: `/wordpress/${selectedSetup?.nameSpace}/logs/${selectedSetup?.podName}`,
    queryParams: {
      logFile: props.logFile,
      limit: props.limit,
    },
  });

  const filteredLogs = fetchedLogs?.filter((log) =>
    log.toLowerCase().includes(props.searchQuery.toLowerCase()),
  );

  return (
    <div className={styles.container}>
      {filteredLogs && !isLoading ? (
        filteredLogs.map((log, index) => (
          <span key={index} className={styles.info}>
            {`${(currentPage - 1) * logsPerPage + index + 1}. ${log}`}
          </span>
        ))
      ) : (
        <div className={styles.spinner}>
          <Spin />
        </div>
      )}
    </div>
  );
};

export default LogFetcher;
