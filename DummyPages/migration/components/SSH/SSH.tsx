import { ChangeEvent, useState } from 'react';
import styles from './SSH.module.scss';

const SSH = () => {
  const [serverAddress, setServerAddress] = useState<string>('');
  const [port, setPort] = useState<string>('');
  const [ftpUsername, setFtpUsername] = useState<string>('');
  const [ftpPassword, setFtpPassword] = useState<string>('');

  const onServerAddressChange = (e: ChangeEvent<HTMLInputElement>) => {
    setServerAddress(e.target.value);
  };

  const onPortChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPort(e.target.value);
  };

  const onFtpUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFtpUsername(e.target.value);
  };

  const onFtpPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFtpPassword(e.target.value);
  };

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.externalWrapper}>
        <div className={styles.inputAndCaptionWrapper}>
          <div className={styles.serverWrapper}>
            <span className={styles.inputLabel}>Server address</span>
            <input
              type="text"
              className={styles.serverInputStyle}
              value={serverAddress}
              onChange={onServerAddressChange}
            />
          </div>
          <div className={styles.portWrapper}>
            <span className={styles.inputLabel}>Port</span>
            <input
              type="text"
              className={styles.portInputStyle}
              value={port}
              onChange={onPortChange}
            />
          </div>
        </div>
        <div className={styles.inputAndCaptionWrapper}>
          <div className={styles.ftpUsernameWrapper}>
            <span className={styles.inputLabel}>SSH Username</span>
            <input
              type="text"
              className={styles.ftpPassowordInputStyle}
              value={ftpUsername}
              onChange={onFtpUsernameChange}
            />
          </div>
          <div className={styles.ftpPasswordWrapper}>
            <span className={styles.inputLabel}>SSH Password</span>
            <input
              type="text"
              className={styles.ftpPassowordInputStyle}
              value={ftpPassword}
              onChange={onFtpPasswordChange}
            />
          </div>
        </div>
        <div className={styles.lastWordPressWrapper}>
          <span className={styles.lastSelectLabel}>WordPress site path</span>
          <input type="text" className={styles.wordPressInputStyle} />
        </div>
      </div>
    </div>
  );
};

export default SSH;
