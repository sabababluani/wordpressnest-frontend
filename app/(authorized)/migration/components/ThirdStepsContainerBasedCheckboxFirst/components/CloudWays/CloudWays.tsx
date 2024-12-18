import TabsAnt from '@/app/components/Tabs/Tabs';
import styles from './CloudWays.module.scss';
import AddUsWithThisEmailAddress from './AddUsWithThisEmailAddress/AddUsWithThisEmailAddress';
import AddKinstaPublicSshKeyToAws from './AddKinstaPublicSshKeyToAws/AddKinstaPublicSshKeyToAws';

const CloudWays = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.tabs}>
        <TabsAnt
          withoutBorder
          uniqueKey={'ftpsftpssh'}
          tabNames={[
            'Add us with this email address',
            'Add Kinsta public SSH key to AWS',
          ]}
          tabContent={[
            <AddUsWithThisEmailAddress key="adduswiththisemailaddress" />,
            <AddKinstaPublicSshKeyToAws key="addkinstapublicsshkeytoaws" />,
          ]}
        />
      </div>
    </div>
  );
};

export default CloudWays;
