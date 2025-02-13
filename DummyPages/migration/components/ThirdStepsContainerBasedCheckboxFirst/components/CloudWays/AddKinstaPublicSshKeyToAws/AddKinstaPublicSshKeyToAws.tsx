import { Checkbox } from 'antd';
import styles from './AddKinstaPublicSshKeyToAws.module.scss';
import { useState } from 'react';

const AddKinstaPublicSshKeyToAws = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.captionWrapper}>
        <span className={styles.mainCaptionStyle}>
          Due to additional Cloudways security checks, we recommend adding
          Kinsta as a Team member on Cloudways. When providing your username and
          password to login, this will require additional security checks, and
          the migration process can take considerably longer.
        </span>
      </div>
      <div className={styles.checkboxWrapper}>
        <div className={styles.checkboxWrapper}>
          <Checkbox
            checked={isChecked}
            onClick={() => setIsChecked((prev: boolean) => !prev)}
          />
        </div>
        <span className={styles.checkboxLabelStyle}>
          Check here if you would like us to proceed without giving us full
          access
        </span>
      </div>
      <div className={styles.lastWrapper}>
        <div className={styles.inputAndCaptionWrapper}>
          <div className={styles.usernameWrapper}>
            <span className={styles.inputLabel}>Customer email address</span>
            <input
              type="text"
              className={styles.usernameInputStyle}
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className={styles.passwordWrapper}>
            <span className={styles.inputLabel}>Customer password</span>
            <input
              type="password"
              className={styles.passwordInputStyle}
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddKinstaPublicSshKeyToAws;
