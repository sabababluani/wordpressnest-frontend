'use client';
import React, { useState } from 'react';
import Button from '@/app/components/Button/Button';
import styles from './DownloadBackup.module.scss';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import Image from 'next/image';
import { Table, TableColumnsType } from 'antd';
import { DownloadBackupPropsInterface } from './interfaces/download-backup-props.interface';
import { useGetData } from '@/app/hooks/useGetData';
import { useParams } from 'next/navigation';
import { createData } from '@/app/api/crudService';
import { useNotification } from '@/app/contexts/NotificationContext';

const DownloadBackup = () => {
  const { id } = useParams();

  const [showBelowContainer, setShowBelowContainer] = useState(false);
  const [loading, setLoading] = useState(false);
  const { showNotification } = useNotification();

  const onDownloadBackupAdd = async () => {
    setLoading(true);
    setShowBelowContainer(true);
    try {
      await createData(`backup/downloadablebackup/${id}`, {});
      showNotification('Backup download created successfully!', 'success');
      mutate();
    } catch (error) {
      showNotification('Failed to create backup.', 'error');
    } finally {
      setLoading(false);
      setShowBelowContainer(false);
    }
  };

  const { data, isLoading, mutate } = useGetData<
    DownloadBackupPropsInterface[]
  >({
    endpoint: `/backup/downloadable/${id}`,
  });

  const handleCopyLink = (url: string) => {
    navigator.clipboard
      .writeText(url)
      .then(() => showNotification('Link copied to clipboard!', 'success'))
      .catch(() =>
        showNotification('Failed to copy link to clipboard.', 'error'),
      );
  };

  const handleDownload = (url: string) => {
    window.open(url, '_blank');
  };

  const columns: TableColumnsType<DownloadBackupPropsInterface> = [
    {
      title: 'Created',
      dataIndex: 'formatedCreatedAt',
      key: 'formatedCreatedAt',
      width: '40%',
    },
    {
      title: 'Expiry',
      dataIndex: 'expiry',
      key: 'expiry',
      width: '40%',
    },
    {
      title: 'Link',
      dataIndex: 's3ZippedUrl',
      key: 's3ZippedUrl',
      render: (url: string) => (
        <div className={styles.imgWrapper}>
          <Image
            src={'/icons/copylink.svg'}
            width={24}
            height={24}
            alt="copylink"
            onClick={() => handleCopyLink(url)}
            style={{ cursor: 'pointer' }}
          />
        </div>
      ),
      width: '20%',
    },
    {
      title: 'Download',
      dataIndex: 's3ZippedUrl',
      key: 'download',
      render: (url: string) => (
        <div className={styles.button}>
          <Button
            backgroundColor={buttonbackgroundColorEnum.grey}
            innerContent="Download"
            onClick={() => handleDownload(url)}
          />
        </div>
      ),
      width: '20%',
    },
  ];

  return (
    <div className={styles.wholeWrapper}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.download}>
            <h1>Download backups</h1>
            <span>
              Create a downloadable archive file containing your entire website,
              once per week. The downloadable backup will be available for you
              to download for 24 hours.
            </span>
          </div>
          <Button
            backgroundColor={buttonbackgroundColorEnum.black}
            innerContent="Create Backup now"
            onClick={onDownloadBackupAdd}
            loading={loading}
            setLoading={setLoading}
          />
        </div>
      </div>

      {showBelowContainer ? (
        <div className={styles.belowContainer}>
          <Image
            src="/icons/loading.svg"
            alt="Loading..."
            width={48}
            height={48}
            className={styles.spinningIcon}
          />
          <p>We are creating the backup</p>
          <span>
            This may take several minutes depending on the size of your site. We
            will send you an email as soon as the backup is ready for you to
            download.
          </span>
        </div>
      ) : (
        <div className={styles.tableWrapper}>
          <Table<DownloadBackupPropsInterface>
            columns={columns}
            dataSource={data}
            pagination={false}
            loading={isLoading}
            locale={{ emptyText: 'Downloadable backups will appear here.' }}
          />
        </div>
      )}
    </div>
  );
};

export default DownloadBackup;
