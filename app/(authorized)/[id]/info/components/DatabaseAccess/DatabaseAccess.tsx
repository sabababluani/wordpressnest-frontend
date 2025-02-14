import styles from './DatabaseAccess.module.scss';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { DataBasePropsInterface } from './interfaces/data-base-access-props.interface';
import Link from 'next/link';
import Wrapper from '../reusableComponent/Wrapper/Wrapper';
import PasswordFieldComp from './components/PasswordField/PasswordField';

const DataBaseAccess = (props: DataBasePropsInterface): JSX.Element => {
  const handleCopy = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert('Copied to clipboard');
      })
      .catch(() => {
        alert('Failed to copy');
      });
  };

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.topContainer}>
        <span className={styles.mainCaptionStyle}>Database access</span>
        <Link href={`http://${props.phpAdmin}`} target="_blank">
          <Button
            backgroundColor={buttonbackgroundColorEnum.greyBold}
            innerContent="Open PHP admin"
          />
        </Link>
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.rowWrapper}>
          <Wrapper
            enhancedWidth
            caption={'Database name'}
            fieldsInnerContent={props.database}
            additionalHref={'/icons/copy.svg'}
            onClick={() => handleCopy(props.database!)}
          />
          <Wrapper
            enhancedWidth
            caption={'Database Username'}
            fieldsInnerContent={props.databaseUsername}
            additionalHref={'/icons/copy.svg'}
            onClick={() => handleCopy(props.databaseUsername)}
          />
        </div>
        <div className={styles.rowWrapper}>
          <Wrapper
            enhancedWidth
            caption={'IP allowlist'}
            fieldsInnerContent={props.database}
            additionalHref={'/icons/edit44.svg'}
          />
          <PasswordFieldComp
            caption={'Database Password'}
            innerContent={props.databasePassword}
            additionalHref={'/icons/eyeClosed.svg'}
            additionalHref2={'/icons/eyeOpen.svg'}
            additionalHref3={'/icons/copy.svg'}
          />
        </div>
      </div>
    </div>
  );
};

export default DataBaseAccess;
