// 'use client';

// import { useState } from 'react';
// import AddonsCard from './components/AddonsCard/AddonsCard';
// import styles from './page.module.scss';
// import { Modal } from 'antd';
// import DiskSpaceModal from '@/app/components/DiskSpaceModal/DiskSpaceModal';

// const Addons = () => {
//   const [isActive, setIsActive] = useState<boolean>(false);

//   return (
//     <>
//       <div className={styles.wrapper}>
//         <div className={styles.header}>
//           <span className={styles.headline}>Add-ons</span>
//         </div>
//         <div className={styles.container}>
//           <AddonsCard
//             title={'Additional disk space'}
//             text={
//               'Create environments that match the resources of your live site. This add-on is ideal for testing and development of resource-intensive sites such as ecommerce shops'
//             }
//             price={'20 USD / month'}
//             add={'Add to plan'}
//             onClick={() => setIsActive(true)}
//           />
//           <AddonsCard
//             title={'Premium Staging Environments'}
//             text={
//               'Create environments that match the resources of your live site. This add-on is ideal for testing and development of resource-intensive sites such as ecommerce shops'
//             }
//             price={'20 USD / month'}
//             add={'Create new invironment'}
//           />
//           <AddonsCard
//             title={'PHP memory'}
//             text={
//               'The default PHP memory limit on Starter. pro and busness plans is 256 MB, which is enough for most Wordpress sites. for resource-intensive, use this add-on to increase the limit to 512 MB.'
//             }
//             price={'50 USD / month'}
//             add={'Add to plan'}
//           />
//           <AddonsCard
//             title={'Redis chaching'}
//             text={
//               'Reverse proxy allows serving multiple sites or applications from a single domain. At hosting, this is available as an add-on that our Supports Team will help set up'
//             }
//             price={'50 USD / month'}
//             add={'Add to plan'}
//           />
//           <AddonsCard
//             title={'Redis chaching'}
//             text={
//               'Redis can reduce the load on a website’s MySQL database, decreasing response time and increasing the site’s ability to handle additional traffic'
//             }
//             price={'50 USD / month'}
//             add={'Add to plan'}
//           />
//           <AddonsCard
//             title={'Hourly backups'}
//             text={
//               'Back up your site every 6 hours on hourly for more granular restore points than the default daily backup. Each backup is available for 24 hours. This add-on is ideal for sites that change often.'
//             }
//             price={'50 USD / month'}
//             add={'Add to plan'}
//           />
//           <AddonsCard
//             title={'Hourly backups'}
//             text={
//               'Back up your site to AWS or google cloud storage. backups can be weekly or monthly. You can back up your files, Wordpress database, or both.'
//             }
//             price={'2 USD / month'}
//             add={'Add to plan'}
//           />
//         </div>
//       </div>
//       {isActive && (
//         <Modal
//           width={800}
//           open={isActive}
//           onCancel={() => setIsActive(false)}
//           footer={null}
//           closable={false}
//         >
//           <DiskSpaceModal moduleDisable={() => setIsActive(false)} />
//         </Modal>
//       )}
//     </>
//   );
// };

// export default Addons;
