import TabsAnt from '@/app/components/Tabs/Tabs';
import styles from './DigitalOcean.module.scss';
import DigitalOceanSsh from './components/DigitalOceanSsh/DigitalOceanSsh';

const DigitalOcean = () => {
  return (
    <div className={styles.mainContainer}>
      <span className={styles.mainCaptionStyle}>
        You will need to provide your SSH credentials to export your site data
        for moving it over to your Kinsta account.
      </span>
      <TabsAnt
        withoutPadding
        uniqueKey={'anotherFtp'}
        withoutBorder
        tabNames={['SSH']}
        tabContent={[<DigitalOceanSsh key="ssh" />]}
      />
    </div>
  );
};

export default DigitalOcean;
