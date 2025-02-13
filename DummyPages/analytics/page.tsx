// 'use client';

// import { Select } from 'antd';
// import TabsAnt from '../../app/components/Tabs/Tabs';
// import styles from './page.module.scss';
// import Resource from './components/Resource/Resource';
// import CdnUsage from './components/CdnUsage/CdnUsage';
// import Dispersion from './components/Dispersion/Dispersion';
// import Performance from './components/Performance/Performance';
// import Response from './components/Response/Responce';
// import Cache from './components/Cache/Cache';
// import GeoApi from './components/GeoApi/GeoApi';

// const caching = (): JSX.Element => {
//   return (
//     <div className={styles.mainContainer}>
//       <div className={styles.topContainers}>
//         <span className={styles.mainCaptionStyle}>Analytics</span>
//         <Select
//           className={styles.selectStyle}
//           placeholder="Select Time Range"
//           options={[
//             { value: '1d', label: 'Past 1 Day' },
//             { value: '7d', label: 'Past 7 Days' },
//             { value: '1m', label: 'Past 1 Month' },
//           ]}
//         />
//       </div>
//       <div className={styles.tabs}>
//         <TabsAnt
//           uniqueKey={'analytics'}
//           tabNames={[
//             'Resource',
//             'CDN Usage',
//             'Dispersion',
//             'Performance',
//             'Response',
//             'Cache',
//             'Geo & IP',
//           ]}
//           tabContent={[
//             <Resource key={'resource'} />,
//             <CdnUsage key={'cdn'} />,
//             <Dispersion key={'dispersion'} />,
//             <Performance key={'performance'} />,
//             <Response key={'response'} />,
//             <Cache key={'cache'} />,
//             <GeoApi key={'geoapi'} />,
//           ]}
//         />
//       </div>
//     </div>
//   );
// };

// export default caching;
