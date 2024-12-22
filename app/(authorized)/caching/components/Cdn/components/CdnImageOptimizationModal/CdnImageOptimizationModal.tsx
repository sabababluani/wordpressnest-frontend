import { Radio } from 'antd';
import styles from './CdnImageOptimizationModal.module.scss';
import Image from 'next/image';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { CdnImageOptimizationModalPropsInterface } from './interfaces/cdn-image-optimization-modal-props.interface.';

const CdnImageOptimizationModal = (
  props: CdnImageOptimizationModalPropsInterface,
) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.headline}>Image optimization</span>
        <Image
          src="/icons/close-mini.svg"
          alt="close"
          width={24}
          height={24}
          onClick={props.onClose}
        />
      </div>
      <div className={styles.container}>
        <span>
          Select an image optimization option to improve your website speed and
          performance. The CDN will automatically convert your images to the
          WebP format. Note: WebP images are only displayed if they are
          significantly smaller than the original image.
        </span>
        <div className={styles.types}>
          <div className={styles.radioItem}>
            <Radio value="Individual"></Radio>
            <span className={styles.title}>None</span>
          </div>
          <div className={styles.radioItem}>
            <Radio value="Lossless"></Radio>
            <div className={styles.description}>
              <span className={styles.title}>Lossless</span>
              <span className={styles.text}>
                No visual quality impact. GIF and PNG images are compressed, and
                metadata is removed from JPEG, GIF, and PNG images.
              </span>
            </div>
          </div>
          <div className={styles.radioItem}>
            <Radio value="Lossy"></Radio>
            <div className={styles.description}>
              <span className={styles.title}>Lossy</span>
              <span className={styles.text}>
                May reduce visual quality. Adds JPEG compression on top of the
                Lossless option features.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.buttons}>
        <Button
          backgroundColor={buttonbackgroundColorEnum.grey}
          innerContent="Cancel"
          onClick={props.onClose}
        />
        <Button
          backgroundColor={buttonbackgroundColorEnum.black}
          innerContent="Save settings"
        />
      </div>
    </div>
  );
};

export default CdnImageOptimizationModal;
