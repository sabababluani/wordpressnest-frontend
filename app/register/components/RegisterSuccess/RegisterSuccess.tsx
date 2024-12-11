import Image from 'next/image';
import styles from './RegisterSuccess.module.scss';

const RegisterSuccess = () => {
  return (
    <div className={styles.wrapper}>
      <Image
        src={'/icons/successlogo.svg'}
        alt="successlogo"
        width={220}
        height={220}
      />
      <span>Registration Successful!</span>
    </div>
  );
};

export default RegisterSuccess;
