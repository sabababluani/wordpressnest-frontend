import Image from 'next/image';
import styles from './LinkedinAccountsBox.module.scss';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';

const LinkedinAccountsBox = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <p>Linkded Accounts</p>
      </div>
      <div className={styles.container}>
        <p>
          We use this to left you sign in and populate your profile information
        </p>
        <div className={styles.githubContainer}>
          <Image src={'/github.svg'} alt="github" width={48} height={48} />
          <Button
            backgroundColor={buttonbackgroundColorEnum.grey}
            innerContent="Connect"
          />
        </div>
        <div className={styles.gitLabContainer}>
          <Image src={'/gitlab.svg'} alt="github" width={48} height={48} />
          <Button
            backgroundColor={buttonbackgroundColorEnum.grey}
            innerContent="Connect"
          />
        </div>
      </div>
    </div>
  );
};

export default LinkedinAccountsBox;
