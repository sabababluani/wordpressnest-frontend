import RegistryCredentials from './components/RegistryCredentials/RegistryCredentials';
import styles from './page.module.scss';

const Registry = () => {
  return (
    <div className={styles.container}>
      <RegistryCredentials />
    </div>
  );
};

export default Registry;
