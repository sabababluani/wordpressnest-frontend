import Button from '@/app/components/Button/Button';
import styles from './RefferalLink.module.scss';
import Image from 'next/image';
const RefferalLink = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.headline}>Share your link to get started</span>
      </div>
      <div className={styles.container}>
        <div className={styles.linkWrapper}>
          <span className={styles.title}>Refferal link</span>
          <div className={styles.link}>
            <input type="text" className={styles.input} />
            <div className={styles.copyButton}>
              <Image src="/icons/copy.svg" width={20} height={20} alt="copy" />
              <span className={styles.copy}>Copy</span>
            </div>
          </div>
        </div>
        <span className={styles.text}>
          By partipicating in the refferal program in any way or using referal
          credits, you agree to these terms
        </span>
      </div>
    </div>
  );
};

export default RefferalLink;
