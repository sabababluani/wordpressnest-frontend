import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import styles from '../EdgeCaching/EdgeCaching.module.scss';
import CashingPagesContainer from '../CashingPagesContainer/CashingPagesContainer';
import { Modal } from 'antd';
import ExcludeCdnModal from './components/ExcludeCdnModal/ExcludeCdnModal';
import { useState } from 'react';
import CdnImageOptimizationModal from './components/CdnImageOptimizationModal/CdnImageOptimizationModal';
import Button from '@/app/components/Button/Button';
import Image from 'next/image';

const Cdn = (): JSX.Element => {
  const [isExcludeModalOpen, setIsExcludeModalOpen] = useState<boolean>(false);
  const [isCdnImageModalOpen, setIsCdnImageModalOpen] =
    useState<boolean>(false);

  return (
    <div className={styles.bottomContainer}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <span className={styles.mainDescriptionStyle}>
            When CDN is enabled, we serve all static content (such as images,
            CSS, and JavaScript files) through our Content Delivery Network. The
            limit is 5 GB per file.
          </span>
          <div className={styles.enable}>
            <Image
              src={'/icons/greensuccess.svg'}
              alt="greensuccess"
              width={16}
              height={16}
            />
            <span>CDN is enabled</span>
          </div>
        </div>
        <Button
          backgroundColor={buttonbackgroundColorEnum.grey}
          innerContent="Disable"
        />
      </div>
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
          buttonInnerContent={'Settings'}
          buttonBackgroundColor={buttonbackgroundColorEnum.grey}
          onClick={() => setIsCdnImageModalOpen(true)}
        />
        <CashingPagesContainer
          caption={'Exclude Files From CDN'}
          description={
            'Exclude files that change often to ensure you deliver the most recent content. You can exclude file extensions, URLs, or file paths. Excluding files from being cached will increase your resource usage.'
          }
          buttonInnerContent={'Settings'}
          buttonBackgroundColor={buttonbackgroundColorEnum.grey}
          onClick={() => setIsExcludeModalOpen(true)}
        />
      </div>
      <Modal
        width={840}
        open={isExcludeModalOpen}
        onCancel={() => setIsExcludeModalOpen(false)}
        footer={null}
        closable={false}
      >
        <ExcludeCdnModal onClose={() => setIsExcludeModalOpen(false)} />
      </Modal>
      <Modal
        width={840}
        open={isCdnImageModalOpen}
        onCancel={() => setIsCdnImageModalOpen(false)}
        footer={null}
        closable={false}
      >
        <CdnImageOptimizationModal
          onClose={() => setIsCdnImageModalOpen(false)}
        />
      </Modal>
    </div>
  );
};

export default Cdn;
