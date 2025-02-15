'use client';

import BasicDetails from '../BasicDetails/BasicDetails';
import DataBaseAccess from '../DatabaseAccess/DatabaseAccess';
import EnvironementDetails from '../EnvironmentDetails/EnvironmentDetails';
import ProxyComp from '../reusableComponent/Proxy/Proxy';
import SftpShh from '../SftpShh/SftpShh';
import Site from '../Site/Site';
import styles from './InfoDetails.module.scss';
import { InfoDetailsPropsInterface } from './interfaces/info-details-props.interface';

const InfoDetails = (props: InfoDetailsPropsInterface) => (
  <div className={styles.bottomContainer}>
    <BasicDetails
      onClick={props.onOpenRenameModal}
      onClick2={props.onOpenLabelModal}
      siteName={props.site.siteName}
      locationDataCenter="Hamburg (DE)"
      Labels={''}
    />

    <EnvironementDetails
      path="/www/novatori_787/public"
      environmentName="Live"
      siteIpAddress={props.site.wpfullIp}
      ipAddress={props.site.nodeIp}
      ipAddressForExternalConnections="35.242.241.35"
      phpWorkers={props.site.phpVersion}
      wordpressVersion={props.version?.phpVersion}
      onClick={() => console.log('clicked')}
    />

    <SftpShh
      host="66.854.861.865"
      passwordExpiration="None"
      ssh="SSH Novatori@66.854.861.865..."
      port={props.site.port}
      authenticationMethods="SSH key , password"
      IpAllowed="ALL IPs allowed"
      password="********"
      ftp="Novatori - sftp - config.zip"
      userName="root"
      onClick={props.onOpenPasswordExpirationModal}
    />

    <DataBaseAccess
      databasePassword={props.dbPassword}
      ip="ALL IPs allowed"
      database={props.database?.Name}
      databaseUsername="root"
      phpAdmin={props.site.phpAdminFullIp}
    />

    <ProxyComp
      caption="Reverse Proxy"
      bottomCaption="Reverse proxy allows serving multiple sites or applications from a single domain..."
      onClick={props.onOpenProxyModal}
    />

    <Site
      mainCaption="Reset site"
      description="Resetting a site removes all files, databases, and staging environments associated with the site, then installs WordPress again. Be careful when resetting Live sites"
      buttonInnerContent="Reset Site"
      onDeleteClick={props.onOpenResetModal}
    />

    <Site
      mainCaption="Delete site"
      buttonInnerContent="Delete site"
      description="Deleting a site removes all files, databases, and staging environments associated with the site. Be careful when deleting Live sites."
      onDeleteClick={props.onOpenDeleteModal}
    />
  </div>
);

export default InfoDetails;
