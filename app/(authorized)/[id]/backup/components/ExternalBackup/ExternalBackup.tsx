'use client';

import React, { useState } from 'react';
import { Skeleton, Modal } from 'antd';
import { useParams } from 'next/navigation';
import styles from './ExternalBackup.module.scss';
import ExternalBackupBox from './components/ExternalBackupBox/ExternalBackupBox';
import EnableExternalModal from './components/EnableExternalModal/EnableExternalModal';
import DisableExternalModal from './components/DisableExternalModal/DisableExternalModal';
import EnableExternalTable from './components/EnableExternalModal/components/EnableExternalTable/EnableExternalTable';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { MODAL_TYPE } from './enums/extenral-backup.enum';
import ExternalChangePlanModal from './components/ExternalChangePlanModal/ExternalChangePlanModal';
import { useGetData } from '@/app/hooks/useGetData';
import { EnableExternalTablePropsInterface } from './components/EnableExternalModal/components/EnableExternalTable/interfaces/enable-external-table-props.interface';
import { patchData } from '@/app/api/crudService';

const ExternalBackup = () => {
  const { id } = useParams();
  const numberId = Number(id);

  const [activeService, setActiveService] = useState<number | null>(null);
  const [activeModal, setActiveModal] = useState<MODAL_TYPE | null>(null);

  const openModal = (type: MODAL_TYPE) => setActiveModal(type);
  const closeModal = () => {
    setActiveModal(null);
    setActiveService(null);
  };

  const handleServiceSelect = (serviceId: number) => {
    setActiveService(serviceId);
    if (serviceId === 1) openModal(MODAL_TYPE.ENABLE_BACKUP);
  };

  const { data, isLoading, mutate } = useGetData<
    EnableExternalTablePropsInterface[]
  >({
    endpoint: `backup/external/${id}`,
  });

  const { data: disabled, mutate: disableMutate } = useGetData<boolean>({
    endpoint: `backup/isexternaldisabled/${id}`,
  });

  const onExternalModalDisable = async () => {
    try {
      await patchData(`backup/disableexternals`, numberId, {});
      setActiveModal(null);
      mutate();
      disableMutate();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.wrapper}>
      {isLoading ? (
        <Skeleton active paragraph={{ rows: 8 }} />
      ) : (
        <>
          {(!data?.length || disabled) && (
            <>
              <div className={styles.header}>
                <h1>External Backup</h1>
                <p>You can set backups every 6-hours or every hour.</p>
              </div>
              <div className={styles.container}>
                <ExternalBackupBox
                  id={1}
                  image="/aws.svg"
                  hours=""
                  price="2 USD / site / month"
                  description="Create and upload a backup (files, database, or both) to your own Amazon S3 account once a week or month."
                  isActive={activeService === 1}
                  onClick={() => handleServiceSelect(1)}
                  title="Amazon S3"
                />
              </div>
            </>
          )}

          {data && data.length > 0 && (
            <div className={styles.tableWrapper}>
              {!disabled && (
                <div className={styles.tableContainer}>
                  <div className={styles.header}>
                    <h1>External Backup</h1>
                    <p>You can set backups every 6-hours or every hour.</p>
                  </div>
                  <div className={styles.buttons}>
                    <span className={styles.headingSpan}>AWS - Weekly</span>
                    <Button
                      backgroundColor={buttonbackgroundColorEnum.grey}
                      innerContent="Change Plan"
                      onClick={() => openModal(MODAL_TYPE.CHANGE_PLAN)}
                    />
                    <Button
                      backgroundColor={buttonbackgroundColorEnum.grey}
                      innerContent="Disable"
                      onClick={() => openModal(MODAL_TYPE.DISABLE_BACKUP)}
                    />
                  </div>
                </div>
              )}
              <EnableExternalTable dataSource={data!} />
            </div>
          )}
        </>
      )}

      {activeModal === MODAL_TYPE.ENABLE_BACKUP && (
        <Modal
          width={840}
          open
          onCancel={closeModal}
          footer={null}
          closable={false}
          centered
        >
          <EnableExternalModal
            onClose={closeModal}
            mutate={mutate}
            enableBackup={() => {
              disableMutate();
              setActiveService(null);
            }}
          />
        </Modal>
      )}

      {activeModal === MODAL_TYPE.DISABLE_BACKUP && (
        <Modal
          width={840}
          open
          onCancel={closeModal}
          footer={null}
          closable={false}
        >
          <DisableExternalModal
            onClose={closeModal}
            onSuccess={onExternalModalDisable}
          />
        </Modal>
      )}
      {activeModal === MODAL_TYPE.CHANGE_PLAN && (
        <Modal
          width={1000}
          open
          onCancel={closeModal}
          footer={null}
          closable={false}
        >
          <ExternalChangePlanModal onClose={closeModal} />
        </Modal>
      )}
    </div>
  );
};

export default ExternalBackup;
