import styles from './GoogleCloudFields.module.scss';
import React from 'react';
import TabsAnt from '../../../../../../components/Tabs/Tabs';
import GoogleCloud from './components/GoogleCloud/GoogleCloud';
import UsersCloudShh from './components/UsersCloudShh/UsersCloudShh';

const GoogleCloudFields = () => {
  return (
    <div className={styles.wrapper}>
      <span>
        We will need to access your{' '}
        <span className={styles.anchore}>Google Cloud account</span> or have
        your public SSH key to export your site data for moving them over to
        your Kinsta account. If you have 2-factor authentication enabled, please
        disable it now for the time of the migration.
      </span>
      <div className={styles.tabs}>
        <TabsAnt
          withoutBorder
          uniqueKey={'googleCloud'}
          tabNames={['Google Cloud account', 'Your public SSH key']}
          tabContent={[
            <GoogleCloud key={'googleCloud'} />,
            <UsersCloudShh key={'userscloudshh'} />,
          ]}
        />
      </div>
    </div>
  );
};

export default GoogleCloudFields;
