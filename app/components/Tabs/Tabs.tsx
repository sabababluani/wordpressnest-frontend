'use client';

import { Tabs } from 'antd';
import React, { useState, useEffect } from 'react';
import styles from './Tabs.module.scss';
import { TabsPropsInterface } from './interfaces/tabs-props.interfaces';

const TabsAnt: React.FC<TabsPropsInterface> = ({
  tabNames = [],
  tabContent = [],
  uniqueKey,
  withoutBorder,
  withoutPadding,
}) => {
  const [activeTabKey, setActiveTabKey] = useState('0');

  useEffect(() => {
    const storedTabKey = sessionStorage.getItem(`${uniqueKey}_activeTabKey`);
    if (storedTabKey) {
      setActiveTabKey(storedTabKey);
    }
  }, [uniqueKey]);

  const onTabChange = (key: string): void => {
    setActiveTabKey(key);
    sessionStorage.setItem(`${uniqueKey}_activeTabKey`, key);
  };

  const tabsItems = tabNames.map((name, index) => ({
    label: name || `Tab-${index}`,
    key: String(index),
    children: tabContent[index] || null,
  }));

  return (
    <div
      className={`${styles.wrapper} ${withoutBorder && styles.withoutBorder} ${withoutPadding && styles.withoutPadding}`}
    >
      <Tabs activeKey={activeTabKey} onChange={onTabChange} items={tabsItems} />
    </div>
  );
};

export default TabsAnt;
