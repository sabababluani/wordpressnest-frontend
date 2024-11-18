'use client';

import Button from '../components/Button/Button';
import { buttonbackgroundColorEnum } from '../components/Button/enum/button.enum';
import TabsAnt from '../components/Tabs/Tabs';
import Cdn from './components/Cdn/Cdn';
import EdgeCaching from './components/EdgeCaching/EdgeCaching';
import ServerCaching from './components/ServerCaching/ServerCaching';
import styles from './page.module.scss';


const caching = (): JSX.Element => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.topContainers}>
        <span className={styles.mainCaptionStyle}>Caching</span>
        <Button
          backgroundColor={buttonbackgroundColorEnum.grey}
          innerContent="Disable"
        />
      </div>
      <div>
        <TabsAnt
          tabCount={3}
          tabNames={['Edge Caching', 'CDN', 'Server Caching']}
          tabContent={[
            <div key={'edge'}>
              <EdgeCaching />
            </div>,
            <div key={'cdn'}>
              <Cdn />
            </div>,
            <div key={'server'}>
              <ServerCaching />
            </div>,
          ]}
        />
      </div>
    </div>
  );
};

export default caching;
