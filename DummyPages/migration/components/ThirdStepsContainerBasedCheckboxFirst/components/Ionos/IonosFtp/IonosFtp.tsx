import { useState } from 'react';
import styles from './IonosFtp.module.scss';

const IonosFtp = () => {
  const [serverAddress, setServerAddress] = useState<string>('');
  const [port, setPort] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [sitePath, setSitePath] = useState<string>('');

  const handleServerAddressChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setServerAddress(e.target.value);
  };

  const handlePortChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPort(e.target.value);
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSitePathChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSitePath(e.target.value);
  };

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.wrapperContainer}>
        <div className={styles.wrapper}>
          <span className={styles.inputsLabelStyle}>Server address</span>
          <input
            type="text"
            className={styles.inputContainer}
            value={serverAddress}
            onChange={handleServerAddressChange}
          />
        </div>
        <div className={styles.wrapper}>
          <span className={styles.inputsLabelStyle}>Port</span>
          <input
            type="text"
            className={styles.inputContainer}
            value={port}
            onChange={handlePortChange}
          />
        </div>
      </div>
      <div className={styles.wrapperContainer}>
        <div className={styles.wrapper}>
          <span className={styles.inputsLabelStyle}>FTP username</span>
          <input
            type="text"
            className={styles.inputContainer}
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className={styles.wrapper}>
          <span className={styles.inputsLabelStyle}>FTP password</span>
          <input
            type="text"
            className={styles.inputContainer}
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
      </div>
      <div className={styles.inputAndLabelWrapper}>
        <span className={styles.inputsLabelStyle}>WordPress site path</span>
        <input
          type="text"
          className={styles.enhancedInputContainer}
          value={sitePath}
          onChange={handleSitePathChange}
        />
      </div>
    </div>
  );
};

export default IonosFtp;
