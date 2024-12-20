'use client';

import Button from '../../components/Button/Button';
import { buttonbackgroundColorEnum } from '../../components/Button/enum/button.enum';
import TabsAnt from '../../components/Tabs/Tabs';
import Cdn from './components/Cdn/Cdn';
import EdgeCaching from './components/EdgeCaching/EdgeCaching';
import ServerCaching from './components/ServerCaching/ServerCaching';
import styles from './page.module.scss';

const Caching = (): JSX.Element => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.topContainers}>
        <span className={styles.mainCaptionStyle}>Caching</span>
        <Button
          backgroundColor={buttonbackgroundColorEnum.grey}
          innerContent="Change cache expiration"
        />
      </div>
      <div>
        <TabsAnt
          uniqueKey={'caching'}
          tabNames={['Edge Caching', 'CDN', 'Server Caching']}
          tabContent={[
            <EdgeCaching key={'edge'} />,
            <Cdn key={'cdn'} />,
            <ServerCaching key={'server'} />,
          ]}
        />
      </div>
    </div>
  );
};

export default Caching;
