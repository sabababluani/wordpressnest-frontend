'use client';
import { useState } from 'react';
import { Modal } from 'antd';
import Search from '../Search/Search';
import styles from './Header.module.scss';
import BreadCrumbs from './components/Breadcrumbs/Breadcrumbs';
import NotificationBell from './components/NotificationBell/NotificationBell';
import Profile from './components/Profile/Profile';
import SearchBox from '../SearchBox/SearchBox';

const Header = (): JSX.Element => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSearchClick = () => {
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <div className={styles.container}>
      <BreadCrumbs />
      <div className={styles.infos}>
        <Search
          placeholder="Search"
          onChange={() => {}}
          onClick={handleSearchClick}
          clickable
        />
        <NotificationBell />
        <Profile name="Beka Jikurishvili" />
      </div>
      <Modal
        footer={null}
        closable={false}
        onCancel={handleModalClose}
        visible={isModalVisible}  
      >
        <SearchBox />
      </Modal>
    </div>
  );
};

export default Header;
