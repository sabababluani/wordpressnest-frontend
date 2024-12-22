import InputAndLabel from '../../../DigitalOcean/components/InputAndLabel/InputAndLabel';
import styles from './Sftp.module.scss';

const Sftp = () => {
  return (
    <div className={styles.mainWrapper}>
      <InputAndLabel
        firstColumnActive
        secondColumnActive
        firstColumnLabel={'Server address'}
        secondColumnLabel={'Port'}
      />
      <InputAndLabel
        firstColumnActive
        secondColumnActive
        firstColumnLabel={'SFTP Username'}
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
