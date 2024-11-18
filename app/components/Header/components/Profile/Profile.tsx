import Image from 'next/image';
import styles from './Profile.module.scss';
import { ProfilePropsInterface } from './interfaces/profile-props.inteface';

const Profile = (props: ProfilePropsInterface): JSX.Element => {
  return (
    <div className={styles.container}>
      <Image
        src="/profilepicture.png"
        width={40}
        height={40}
        alt="profilepicture"
        className={styles.image}
      />
      <span className={styles.name}>{props.name}</span>
      <Image src="/icons/dropdown.svg" width={24} height={24} alt="dropdown" />
    </div>
  );
};

export default Profile;
