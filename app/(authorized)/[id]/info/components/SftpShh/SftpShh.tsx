import styles from './SftpShh.module.scss';
import { SftpShhPropsInterface } from './interfaces/sftpshh-props.interfaces';
import Wrapper from '../reusableComponent/Wrapper/Wrapper';

const SftpShh = (props: SftpShhPropsInterface): JSX.Element => {
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
            additionalHref={'/icons/Copy.svg'}
            onClick={() => {}}
          />
          <Wrapper
            enhancedWidth
            caption={'Port'}
            fieldsInnerContent={props.port?.toString()}
            additionalHref="/icons/pencil.svg"
            onClick={() => {}}
          />
        </div>
        <div className={styles.rowWrapper}>
          <Wrapper
            enhancedWidth
            caption={'Password expiration'}
            fieldsInnerContent={props.passwordExpiration}
            additionalHref={'/icons/Copy.svg'}
            onClick={() => {}}
          />
          <Wrapper
            enhancedWidth
            caption={'Authentication Methods'}
            fieldsInnerContent={props.ssh}
            additionalHref="/icons/pencil.svg"
            onClick={() => {}}
          />
        </div>
        <div className={styles.rowWrapper}>
          <Wrapper
            enhancedWidth
            caption={'Username'}
            fieldsInnerContent={props.userName}
            additionalHref={'/icons/Copy.svg'}
            onClick={() => {}}
          />
          <Wrapper
            enhancedWidth
            caption={'Password'}
            fieldsInnerContent={props.password}
            additionalHref="/icons/pencil.svg"
            onClick={() => {}}
          />
        </div>
        <div className={styles.rowWrapper}>
          <Wrapper
            enhancedWidth
            caption={'Ip allow list'}
            fieldsInnerContent={props.IpAllowed}
            additionalHref={'/icons/pencil.svg'}
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
