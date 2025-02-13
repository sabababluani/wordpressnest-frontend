import { Checkbox } from 'antd';
import styles from './AddDomainModal.module.scss';
import Image from 'next/image';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { useState } from 'react';
import { AddDomainModalPropsInterface } from './interfaces/add-domain-modal-props.interface';
import Verification from './components/Verification/Verification';
import ModalHeader from '@/app/components/ModalHeader/ModalHeader';

const AddDomainModal = (props: AddDomainModalPropsInterface) => {
  const [isAdvancedOptionsOpen, setIsAdvancedOptionsOpen] = useState(false);
  const [steper, setSteper] = useState(1);

  return (
    <div className={styles.wrapper}>
      <ModalHeader headline="Add domain" onClose={props.onClose} />
      <div className={styles.contentWrapper}>
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
          <>
            <div className={styles.content}>
              <span>
                After adding a domain, it has to be verified and pointed to
                Kinsta. You&apos;ll verify and point your domain by updating DNS
                records. Any time DNS records are updated, you have to wait for
                the changes to take effect. Wait times for DNS changes vary, but
                it could take up to 24 hours
              </span>
            </div>
            <p>We provide an SSL certificate for all domains.</p>
            <div className={styles.domainInputContainer}>
              <span>Domain</span>
              <input placeholder="Enter Domain" type="text" />
            </div>
            <div
              className={styles.advanced}
              onClick={() =>
                setIsAdvancedOptionsOpen((prevState) => !prevState)
              }
            >
              <span>Advanced Option</span>
              <Image
                src={'/icons/arrowDown.svg'}
                alt="arrow"
                width={24}
                height={24}
              />
            </div>
            {isAdvancedOptionsOpen && (
              <>
                <div className={styles.check}>
                  <div className={styles.checkbox}>
                    <Checkbox></Checkbox>
                  </div>
                  <div className={styles.textContent}>
                    <span>Add domain with wildcard (recommended)</span>
                    <p>
                      Adding the wildcard domain makes the verification,
                      pointing, and issuing of an SSL certificate for all
                      subdomains possible and saves you the trouble of adding
                      subdomains separately.
                    </p>
                  </div>
                </div>
                <div className={styles.check}>
                  <div className={styles.checkbox}>
                    <Checkbox></Checkbox>
                  </div>
                  <div className={styles.textContent}>
                    <span>Add domain with wildcard (recommended)</span>
                    <p>
                      Adding the wildcard domain makes the verification,
                      pointing, and issuing of an SSL certificate for all
                      subdomains possible and saves you the trouble of adding
                      subdomains separately.
                    </p>
                  </div>
                </div>
              </>
            )}
            <div className={styles.buttons}>
              <Button
                backgroundColor={buttonbackgroundColorEnum.grey}
                innerContent="Cancel"
                onClick={props.onClose}
              />
              <Button
                backgroundColor={buttonbackgroundColorEnum.black}
                innerContent="Add domain"
                onClick={() => setSteper(2)}
              />
            </div>
          </>
        ) : (
          <Verification onClose={props.onClose} />
        )}
      </div>
    </div>
  );
};

export default AddDomainModal;
