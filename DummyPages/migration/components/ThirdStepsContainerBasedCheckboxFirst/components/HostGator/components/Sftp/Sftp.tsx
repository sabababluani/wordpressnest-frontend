import InputAndLabel from '../../../DigitalOcean/components/InputAndLabel/InputAndLabel';
import styles from './Sftp.module.scss';

const Sftp = () => {
  return (
    <div className={styles.mainWrapper}>
      <span>You will need to enable SSH access</span>
      <InputAndLabel
        firstColumnActive
        firstColumnLabel={'Server address'}
        secondColumnActive
        secondColumnLabel={'Port'}
      />
      <InputAndLabel
        firstColumnActive
        firstColumnLabel={'SFTP Username'}
        secondColumnActive
        secondColumnLabel={'SFTP Password'}
      />
      <InputAndLabel
        firstColumnActive
        firstColumnLabel={'WordPress site path'}
        strechedInput
      />
    </div>
  );
};

export default Sftp;
