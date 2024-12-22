import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import styles from '../EdgeCaching/EdgeCaching.module.scss';
import CashingPagesContainer from '../CashingPagesContainer/CashingPagesContainer';
import { Modal } from 'antd';
import ExcludeCdnModal from './components/ExcludeCdnModal/ExcludeCdnModal';
import { useState } from 'react';

const Cdn = (): JSX.Element => {
  const [isModalVisable, setIsModalVisable] = useState<boolean>(false);

  return (
    <div className={styles.bottomContainer}>
      <span className={styles.mainDescriptionStyle}>
        When CDN is enabled, we serve all static content (such as images, CSS,
        and JavaScript files) through our Content Delivery Network. The limit is
        5 GB per file.
      </span>
      <div className={styles.containersWrapper}>
        <CashingPagesContainer
          caption={'Clear CDN Cache'}
          description={
            'Clearing the cache purges the assigned CDN zone. If you replace static files and the new content has the same filename as the old content, you should clear the cache. The process may take up to five minutes.'
          }
          buttonInnerContent={'Clear CDN Cache'}
          buttonBackgroundColor={buttonbackgroundColorEnum.black}
          onClick={() => {}}
        />
        <CashingPagesContainer
          caption={'Image Optimization'}
          description={
            'The CDN can automatically convert PNG, GIF, and JPEG images to the WebP format to improve website speed and performance.'
          }
          buttonInnerContent={'Setting'}
          buttonBackgroundColor={buttonbackgroundColorEnum.grey}
          onClick={() => {}}
        />
        <CashingPagesContainer
          caption={'Exclude Files From CDN'}
          description={
            'Exclude files that change often to ensure you deliver the most recent content. You can exclude file extensions, URLs, or file paths. Excluding files from being cached will increase your resource usage.'
          }
          buttonInnerContent={'Setting'}
          buttonBackgroundColor={buttonbackgroundColorEnum.grey}
          onClick={() => setIsModalVisable(true)}
        />
      </div>
      <Modal
        width={840}
        open={isModalVisable}
        onCancel={() => setIsModalVisable(false)}
        footer={null}
        closable={false}
      >
        <ExcludeCdnModal onClose={() => setIsModalVisable(false)} />
      </Modal>
    </div>
  );
};

export default Cdn;
