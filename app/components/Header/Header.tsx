'use client';

import { useState, useEffect } from 'react';
import { Modal } from 'antd';
import Search from '../Search/Search';
import styles from './Header.module.scss';
import BreadCrumbs from './components/Breadcrumbs/Breadcrumbs';
import NotificationBell from './components/NotificationBell/NotificationBell';
import Profile from './components/Profile/Profile';
import SearchBox from '../SearchBox/SearchBox';
import { useGetData } from '@/app/hooks/useGetData';
import { UserInterface } from '../Navigation/interfaces/navigation.props.interface';

const Header = (): JSX.Element => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSearchClick = () => {
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isMacCommand = e.metaKey && e.key === 'k';
      const isWindowsCtrl = e.ctrlKey && e.key === 'k';
      if (isMacCommand || isWindowsCtrl) {
        e.preventDefault();
        setIsModalVisible(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const { data } = useGetData<UserInterface>({ endpoint: 'user/me' });

  return (
    <div className={styles.container}>
      <BreadCrumbs />
      <div className={styles.infos}>
        <Search
          placeholder="Search"
          onChange={() => {}}
          onClick={handleSearchClick}
          clickable
          control
        />
        <NotificationBell />
        <Profile name={`${data?.firstName || ''} ${data?.lastName || ''}`} />
      </div>
      {isModalVisible && (
        <Modal
          footer={null}
          closable={false}
          onCancel={handleModalClose}
          open={isModalVisible}
        >
          <SearchBox
            isVisable={isModalVisible}
            onModalClose={handleModalClose}
          />
        </Modal>
      )}
    </div>
  );
};

export default Header;
