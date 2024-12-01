import Image from 'next/image';
import styles from './SftpShh.module.scss';
import { SftpShhPropsInterface } from './interfaces/sftpshh-props.interfaces';

const SftpShh = (props: SftpShhPropsInterface): JSX.Element => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.topContainer}>
        <span className={styles.mainCaptionStyle}>SFTP/SHH</span>
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.hostAndPasswordExpirationAndShhWrapper}>
          <div className={styles.hostWrapper}>
            <span className={styles.hostStyle}>Host</span>
            <span className={styles.hostValueStyle}>{props.host}</span>
          </div>
          <div className={styles.passwordExpirationWrapper}>
            <div className={styles.passwordExpirationAndButtonWrapper}>
              <span className={styles.passwordExpirationStyle}>
                Password expiration
              </span>
            </div>
            <div className={styles.passwordExpirationAndButtonWrapper}>
              <span className={styles.expirationStyle}>
                {props.passwordExpiration}
              </span>
              <button className={styles.buttonWrapper}>
                <Image
                  width={24}
                  height={24}
                  src={'/icons/pencil.svg'}
                  alt={'pencil icon'}
                />
              </button>
            </div>
          </div>
          <div className={styles.sshWrapper}>
            <span className={styles.sshStyle}>SSH terminal command</span>
            <span className={styles.sshValueStyle}>{props.ssh}</span>
          </div>
        </div>
        <div className={styles.portAndAuthenticationWrapper}>
          <div className={styles.portWrapper}>
            <span className={styles.portStyle}>Port</span>
            <span className={styles.portValueStyle}>{props.port}</span>
          </div>
          <div className={styles.authenticationMethodsWrapper}>
            <span className={styles.authenticationMethodsCaptionStyle}>
              Authentication Methods
            </span>
            <div className={styles.authenticationMethodsAndButtonWrapper}>
              <span className={styles.authenticationMethodsStyle}>
                {props.authenticationMethods}
              </span>
              <button className={styles.authenticationButtonWrapper}>
                <Image
                  width={24}
                  height={24}
                  src={'/icons/pencil.svg'}
                  alt={'pencil icon'}
                />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.userNameAndIpWrapper}>
          <div className={styles.userNameWrapper}>
            <span className={styles.usernameStyle}>Username</span>
            <span className={styles.usernameValueStyle}>{props.userName}</span>
          </div>
          <div className={styles.IpAlllowWrapper}>
            <span className={styles.ipAllowCaptionStyle}>IP allow list</span>
            <div className={styles.ipAllowedAndButtonWrapper}>
              <span className={styles.ipAllowStyle}>{props.IpAllowed}</span>
              <button className={styles.ipAllowedButtonWrapper}>
                <Image
                  width={24}
                  height={24}
                  src={'/icons/pencil.svg'}
                  alt={'pencil icon'}
                />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.passwordAndFtpWrapper}>
          <div className={styles.passwordWrapper}>
            <span className={styles.passwordCaptionStyle}>Password</span>
            <div className={styles.passwordAndButtonWrapper}>
              <span className={styles.passwordStyle}>{props.password}</span>
            </div>
          </div>
          <div className={styles.ftpWrapper}>
            <div>
              <span className={styles.ftpCaptionStyle}>
                FTP client config files
              </span>
              <div className={styles.passwordAndButtonWrapper}>
                <span className={styles.passwordStyle}>{props.ftp}</span>
                <button className={styles.downloadButtonWrapper}>
                  <Image
                    width={24}
                    height={24}
                    src={'/icons/downloadIcon.svg'}
                    alt={'download icon'}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SftpShh;
