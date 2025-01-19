import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import styles from '../EdgeCaching/EdgeCaching.module.scss';
import CashingPagesContainer from '../CashingPagesContainer/CashingPagesContainer';
import { Modal } from 'antd';
import ClearCacheModal from './components/ClearCacheModal/ClearCacheModal';
import { useState } from 'react';

const ServerCaching = (): JSX.Element => {
  const [isExcludeModalOpen, setIsExcludeModalOpen] = useState(false);

  return (
    <div className={styles.bottomContainer}>
      <span className={styles.mainDescriptionStyle}>
        Cache makes your site load faster by storing site data. Clear it to make
        sure your site shows the most recent version.
      </span>
      <div className={styles.containersWrapper}>
        <CashingPagesContainer
          caption={'Clear Cache'}
          description={
            'If you need to clear all cache, we recommend clearing any theme or plugin cache first.'
          }
          buttonInnerContent={'Clear Cache'}
          buttonBackgroundColor={buttonbackgroundColorEnum.black}
          onClick={() => setIsExcludeModalOpen(true)}
        />
      </div>
      <Modal
        footer={null}
        closable={false}
        open={isExcludeModalOpen}
        onCancel={() => setIsExcludeModalOpen(false)}
        width={666}
      >
        <ClearCacheModal onClose={() => setIsExcludeModalOpen(false)} />
      </Modal>
    </div>
  );
};

export default ServerCaching;
