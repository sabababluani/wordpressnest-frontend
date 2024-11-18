'use client';

import { Tabs } from 'antd';
import React, { useState, useEffect } from 'react';
import styles from './Tabs.module.scss';
import { TabsPropsInterface } from './interfaces/tabs-props.interfaces';

const TabsAnt: React.FC<TabsPropsInterface> = ({
  tabCount,
  tabNames = [],
  tabContent = [],
}) => {
  const [activeTabKey, setActiveTabKey] = useState('0');

  useEffect(() => {
    const storedTabKey = sessionStorage.getItem('activeTabKey');
    if (storedTabKey) {
      setActiveTabKey(storedTabKey);
    }
  }, []);

  const onTabChange = (key: string): void => {
    setActiveTabKey(key);
    sessionStorage.setItem('activeTabKey', key);
  };

  return (
    <div className={styles.wrapper}>
      <Tabs
        activeKey={activeTabKey}
        onChange={onTabChange}
        items={new Array(tabCount).fill(null).map((_, i) => {
          const id = String(i);
          const label = tabNames[i] || `Tab-${id}`;
          return {
            label,
            key: id,
            children: null,
          };
        })}
      />
      <div>{tabContent[Number(activeTabKey)]}</div>
    </div>
  );
};

export default TabsAnt;
