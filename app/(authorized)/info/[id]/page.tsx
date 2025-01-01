'use client';

import { Modal, Skeleton } from 'antd';
import BasicDetails from '../components/BasicDetails/BasicDetails';
import DataBaseAccess from '../components/DatabaseAccess/DatabaseAccess';
import EnvironementDetails from '../components/EnvironmentDetails/EnvironmentDetails';
import SftpShh from '../components/SftpShh/SftpShh';
import Site from '../components/Site/Site';
import styles from './page.module.scss';
import Button from '@/app/components/Button/Button';
import {
  buttonbackgroundColorEnum,
  innerContentIconEnum,
} from '@/app/components/Button/enum/button.enum';
import { useState } from 'react';
import DeleteSiteModal from '../components/DeleteSiteModal/DeleteSiteModal';
import ResetSiteModal from '../components/ResetSiteModal/ResetSiteModal';
import { useGetData } from '@/app/hooks/useGetData';
import {
  SiteInterface,
  UserInterface,
} from '@/app/components/Navigation/interfaces/navigation.props.interface';
import { useParams } from 'next/navigation';

const Info = (): JSX.Element => {
  const { id } = useParams();
  const {
    data: sideInformationData,
    error,
    isLoading,
  } = useGetData<UserInterface>({
    endpoint: 'user/me',
  });

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [isResetModalOpen, setIsResetModalOpen] = useState<boolean>(false);

  if (isLoading || error) {
    return (
      <div className={styles.skeletonContainer}>
        <Skeleton active paragraph={{ rows: 16 }} />
      </div>
    );
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.topContainer}>
        <span className={styles.captionStyle}>Side Information</span>
        <div className={styles.buttonWrapper}>
          <Button
            innerContent={'Open WP Admin'}
            innerContentIconActive={true}
            innerContentIcon={innerContentIconEnum.wpIcon}
            backgroundColor={buttonbackgroundColorEnum.grey}
          />
          <Button
            innerContent={'Visit Site'}
            innerContentIcon={innerContentIconEnum.siteIcon}
            innerContentIconActive={true}
            backgroundColor={buttonbackgroundColorEnum.black}
          />
        </div>
      </div>

      <div className={styles.bottomContainer}>
        <BasicDetails
          locationDataCenter={'Hamburg (DE)'}
          siteName={
            sideInformationData?.setup.find(
              (item: SiteInterface) => item.id === +id,
            )?.siteName
          }
          Labels={''}
        />

        <EnvironementDetails
          path={'/www/novatori_787/public'}
          environmentName={'Live'}
          siteIpAddress={
            sideInformationData?.setup.find(
              (item: SiteInterface) => item.id === +id,
            )?.wpfullIp
          }
          ipAddress={
            sideInformationData?.setup.find(
              (item: SiteInterface) => item.id === +id,
            )?.nodeIp
          }
          phpWorkers={'2'}
          onClick={() => console.log('clicked')}
        />

        <SftpShh
          host={'66.854.861.865'}
          passwordExpiration={'None'}
          ssh={'SSH Novatori@66.854.861.865...'}
          port={
            sideInformationData?.setup.find(
              (item: SiteInterface) => item.id === +id,
            )?.port
          }
          authenticationMethods={'SSH key , password'}
          IpAllowed={'ALL IPs allowed'}
          password={'********'}
          ftp={'Novatori - sftp - config.zip'}
          userName={'root'}
        />

        <DataBaseAccess
          databasePassword={'**********'}
          ip={'ALL IPs allowed'}
          database={
            sideInformationData?.setup.find(
              (item: SiteInterface) => item.id === +id,
            )?.dbName
          }
          databaseUsername={'root'}
        />

        <Site
          mainCaption={'Reset site'}
          description={
            'Resetting a site removes all files, databases, and staging environments associated with the site, then installs WordPress again. Be careful when resetting Live sites'
          }
          buttonInnerContent={'Reset Site'}
          onDeleteClick={() => setIsResetModalOpen(true)}
        />

        <Site
          mainCaption={'Delete site'}
          buttonInnerContent={'Delete site'}
          description={
            'Deleting a site removes all files, databases, and staging environments associated with the site. Be careful when deleting Live sites.'
          }
          onDeleteClick={() => setIsDeleteModalOpen(true)}
        />
      </div>
      <Modal
        width={800}
        open={isDeleteModalOpen}
        onCancel={() => setIsDeleteModalOpen(false)}
        footer={null}
        closable={false}
      >
        <DeleteSiteModal
          onCancel={() => setIsDeleteModalOpen(false)}
          onClose={() => setIsDeleteModalOpen(false)}
        />
      </Modal>
      <Modal
        width={800}
        open={isResetModalOpen}
        onCancel={() => setIsResetModalOpen(false)}
        footer={null}
        closable={false}
        centered
      >
        <ResetSiteModal onClose={() => setIsResetModalOpen(false)} />
      </Modal>
    </div>
  );
};

export default Info;
