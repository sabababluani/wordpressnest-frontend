import React, { useState } from 'react';
import Button from '@/app/components/Button/Button';
import styles from './ExcludeCdnModal.module.scss';
import Image from 'next/image';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { ExcludeCdnModalPropsInterface } from './interfaces/exclude-cdn-modal-props.interface';
import ModalHeader from '@/app/components/ModalHeader/ModalHeader';

const ExcludeCdnModal = (props: ExcludeCdnModalPropsInterface) => {
  const [directoryInput, setDirectoryInput] = useState<string>('');
  const [urlInput, setUrlInput] = useState<string>('');
  const [extensionInput, setExtensionInput] = useState<string>('');

  return (
    <div className={styles.wrapper}>
      <ModalHeader headline="Exclude files from CDN" onClose={props.onClose} />
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
              <input
                type="text"
                placeholder="/example-path"
                value={directoryInput}
                onChange={(e) => setDirectoryInput(e.target.value)}
              />
              <Button
                backgroundColor={buttonbackgroundColorEnum.black}
                innerContent="Add directory"
                disableButton={!directoryInput.trim()}
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
              <input
                type="text"
                placeholder="/example-path"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
              />
              <Button
                backgroundColor={buttonbackgroundColorEnum.black}
                innerContent="Add URL path"
                disableButton={!urlInput.trim()}
              />
            </div>
          </div>
        </div>
        <div className={styles.containerWrapper}>
          <div className={styles.containerHeader}>
            <p>Exclude files based on file extensions</p>
            <span>
              All files with the specified extension will be excluded.
            </span>
          </div>

          <div className={styles.directory}>
            <p className={styles.files}>Files</p>
            <div className={styles.inputWrapperSymbol}>
              <div className={styles.inputContainer}>
                <Image
                  src="/icons/minisearch.svg"
                  alt="minisearch"
                  width={16}
                  height={16}
                />
                <input
                  type="text"
                  placeholder="Start typing an extension"
                  value={extensionInput}
                  onChange={(e) => setExtensionInput(e.target.value)}
                />
              </div>
              <Button
                backgroundColor={buttonbackgroundColorEnum.black}
                innerContent="Add Extension"
                disableButton={!extensionInput.trim()}
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
