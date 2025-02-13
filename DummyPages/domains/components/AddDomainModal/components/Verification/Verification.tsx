import Button from '@/app/components/Button/Button';
import styles from './Verification.module.scss';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { AddDomainModalPropsInterface } from '../../interfaces/add-domain-modal-props.interface';

const Verification = (props: AddDomainModalPropsInterface) => {
  return (
    <div className={styles.verificationWrapper}>
      <div>
        <span className={styles.verificationText}>
          Now go to the domain&apos;s DNS management service (that could be your
          domain registrar or a separate DNS service) and add the TXT record
          below to verify ownership of this domain. TXT record
        </span>
      </div>
      <div>
        <div className={styles.middleVerification}>
          <div className={styles.record}>
            <span className={styles.txt}>TXT record</span>
            <span className={styles.host}>Name/host</span>
            <span className={styles.hostingVerification}>
              Hosting-verification-92f23ae
            </span>
          </div>
          <div className={styles.verificationValue}>
            <span>Value</span>
            <p>46e-6143a-of9e-846f-bb1874f355fa</p>
          </div>
        </div>
      </div>
      <div>
        <span>
          After you complete this step, it may take up to 24 hours for the
          verification to take effect. We&apos;ll let you know when it&apos;s
          ready. We will then ask you to continue the verification process.
        </span>
      </div>
      <div className={styles.verificationButtons}>
        <Button
          backgroundColor={buttonbackgroundColorEnum.grey}
          innerContent="l'll do it later"
          onClick={props.onClose}
        />
        <Button
          backgroundColor={buttonbackgroundColorEnum.black}
          innerContent="OK. i've done it"
          onClick={props.onClose}
        />
      </div>
    </div>
  );
};

export default Verification;
