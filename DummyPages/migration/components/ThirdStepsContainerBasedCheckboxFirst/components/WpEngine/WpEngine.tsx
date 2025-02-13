import TabsAnt from '@/app/components/Tabs/Tabs';
import styles from './WpEngine.module.scss';
import AddHostingToYourAccount from './components/AddHostingToYourAccount/AddHostingToYourAccount';
import WpEngineUserPortal from './components/WpEngineUserPortal/WpEngineUserPortal';

const WpEngine = () => {
  return (
    <div className={styles.mainWrapper}>
      <TabsAnt
        withoutPadding
        uniqueKey={'wpengine'}
        withoutBorder
        tabNames={['Add Hosting to your account', 'WP Engine User Portal']}
        tabContent={[
          <AddHostingToYourAccount key={'addhostingtoyouraccount'} />,
          <WpEngineUserPortal key={'wpengineuserportal'} />,
        ]}
      />
    </div>
  );
};

export default WpEngine;
