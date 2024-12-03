'use client';

import { useState } from 'react';
import useSWR from 'swr';
import { useParams } from 'next/navigation';
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
import {
  DatabaseNamePropsInterface,
  portPropsInterface,
  SiteNamePropsInterface,
  UserNamePropsIterface,
  wordPressLastUpdateVersionPropsInterface,
  wordPressVersionPropsInterface,
} from '../interfaces/info-props.interface';
import BaseApi from '../../api/BaseApi';

const Info = (): JSX.Element => {
  const { id } = useParams();
  const indexNumber = +id - 1;

  const [updateWpVersionData, setUpdateVersionData] = useState<
    wordPressLastUpdateVersionPropsInterface | undefined
  >({
    id: 0,
    version: '',
    locale: '',
    update: '',
    url: '',
    message: '',
  });

  const fetcher = (url: string) => BaseApi.get(url).then((res) => res.data);

  const { data: siteName, error: siteNameError } = useSWR<
    SiteNamePropsInterface[]
  >(`/setup/sitetitle`, fetcher);
  const { data: wordpressVersion, error: wordpressVersionError } =
    useSWR<wordPressVersionPropsInterface>('/wp-cli/core/version', fetcher);
  const { data: port, error: portError } = useSWR<portPropsInterface[]>(
    `/setup/wordpress/port`,
    fetcher
  );
  const { data: username, error: usernameError } = useSWR<
    UserNamePropsIterface[]
  >(`/setup/wordpress/username`, fetcher);
  const { data: database, error: databaseError } = useSWR<
    DatabaseNamePropsInterface[]
  >(`/wp-cli/db/size/?setupId=${id}`, fetcher);

  const onUpdateWpVersionClick = () => {
    BaseApi.get(`/wp-cli/wpcore/check-update/?setupId=${id}`).then((res) =>
      setUpdateVersionData(res.data)
    );
  };

  if (!siteName) return <div>Loading...</div>;
  if (siteNameError) return <div>Error loading data...</div>;

  if (!wordpressVersion) return <div>Loading...</div>;
  if (wordpressVersionError) return <div>Error loading data...</div>;

  if (!port) return <div>Loading...</div>;
  if (portError) return <div>Error loading data...</div>;

  if (!username) return <div>Loading...</div>;
  // if (usernameError) return <div>Error loading data...</div>;

  if (!database) return <div>Loading...</div>;
  // if (databaseError) return <div>Error loading data...</div>;

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
          siteName={siteName[indexNumber]?.siteTitle}
          Labels={''}
        />

        <EnvironementDetails
          path={'/www/novatori_787/public'}
          environmentName={'Live'}
          siteIpAddress={'189.659.543.55'}
          wordpressVersion={
            updateWpVersionData?.version || wordpressVersion.version
          }
          ipAddress={'66.98.456.70'}
          phpWorkers={'2'}
          onClick={onUpdateWpVersionClick}
        />

        <SftpShh
          host={'66.854.861.865'}
          passwordExpiration={'None'}
          ssh={'SSH Novatori@66.854.861.865...'}
          port={port[indexNumber]?.instancePort}
          authenticationMethods={'SSH key , password'}
          userName={username[indexNumber]?.wpAdminUser}
          IpAllowed={'ALL IPs allowed'}
          password={'********'}
          ftp={'Novatori - sftp - config.zip'}
        />

        <DataBaseAccess
          database={database[indexNumber]?.Name}
          databaseUsername={username[indexNumber].wpAdminUser}
          databasePassword={'**********'}
          ip={'ALL IPs allowed'}
        />

        <Site
          mainCaption={'Reset site'}
          description={
            'Resetting a site removes all files, databases, and staging environments associated with the site, then installs WordPress again. Be careful when resetting Live sites'
          }
          buttonInnerContent={'Reset Site'}
        />

        <Site
          mainCaption={'Delete site'}
          buttonInnerContent={'Delete site'}
          description={
            'Deleting a site removes all files, databases, and staging environments associated with the site. Be careful when deleting Live sites.'
          }
        />
      </div>
    </div>
  );
};

export default Info;
