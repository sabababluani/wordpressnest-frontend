import Image from 'next/image';
import HeadingBox from './components/HeadingBox/HeadingBox';
import styles from './page.module.scss';
import UploadSection from './components/UploadSection/UploadSection';
import PersonalInfoFields from './components/PersonalInfoFields/PersonalInfoFields';
import LinkedinAccountsBox from './components/LinkedinAccountsBox/LinkedinAccountsBox';
import EmailVerification from './components/EmailVerification/EmailVerification';
import FactorAuthentication from './components/FactorAuthentiaction/FactorAuthentiaction';

const PersonalInfo = () => {
  return (
    <div className={styles.wrapper}>
      <HeadingBox />
      <div className={styles.wrap}>
        <span>Update your photo and personal details here.</span>
        <div className={styles.container}>
          <div className={styles.photoInto}>
            <div className={styles.photoContent}>
              <span>
                Your Photo <span>*</span>
              </span>
              <Image
                src={'/icons/helpCircle.svg'}
                alt="help"
                width={16}
                height={16}
              />
            </div>
            <p>This will be displayed on your profile.</p>
          </div>
          <div className={styles.uploadContaine}>
            <div className={styles.profilePicture}>
              <Image src={'/grandpa.png'} alt="help" width={64} height={64} />
            </div>
            <UploadSection />
          </div>
        </div>
        <div>
          <PersonalInfoFields />
        </div>
        <div className={styles.content}>
          <LinkedinAccountsBox />
          <EmailVerification />
        </div>
        <div>
          <FactorAuthentication />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
