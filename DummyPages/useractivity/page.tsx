// 'use client';

// import { Select } from 'antd';
// import Search from '../../components/Search/Search';
// import ActivityTable from './components/ActivityTable/ActivityTable';
// import styles from './page.module.scss';
// import { useState } from 'react';

// const Useractivity = () => {
//   const [, setSelectState] = useState<string>('');

//   const onSelectChange = (value: string) => {
//     setSelectState(value);
//   };

//   return (
//     <div className={styles.wrapper}>
//       <div className={styles.header}>
//         <span className={styles.headline}>User Activity</span>
//       </div>
//       <div className={styles.container}>
//         <div className={styles.searchWrapper}>
//           <div className={styles.select}>
//             <Search placeholder="Search Sites" isPadded />
//           </div>
//           <div className={styles.select}>
//             <Select
//               onChange={onSelectChange}
//               className={styles.selectStyle}
//               placeholder="All sites"
//               options={[
//                 { value: '1', label: '1' },
//                 { value: '2', label: '2' },
//                 { value: '3', label: '3' },
//               ]}
//             />
//           </div>
//         </div>
//         <ActivityTable />
//       </div>
//     </div>
//   );
// };

// export default Useractivity;
