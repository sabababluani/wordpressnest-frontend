import TabsAnt from '@/app/components/Tabs/Tabs';
import styles from './AmazonAwsFields.module.scss';
import UsersAmazonSsh from './components/UsersAmazonSsh/UsersAmazonSsh';
import SiteAmazonSsh from './components/SiteAmazonSsh/SiteAmazonSsh';

const AmazonAwsFields = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.mainCaptionStyle}>
        You will need to provide your public SSH key used for AWS connection or
        add our key to export your site data for moving it over to your Kinsta
        account.
      </span>
      <div className={styles.tabs}>
        <TabsAnt
          withoutBorder
          uniqueKey={'amazonAws'}
          tabNames={['Your public SSH key', 'Add Kinsta public SSH key to AWS']}
          tabContent={[
            <UsersAmazonSsh key={'usersamazonssh'} />,
            <SiteAmazonSsh key={'siteamazonssh'} />,
          ]}
        />
      </div>
    </div>
  );
};

export default AmazonAwsFields;
