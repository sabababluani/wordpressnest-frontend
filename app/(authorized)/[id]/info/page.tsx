'use client';

import { Modal, Skeleton } from 'antd';
import styles from './page.module.scss';
import Button from '@/app/components/Button/Button';
import {
  buttonbackgroundColorEnum,
  innerContentIconEnum,
} from '@/app/components/Button/enum/button.enum';
import { useState } from 'react';
import { useGetData } from '@/app/hooks/useGetData';
import {
  SiteInterface,
  UserInterface,
} from '@/app/components/Navigation/interfaces/navigation.props.interface';
import { useParams } from 'next/navigation';
import BasicDetails from './components/BasicDetails/BasicDetails';
import EnvironementDetails from './components/EnvironmentDetails/EnvironmentDetails';
import SftpShh from './components/SftpShh/SftpShh';
import DataBaseAccess from './components/DatabaseAccess/DatabaseAccess';
import Site from './components/Site/Site';
import ResetSiteModal from './components/ResetSiteModal/ResetSiteModal';
import DeleteSiteModal from './components/DeleteSiteModal/DeleteSiteModal';
import Link from 'next/link';
import ProxyComp from './components/reusableComponent/Proxy/Proxy';
import ProxyModule from './components/ProxyModule/ProxyModule';
import RenameSiteModal from './components/RenameSiteModal/RenameSiteModal';
import LabelModal from '../../wpsites/components/LabelModal/LabelModal';
import PasswordExpirationModal from './components/PasswordExpirationModal/PasswordExpirationModal';

//TODO database name
const Info = (): JSX.Element => {
  const { id } = useParams();

  const {
    data: sideInformationData,
    error,
    isLoading,
  } = useGetData<UserInterface>({
    endpoint: 'user/me',
  });

  const { data: version } = useGetData<{ phpVersion: string }>({
    endpoint: `wp-cli/php/version/${id}`,
  });

  const { data: database } = useGetData<{ Name: string }>({
    endpoint: `wp-cli/db/name/${id}`,
  });

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [isResetModalOpen, setIsResetModalOpen] = useState<boolean>(false);
  const [isProxyModalOpen, setIsProxyModalOpen] = useState<boolean>(false);
  const [isRenameModalOpen, setIsRenameModalOpen] = useState<boolean>(false);
  const [isLabelModalOpen, setIsLabelModalOpen] = useState<boolean>(false);
  const [isPasswordExpirationModalOpen, setIsPasswordExpirationModalOpen] =
    useState<boolean>(false);

  if (isLoading || error) {
    return (
      <div className={styles.skeletonContainer}>
        <Skeleton active paragraph={{ rows: 16 }} />
      </div>
    );
  }

  const site = sideInformationData?.setup.find(
    (item: SiteInterface) => item.id === +id,
  );

  if (!site) {
    return <div>Site not found</div>;
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.topContainer}>
        <span className={styles.captionStyle}>Side Information</span>
        <div className={styles.buttonWrapper}>
          <Link
            replace
            target="_blank"
            href={`http://${site.wpfullIp}/wp-login.php`}
          >
            <Button
              innerContent={'Open WP Admin'}
              innerContentIconActive
              innerContentIcon={innerContentIconEnum.wpIcon}
              backgroundColor={buttonbackgroundColorEnum.grey}
            />
          </Link>
          <Link href={`http://${site.wpfullIp}`} target="_blank">
            <Button
              innerContent={'Visit Site'}
              innerContentIcon={innerContentIconEnum.siteIcon}
              innerContentIconActive
              backgroundColor={buttonbackgroundColorEnum.black}
            />
          </Link>
        </div>
      </div>

      <div className={styles.bottomContainer}>
        <BasicDetails
          onClick={() => setIsRenameModalOpen(true)}
          onClick2={() => setIsLabelModalOpen(true)}
          locationDataCenter={'Hamburg (DE)'}
          siteName={site.siteName}
          Labels={''}
        />

        <EnvironementDetails
          path={'/www/novatori_787/public'}
          environmentName={'Live'}
          siteIpAddress={site.wpfullIp}
          ipAddress={site.nodeIp}
          ipAddressForExternalConnections={'35.242.241.35'}
          phpWorkers={site.phpVersion}
          onClick={() => console.log('clicked')}
          wordpressVersion={version?.phpVersion}
        />

        <SftpShh
          host={'66.854.861.865'}
          passwordExpiration={'None'}
          ssh={'SSH Novatori@66.854.861.865...'}
          port={site.port}
          authenticationMethods={'SSH key , password'}
          IpAllowed={'ALL IPs allowed'}
          password={'********'}
          ftp={'Novatori - sftp - config.zip'}
          userName={'root'}
          onClick={() => setIsPasswordExpirationModalOpen(true)}
        />

        <DataBaseAccess
          databasePassword={'site.dbPassword'}
          ip={'ALL IPs allowed'}
          database={database?.Name}
          databaseUsername={'root'}
          phpAdmin={site.phpAdminFullIp}
        />

        <ProxyComp
          caption={'Reverse Proxy'}
          bottomCaption={
            'Reverse proxy allows serving multiple sites or applications from a single domain. At Kinsta, this is available as an add-on that our Support Team will help set up.'
          }
          onClick={() => setIsProxyModalOpen(true)}
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
        width={840}
        open={isPasswordExpirationModalOpen}
        onCancel={() => setIsPasswordExpirationModalOpen(false)}
        footer={null}
        closable={false}
      >
        <PasswordExpirationModal
          onClick={() => setIsPasswordExpirationModalOpen(false)}
        />
      </Modal>

      <Modal
        width={840}
        open={isLabelModalOpen}
        onCancel={() => setIsLabelModalOpen(false)}
        footer={null}
        closable={false}
      >
        <LabelModal
          siteName={'site.siteName'}
          onClick={() => setIsLabelModalOpen(false)}
        />
      </Modal>

      <Modal
        width={840}
        open={isRenameModalOpen}
        onCancel={() => setIsRenameModalOpen(false)}
        footer={null}
        closable={false}
      >
        <RenameSiteModal onCancel={() => setIsRenameModalOpen(false)} />
      </Modal>

      <Modal
        width={840}
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
        width={840}
        open={isResetModalOpen}
        onCancel={() => setIsResetModalOpen(false)}
        footer={null}
        closable={false}
        centered
      >
        <ResetSiteModal onClose={() => setIsResetModalOpen(false)} />
      </Modal>

      <Modal
        width={840}
        height={616}
        open={isProxyModalOpen}
        onCancel={() => setIsProxyModalOpen(false)}
        footer={null}
        closable={false}
        centered
      >
        <ProxyModule onClick={() => setIsProxyModalOpen(false)} />
      </Modal>
    </div>
  );
};

export default Info;
