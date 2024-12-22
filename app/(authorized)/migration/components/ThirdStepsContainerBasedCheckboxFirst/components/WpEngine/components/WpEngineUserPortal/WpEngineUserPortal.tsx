import { Checkbox } from 'antd';
import styles from './WpEngineUserPortal.module.scss';
import { useState } from 'react';
import InputAndLabel from '../../../DigitalOcean/components/InputAndLabel/InputAndLabel';

const WpEngineUserPortal = () => {
  const [activeCheckbox, setActiveCheckbox] = useState<boolean>(false);

  const handleCheckboxClick = () => {
    setActiveCheckbox((prev: boolean) => !prev);
  };

  return (
    <div className={styles.mainContainer}>
      <span className={styles.mainCaptionStyle}>
        We recommend adding hosting as a user on your WP engine account. When
        providing your username and password to login, this will require
        additonal security checks, and thi magration process can take
        considerably longer.
      </span>
      <div className={styles.forCheckboxAndCaption}>
        <div className={styles.checkboxWrapper}>
          <Checkbox onClick={handleCheckboxClick} checked={activeCheckbox} />
        </div>
        <span className={styles.checkCaptionStyle}>
          Check here if you would like us to preceed without giving us full
          access
        </span>
      </div>
      <InputAndLabel
        firstColumnActive
        firstColumnLabel={'WP Engine User Portal username'}
        secondColumnActive
        secondColumnLabel={'WP Engine User Portal Password'}
      />
    </div>
  );
};
export default WpEngineUserPortal;
