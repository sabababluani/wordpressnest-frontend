'use client';

import { Table } from 'antd';
import type { TableColumnsType } from 'antd';
import React, { useState, useEffect } from 'react';
import styles from './DashboardTable.module.scss';
import { DashboardTablePropsInterface } from './interfaces/dashboard-table-props.interface';
import { useGetData } from '@/app/hooks/useGetData';
import BaseApi from '@/app/api/BaseApi';

const columns: TableColumnsType<DashboardTablePropsInterface> = [
  {
    title: 'Name ',
    dataIndex: 'siteTitle',
    className: 'no-left-border',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    render: (status: string) => {
      const displayStatus = status === 'success' ? 'Active' : 'Inactive';

      return (
        <div
          className={
            status === 'success' ? styles.activeStatus : styles.inactiveStatus
          }
        >
          <span
            className={status === 'success' ? styles.greenDot : styles.redDot}
          ></span>
          <span className={styles.status}>{displayStatus}</span>
        </div>
      );
    },
  },
  {
    title: 'Visit',
    dataIndex: 'visit',
    render: (visit: number) => {
      return visit || 0;
    },
  },
  {
    title: 'Bandwidth',
    dataIndex: 'bandwidth',
  },
  {
    title: 'Disk Usage',
    dataIndex: 'totalDiskUsed',
  },
  {
    title: 'PHP',
    dataIndex: 'phpVersion',
  },
  {
    title: 'WP version',
    dataIndex: 'wpVersion',
  },
];

const fetchMaintenanceStatus = async (id: number) => {
  const response = await BaseApi.get(`/wp-cli/maintenance/status/${id}`);
  return response.data.status;
};

const fetchBandwidth = async (namespace: string, podName: string) => {
  const response = await BaseApi.get(
    `wordpress/metrics/${namespace}/${podName}/`,
  );
  return response.data.bandwidth;
};

const fetchDiskUsage = async (namespace: string, podName: string) => {
  const response = await BaseApi.get(
    `wordpress/metrics/${namespace}/${podName}/`,
  );
  return response.data.totalDiskUsed;
};

const DashboardTable = () => {
  const [selectionType] = useState<'checkbox'>('checkbox');
  const [mergedData, setMergedData] = useState<DashboardTablePropsInterface[]>(
    [],
  );

  const { data: tableData } = useGetData<DashboardTablePropsInterface>({
    endpoint: 'user/me',
  });

  useEffect(() => {
    const fetchData = async () => {
      if (!tableData?.setup) return;

      const requests = tableData.setup.map(async (item) => {
        const id = Number(item.id);
        const status = await fetchMaintenanceStatus(id);
        const bandwidth = await fetchBandwidth(item.nameSpace, item.podName);
        const diskUsage = await fetchDiskUsage(item.nameSpace, item.podName);

        return {
          ...item,
          status,
          bandwidth,
          totalDiskUsed: diskUsage,
        };
      });

      const results = await Promise.all(requests);

      setMergedData(results);
    };

    fetchData();
  }, [tableData]);

  return (
    <div className={styles.tableWrapper}>
      <Table<DashboardTablePropsInterface>
        rowSelection={{ type: selectionType }}
        columns={columns}
        dataSource={mergedData}
        pagination={false}
        scroll={{ x: 'max-content' }}
      />
    </div>
  );
};

export default DashboardTable;
