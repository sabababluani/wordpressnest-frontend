import Image from 'next/image';
import Button from '../components/Button/Button';
import { buttonbackgroundColorEnum } from '../components/Button/enum/button.enum';
import styles from './page.module.scss';

const Access = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <p>Access</p>
        <div>
          <Button
            backgroundColor={buttonbackgroundColorEnum.white}
            innerContent="Create new company"
          />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.textWrapper}>
          <p>
            This is an overview of the companies and sites you have access to,
            and the 3rd party aplications that have access to your account.
          </p>
        </div>
        <div className={styles.content}>
          <span>Manage companies</span>
          <div className={styles.belowTextWrapper}>
            <p>
              you can leave any companies that you’re not the owner of, or reach
              each company’s settings
            </p>
          </div>
          <div className={styles.tableWrapper}>
            <span className={styles.title}>Novatori</span>
            <p>Company owner</p>
            <Image
              src={'/icons/delete.svg'}
              alt="delete"
              width={24}
              height={24}
            />
          </div>
        </div>
        <div className={styles.content}>
          <span>Manage companies</span>
          <div className={styles.belowTextWrapper}>
            <p>
              you can leave any companies that you’re not the owner of, or reach
              each company’s settings
            </p>
          </div>
          <div className={styles.tableWrapper}>
            <span className={styles.title}>Novatori</span>
            <p>Company owner</p>
            <Image
              src={'/icons/delete.svg'}
              alt="delete"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Access;
