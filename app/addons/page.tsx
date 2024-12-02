import AddonsCard from './components/AddonsCard/AddonsCard';
import styles from './page.module.scss';

const Addons = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.headline}>Add-ons</span>
      </div>
      <div className={styles.container}>
        <AddonsCard
          title={'Additional disk space'}
          text={
            'Create environments that match the resources of your live site. This add-on is ideal for testing and development of resource-intensive sites such as ecommerce shops'
          }
          price={'20 USD / month'}
          add={'Add to plan'}
        />
        <AddonsCard
          title={'Premium Staging Environments'}
          text={
            'Create environments that match the resources of your live site. This add-on is ideal for testing and development of resource-intensive sites such as ecommerce shops'
          }
          price={'20 USD / month'}
          add={'Add to plan'}
        />
        <AddonsCard
          title={'PHP memory'}
          text={
            'Create environments that match the resources of your live site. This add-on is ideal for testing and development of resource-intensive sites such as ecommerce shops'
          }
          price={'50 USD / month'}
          add={'Add to plan'}
        />
        <AddonsCard
          title={'Redis chaching'}
          text={
            'Create environments that match the resources of your live site. This add-on is ideal for testing and development of resource-intensive sites such as ecommerce shops'
          }
          price={'50 USD / month'}
          add={'Add to plan'}
        />
        <AddonsCard
          title={'Redis chaching'}
          text={
            'Create environments that match the resources of your live site. This add-on is ideal for testing and development of resource-intensive sites such as ecommerce shops'
          }
          price={'50 USD / month'}
          add={'Add to plan'}
        />
        <AddonsCard
          title={'Hourly backups'}
          text={
            'Create environments that match the resources of your live site. This add-on is ideal for testing and development of resource-intensive sites such as ecommerce shops'
          }
          price={'50 USD / month'}
          add={'Add to plan'}
        />
        <AddonsCard
          title={'Hourly backups'}
          text={
            'Create environments that match the resources of your live site. This add-on is ideal for testing and development of resource-intensive sites such as ecommerce shops'
          }
          price={'2 USD / month'}
          add={'Add to plan'}
        />
      </div>
    </div>
  );
};

export default Addons;