import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Profile.module.scss';
import { ProfilePropsInterface } from './interfaces/profile-props.inteface';
import LogOut from '@/app/components/LogOut/LogOut';

const Profile = (props: ProfilePropsInterface): JSX.Element => {
  const [logOut, setLogOut] = useState(false);
  const logOutRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      logOutRef.current &&
      !logOutRef.current.contains(event.target as Node)
    ) {
      setLogOut(false);
    }
  };

  useEffect(() => {
    if (logOut) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [logOut]);

  const handleLinkClick = () => {
    setLogOut(false);
  };

  return (
    <>
      <div className={styles.container}>
        <Image
          src="/profilepicture.png"
          width={40}
          height={40}
          alt="profilepicture"
          className={styles.image}
        />
        <span className={styles.name}>{props.name}</span>
        <Image
          src="/icons/dropdown.svg"
          width={24}
          height={24}
          alt="dropdown"
          onClick={() => setLogOut((prevState) => !prevState)}
        />
      </div>
      {logOut && <LogOut onLinkClick={handleLinkClick} />}
    </>
  );
};

export default Profile;
