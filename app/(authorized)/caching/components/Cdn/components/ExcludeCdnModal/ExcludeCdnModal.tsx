import Button from '@/app/components/Button/Button';
import styles from './ExcludeCdnModal.module.scss';
import Image from 'next/image';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { ExcludeCdnModalPropsInterface } from './interfaces/exclude-cdn-modal-props.interface';

const ExcludeCdnModal = (props: ExcludeCdnModalPropsInterface) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.headline}>Exclude files from CDN</span>
        <Image
          src="/icons/close-mini.svg"
          alt="close"
          width={24}
          height={24}
          onClick={props.onClose}
        />
      </div>
      <div className={styles.container}>
        <div className={styles.containerWrapper}>
          <div className={styles.containerHeader}>
            <p>Exclude files based on directory</p>
            <span>
              All directories after the directory you provide will also be
              excluded.
            </span>
          </div>
          <div className={styles.directory}>
            <p>Directory</p>
            <span>
              Start your entry after the /public directory and enter one at a
              time
            </span>
            <div className={styles.inputWrapper}>
              <input type="text" placeholder="/example-path" />
              <Button
                backgroundColor={buttonbackgroundColorEnum.black}
                innerContent="Add directory"
                disableButton
              />
            </div>
          </div>
        </div>
        <div className={styles.containerWrapper}>
          <div className={styles.containerHeader}>
            <p>Exclude files based on URL</p>
            <span>
              All URLs after the URL you provide will also be excluded.
            </span>
          </div>
          <div className={styles.directory}>
            <p>URL</p>
            <span>Do not include the domain and enter one URL at a time</span>
            <div className={styles.inputWrapper}>
              <input type="text" placeholder="/example-path" />
              <Button
                backgroundColor={buttonbackgroundColorEnum.black}
                innerContent="Add URL path"
                disableButton
              />
            </div>
          </div>
        </div>
        <div className={styles.containerWrapper}>
          <div className={styles.containerHeader}>
            <p>Exclude files based on URL</p>
            <span>
              All URLs after the URL you provide will also be excluded.
            </span>
          </div>

          <div className={styles.directory}>
            <p className={styles.files}>Files</p>
            <div className={styles.inputWrapperSymbol}>
              <div className={styles.inputContainer}>
                <Image
                  src={'/icons/minisearch.svg'}
                  alt="minisearch"
                  width={16}
                  height={16}
                />
                <input type="text" placeholder="Start typing an extension" />
              </div>
              <Button
                backgroundColor={buttonbackgroundColorEnum.black}
                innerContent="Add Extension"
                disableButton
              />
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
            innerContent="Add IP Addresses"
          />
        </div>
      </div>
    </div>
  );
};

export default ExcludeCdnModal;
