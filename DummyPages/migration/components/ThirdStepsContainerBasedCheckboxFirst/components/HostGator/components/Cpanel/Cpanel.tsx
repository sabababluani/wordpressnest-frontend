import InputAndLabel from '../../../DigitalOcean/components/InputAndLabel/InputAndLabel';
import styles from './Cpanel.module.scss';

const Cpanel = () => {
  return (
    <div className={styles.mainWrapper}>
      <span>You will need to enable SSH access</span>
      <InputAndLabel
        firstColumnActive
        strechedInput
        firstColumnLabel={'cPanel URL'}
      />
    </div>
  );
};

export default Cpanel;
