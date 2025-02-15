'use client';

import { Skeleton } from 'antd';
import styles from './page.module.scss';
import { useState } from 'react';
import { useGetData } from '@/app/hooks/useGetData';
import {
  SiteInterface,
  UserInterface,
} from '@/app/components/Navigation/interfaces/navigation.props.interface';
import { useParams } from 'next/navigation';
import InfoHeader from './components/InfoHeader/InfoHeader';
import InfoDetails from './components/InfoDetails/InfoDetails';
import { SiteModals } from './components/InfoModals/InfoModals';

//TODO database name
const Info = (): JSX.Element => {
  const { id } = useParams();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [isResetModalOpen, setIsResetModalOpen] = useState<boolean>(false);
  const [isProxyModalOpen, setIsProxyModalOpen] = useState<boolean>(false);
  const [isRenameModalOpen, setIsRenameModalOpen] = useState<boolean>(false);
  const [isLabelModalOpen, setIsLabelModalOpen] = useState<boolean>(false);
  const [isPasswordExpirationModalOpen, setIsPasswordExpirationModalOpen] =
    useState<boolean>(false);

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

  const { data: label } = useGetData<string | undefined>({
    endpoint: `wordpress/label/${id}`,
  });

  const { data: dbPassword } = useGetData<string>({
    endpoint: `wordpress/dbPassword/${id}`,
  });

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

  if (!site) return <div>Site not found</div>;

  return (
    <div className={styles.mainContainer}>
      <InfoHeader site={site} />
      <InfoDetails
        site={site}
        version={version}
        database={database}
        dbPassword={dbPassword}
        onOpenResetModal={() => setIsResetModalOpen(true)}
        onOpenDeleteModal={() => setIsDeleteModalOpen(true)}
        onOpenProxyModal={() => setIsProxyModalOpen(true)}
        onOpenRenameModal={() => setIsRenameModalOpen(true)}
        onOpenLabelModal={() => setIsLabelModalOpen(true)}
        onOpenPasswordExpirationModal={() =>
          setIsPasswordExpirationModalOpen(true)
        }
      />
      <SiteModals
        isDeleteModalOpen={isDeleteModalOpen}
        isResetModalOpen={isResetModalOpen}
        isProxyModalOpen={isProxyModalOpen}
        isRenameModalOpen={isRenameModalOpen}
        isLabelModalOpen={isLabelModalOpen}
        isPasswordExpirationModalOpen={isPasswordExpirationModalOpen}
        onCloseDeleteModal={() => setIsDeleteModalOpen(false)}
        onCloseResetModal={() => setIsResetModalOpen(false)}
        onCloseProxyModal={() => setIsProxyModalOpen(false)}
        onCloseRenameModal={() => setIsRenameModalOpen(false)}
        onCloseLabelModal={() => setIsLabelModalOpen(false)}
        onClosePasswordExpirationModal={() =>
          setIsPasswordExpirationModalOpen(false)
        }
        label={label}
      />
    </div>
  );
};

export default Info;
