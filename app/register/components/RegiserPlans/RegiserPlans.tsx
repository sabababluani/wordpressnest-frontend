import Image from 'next/image';
import styles from './RegiserPlans.module.scss';
import { RegisterFormActionPropsInterface } from '../RegisterForm/interfaces/register-form-action-props.interface';

const RegiserPlans = (props: RegisterFormActionPropsInterface) => {
  const onSubmitClick = () => {
    props.onNextStep();
  };

  return (
    <div className={styles.wholeWrapper}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={styles.changePlanContainer}>
            <span>WP 2</span>
            <button>Change plan</button>
          </div>
          <div className={styles.priceContainer}>
            <p>
              <span>70$</span>0$
            </p>
            <span>For the first month</span>
          </div>
        </div>
        <div className={styles.chekboxWrapper}>
          <div className={styles.chekboxContainer}>
            <Image
              src={'/icons/blackcheck.svg'}
              alt="blackcheck"
              width={24}
              height={24}
            />
            <span>99.9% uptime SLA</span>
          </div>
          <div className={styles.chekboxContainer}>
            <Image
              src={'/icons/blackcheck.svg'}
              alt="blackcheck"
              width={24}
              height={24}
            />
            <span>2 WordPress installs</span>
          </div>
          <div className={styles.chekboxContainer}>
            <Image
              src={'/icons/blackcheck.svg'}
              alt="blackcheck"
              width={24}
              height={24}
            />
            <span>Free one-click staging enviroments </span>
          </div>
          <div className={styles.chekboxContainer}>
            <Image
              src={'/icons/blackcheck.svg'}
              alt="blackcheck"
              width={24}
              height={24}
            />
            <span>20GB Storage</span>
          </div>
          <div className={styles.chekboxContainer}>
            <Image
              src={'/icons/blackcheck.svg'}
              alt="blackcheck"
              width={24}
              height={24}
            />
            <span>70,000 visits</span>
          </div>
          <div className={styles.chekboxContainer}>
            <Image
              src={'/icons/blackcheck.svg'}
              alt="blackcheck"
              width={24}
              height={24}
            />
            <span>Daily backups retained for 14 days</span>
          </div>
          <div className={styles.chekboxContainer}>
            <Image
              src={'/icons/blackcheck.svg'}
              alt="blackcheck"
              width={24}
              height={24}
            />
            <span>Unlimiteds migration</span>
          </div>
        </div>
      </div>
      <button type="submit" className={styles.submit} onClick={onSubmitClick}>
        Continue
      </button>
    </div>
  );
};

export default RegiserPlans;
