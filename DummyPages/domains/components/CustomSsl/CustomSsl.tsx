import styles from './CustomSsl.module.scss';
import { CustomSslPropsInterface } from './interfaces/custom-ssl-props.interface';
import { useState } from 'react';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import ModalHeader from '@/app/components/ModalHeader/ModalHeader';

const CustomSsl = (props: CustomSslPropsInterface) => {
  const [steper, setSteper] = useState(1);

  return (
    <div>
      <ModalHeader headline="Add Domain" onClose={props.onClose} />
      <div className={styles.containerWrapper}>
        <div className={styles.container}>
          <div className={styles.steper}>
            <span>Add Domains</span>
            <div className={styles.progress}>
              <div className={styles.circle}></div>
              <div className={styles.line}></div>
            </div>
          </div>
          <div className={styles.steper}>
            <span>Verification</span>
            <div className={styles.progress}>
              <div
                className={steper === 1 ? styles.grayCircle : styles.circle}
              ></div>
              <div
                className={steper === 1 ? styles.lineCircle : styles.line}
              ></div>
            </div>
          </div>
        </div>
        {steper === 1 ? (
          <div className={styles.content}>
            <p>
              To use a custom SSL certificate, you will need.Key and.cert
              files.Entering.key and .cert files here will overwrite the current
              SSL certificate. We will apply your custom SSL certificate to the
              domains below:
            </p>
            <div className={styles.boldContent}>
              <span>
                kinstabandzia.kinsta.cloud (You cannot add custom SSL
                certificates to temporary domains.)
              </span>
              <div className={styles.miniContainer}>
                <div className={styles.miniCircle}></div>
                <span>*.kinstabandzia.kinsta.cloud</span>
              </div>
            </div>
            <div className={styles.buttons}>
              <Button
                backgroundColor={buttonbackgroundColorEnum.grey}
                innerContent="Cancel"
                onClick={props.onClose}
              />
              <Button
                backgroundColor={buttonbackgroundColorEnum.black}
                innerContent="Next"
                onClick={() => setSteper(2)}
              />
            </div>
          </div>
        ) : (
          <div className={styles.secondWrapper}>
            <p>
              Paste the contents of the .key and a .cert file into the fields
              below.
            </p>
            <div className={styles.textareaContainer}>
              <span>.key file contents</span>
              <textarea></textarea>
            </div>
            <div className={styles.textareaContainer}>
              <span>.cert file contents</span>
              <textarea></textarea>
            </div>
            <p>
              Adding the certificate may take a minute or two. Feel free to
              navigate away while you wait. We will notify you when the
              certificates have been added.
            </p>
            <div className={styles.buttons}>
              <Button
                backgroundColor={buttonbackgroundColorEnum.grey}
                innerContent="Cancel"
                onClick={() => setSteper(1)}
              />
              <Button
                backgroundColor={buttonbackgroundColorEnum.black}
                innerContent="Add Certificate"
                onClick={props.onClose}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomSsl;
