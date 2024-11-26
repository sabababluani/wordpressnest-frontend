'use client';

import Search from '../Search/Search';
import styles from './Header.module.scss';
import BreadCrumbs from './components/Breadcrumbs/Breadcrumbs';
import NotificationBell from './components/NotificationBell/NotificationBell';
import Profile from './components/Profile/Profile';

const Header = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <BreadCrumbs />
      <div className={styles.infos}>
        <Search placeholder="Search" onChange={() => {}} />
        <NotificationBell />
        <Profile name="Beka Jikurishvili" />
      </div>
    </div>
  );
};

export default Header;
