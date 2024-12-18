import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Profile.module.scss';
import LogOut from '@/app/components/LogOut/LogOut';
import { ProfilePropsInterface } from './interfaces/profile-props.inteface';

const Profile = (props: ProfilePropsInterface): JSX.Element => {
  const [logOut, setLogOut] = useState(false);
  const logOutRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target as Node)
    ) {
      setLogOut(false);
    }
  };

  useEffect(() => {
    if (logOut) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [logOut]);

  const handleToggle = () => {
    setLogOut((prevState) => !prevState);
  };

  const handleLinkClick = () => {
    setLogOut(false);
  };

  return (
    <div className={styles.wrapper} ref={wrapperRef} onClick={handleToggle}>
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
        />
      </div>
      {logOut && (
        <div ref={logOutRef} className={styles.logout}>
          <LogOut onLinkClick={handleLinkClick} />
        </div>
      )}
    </div>
  );
};

export default Profile;
