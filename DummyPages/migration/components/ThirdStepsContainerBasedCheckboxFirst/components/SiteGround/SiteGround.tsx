import TabsAnt from '@/app/components/Tabs/Tabs';
import styles from './SiteGround.module.scss';
import AddSiteGround from './components/AddSiteGround/AddSiteGround';
import SiteGroundWpEngine from './components/SiteGroundWpEngine/SiteGroundWpEngine';

const SiteGround = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.tabs}>
        <TabsAnt
          withoutBorder
          uniqueKey={'siteground'}
          tabNames={['Add Hosting to your account', 'WP Engine User Portal']}
          tabContent={[
            <AddSiteGround key={'addsiteground'} />,
            <SiteGroundWpEngine key={'sitegroundengine'} />,
          ]}
        />
      </div>
    </div>
  );
};

export default SiteGround;
