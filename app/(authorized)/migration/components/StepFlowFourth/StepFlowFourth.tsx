'use client';

import { Checkbox, Switch } from 'antd';
import styles from './StepFlowFourth.module.scss';
import { useState, ChangeEvent } from 'react';

const StepFlowFourth = () => {
  const [isActiveCheckbox, setIsActiveCheckbox] = useState<boolean>(true);
  const [domainName, setDomainName] = useState<string>('');
  const [wpUsername, setWpUsername] = useState<string>('');
  const [wpPassword, setWpPassword] = useState<string>('');
  const [wpAdminUrl, setWpAdminUrl] = useState<string>('');

  const [isBedrock, setIsBedrock] = useState<boolean>(false);
  const [isEcommerce, setIsEcommerce] = useState<boolean>(false);
  const [isMultisite, setIsMultisite] = useState<boolean>(false);
  const [isHttps, setIsHttps] = useState<boolean>(false);

  const onCheckboxValueChange = () => {
    setIsActiveCheckbox((prev: boolean) => !prev);
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    setState: (value: string) => void,
  ) => {
    setState(e.target.value);
  };

  const onToggleBedrockChange = () => setIsBedrock((prev) => !prev);
  const onToggleEcommerceChange = () => setIsEcommerce((prev) => !prev);
  const onToggleMultisiteChange = () => setIsMultisite((prev) => !prev);
  const onToggleHttpsChange = () => setIsHttps((prev) => !prev);

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.firstContainer}>
        <div className={styles.firstContainersTopContainer}>
          <div className={styles.captionWrapper}>
            <span className={styles.firstContainersMainCaption}>
              Domain name of site to transfer
            </span>
            <span className={styles.firstContainersSubmainCaption}>
              Add multiple domains as new lines
            </span>
          </div>
          <input
            type="text"
            className={styles.firstContainersInput}
            value={domainName}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleInputChange(e, setDomainName)
            }
          />
        </div>
        <div className={styles.firstContainersBottomContainer}>
          <div className={styles.checkboxWrapper}>
            <Checkbox
              checked={isActiveCheckbox}
              onClick={onCheckboxValueChange}
            />
            <div className={styles.besideCheckboxWrapper}>
              <span>Add domain with wildcard (recommended)</span>
              <span>
                Adding the wildcard domain makes the verification, pointing, and
                issuing of an SSL certificate for all subdomains possible and
                saves you the trouble of adding subdomains separately.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.secondContainer}>
        <div>
          <div className={styles.inputAndCaptionWrapper}>
            <div className={styles.ftpUsernameWrapper}>
              <span className={styles.inputLabel}>WordPress Username</span>
              <input
                type="text"
                className={styles.ftpPassowordInputStyle}
                value={wpUsername}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(e, setWpUsername)
                }
              />
            </div>
            <div className={styles.ftpPasswordWrapper}>
              <span className={styles.inputLabel}>WordPress Password</span>
              <input
                type="text"
                className={styles.ftpPassowordInputStyle}
                value={wpPassword}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(e, setWpPassword)
                }
              />
            </div>
          </div>
          <div className={styles.lastWordPressWrapper}>
            <span className={styles.lastSelectLabel}>WordPress admin URL</span>
            <input
              type="text"
              className={styles.wordPressInputStyle}
              value={wpAdminUrl}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleInputChange(e, setWpAdminUrl)
              }
            />
          </div>
        </div>
      </div>
      <div className={styles.thirdContainer}>
        <div>
          <span>Bedrock, Trellis</span>
          <div className={styles.toggleWrapper}>
            <Switch
              className={styles.toggleStyle}
              checked={isBedrock}
              onChange={onToggleBedrockChange}
            />
          </div>
        </div>
        <div>
          <span>Is it an ecommerce, community, or membership site?</span>
          <div className={styles.toggleWrapper}>
            <Switch
              className={styles.toggleStyle}
              checked={isEcommerce}
              onChange={onToggleEcommerceChange}
            />
          </div>
        </div>
        <div>
          <span>Is it a multisite installation?</span>
          <div className={styles.toggleWrapper}>
            <Switch
              className={styles.toggleStyle}
              checked={isMultisite}
              onChange={onToggleMultisiteChange}
            />
          </div>
        </div>
        <div>
          <span>Does your site use HTTPS?</span>
          <div className={styles.toggleWrapper}>
            <Switch
              className={styles.toggleStyle}
              checked={isHttps}
              onChange={onToggleHttpsChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepFlowFourth;
