import BasicDetails from './components/BasicDetails/BasicDetails';
import DataBaseAccess from './components/DatabaseAccess/DatabaseAccess';
import EnvironementDetails from './components/EnvironmentDetails/EnvironmentDetails';
import SftpShh from './components/SftpShh/SftpShh';
import Site from './components/Site/Site';
import styles from './page.module.scss';
import Button from '@/app/components/Button/Button';
import {
  buttonbackgroundColorEnum,
  innerContentIconEnum,
} from '@/app/components/Button/enum/button.enum';

const info = (): JSX.Element => {
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
          siteName={'Novatori'}
          Labels={''}
        />

        <EnvironementDetails
          path={'/www/novatori_787/public'}
          environmentName={'Live'}
          siteIpAddress={'189.659.543.55'}
          wordpressVersion={'6.6.2'}
          ipAddress={'66.98.456.70'}
          phpWorkers={'2'}
        />

        <SftpShh
          host={'66.854.861.865'}
          passwordExpiration={'None'}
          ssh={'SSH Novatori@66.854.861.865...'}
          port={'86594'}
          authenticationMethods={'SSH key , password'}
          ipAddress={'Novatori'}
          IpAllowed={'ALL IPs allowed'}
          password={'********'}
          ftp={'Novatori - sftp - config.zip'}
        />

        <DataBaseAccess
          database={'Novatori'}
          databaseUsername={'Novatori'}
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

export default info;
