import styles from './SftpShh.module.scss';
import { SftpShhPropsInterface } from './interfaces/sftpshh-props.interfaces';
import Wrapper from '../reusableComponent/Wrapper/Wrapper';
import { useNotification } from '@/app/contexts/NotificationContext';

const SftpShh = (props: SftpShhPropsInterface): JSX.Element => {
  const { showNotification } = useNotification();

  const handleCopy = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        showNotification('Copied to clipboard', 'success');
      })
      .catch(() => {
        showNotification('Failed to copy', 'error');
      });
  };

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.topContainer}>
        <span className={styles.mainCaptionStyle}>SFTP/SHH</span>
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.rowWrapper}>
          <Wrapper
            enhancedWidth
            caption={'Host'}
            fieldsInnerContent={props.host}
            additionalHref={'/icons/copy.svg'}
            onClick={() => handleCopy(props.host)}
          />
          <Wrapper
            enhancedWidth
            caption={'Port'}
            fieldsInnerContent={props.port?.toString()}
            additionalHref="/icons/edit44.svg"
            onClick={() => {}}
          />
        </div>
        <div className={styles.rowWrapper}>
          <Wrapper
            enhancedWidth
            caption={'Password expiration'}
            fieldsInnerContent={props.passwordExpiration}
            additionalHref={'/icons/edit44.svg'}
            onClick={props.onClick}
          />
          <Wrapper
            enhancedWidth
            caption={'Authentication Methods'}
            fieldsInnerContent={props.ssh}
            additionalHref="/icons/edit44.svg"
            onClick={() => {}}
          />
        </div>
        <div className={styles.rowWrapper}>
          <Wrapper
            enhancedWidth
            caption={'Username'}
            fieldsInnerContent={props.userName}
            additionalHref={'/icons/copy.svg'}
            onClick={() => handleCopy(props.userName!)}
          />
          <Wrapper
            enhancedWidth
            caption={'Password'}
            fieldsInnerContent={props.password}
            additionalHref="/icons/edit44.svg"
            onClick={() => {}}
          />
        </div>
        <div className={styles.rowWrapper}>
          <Wrapper
            enhancedWidth
            caption={'Ip allow list'}
            fieldsInnerContent={props.IpAllowed}
            additionalHref={'/icons/edit44.svg'}
            onClick={() => {}}
          />
          <Wrapper
            enhancedWidth
            caption={'FTP client config files'}
            fieldsInnerContent={props.ftp}
            additionalHref="/icons/Download1.svg"
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default SftpShh;
