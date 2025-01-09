import { useGetData } from '@/app/hooks/useGetData';
import { LogFetcherPropsInterface } from './interfaces/log-fetcher-props.interface';
import styles from './LogFetcher.module.scss';
import { useState } from 'react';
import { useParams } from 'next/navigation';

const LogFetcher = (props: LogFetcherPropsInterface) => {
  const { id } = useParams();

  const [currentPage] = useState<number>(1);

  const logsPerPage = 500;

  const selectedSetup = props.userInfo?.setup.find(
    (setup) => setup.id === Number(id),
  );

  const { data: fetchedLogs } = useGetData<string[]>({
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
      {filteredLogs && filteredLogs.length > 0 ? (
        filteredLogs.map((log, index) => (
          <span key={index} className={styles.info}>
            {`${(currentPage - 1) * logsPerPage + index + 1}. ${log}`}
          </span>
        ))
      ) : (
        <p>No logs found</p>
      )}
    </div>
  );
};

export default LogFetcher;
