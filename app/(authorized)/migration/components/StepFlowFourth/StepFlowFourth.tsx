'use client';

import { Checkbox, Radio, Select, Switch } from 'antd';
import styles from './StepFlowFourth.module.scss';
import { useState, ChangeEvent } from 'react';

const StepFlowFourth: () => JSX.Element = (): JSX.Element => {
  const [isActiveCheckbox, setIsActiveCheckbox] = useState<boolean>(true);
  const [domainName, setDomainName] = useState<string>('');
  const [wpUsername, setWpUsername] = useState<string>('');
  const [wpPassword, setWpPassword] = useState<string>('');
  const [wpAdminUrl, setWpAdminUrl] = useState<string>('');
  const [, setSelectValue] = useState<string>('');
  const [isBedrock, setIsBedrock] = useState<boolean>(false);
  const [isEcommerce, setIsEcommerce] = useState<boolean>(false);
  const [isMultisite, setIsMultisite] = useState<boolean>(false);
  const [isHttps, setIsHttps] = useState<boolean>(false);
  const [sslOption] = useState<string>('generate');

  const onCheckboxValueChange: () => void = (): void => {
    setIsActiveCheckbox((prev: boolean): boolean => !prev);
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    setState: (value: string) => void,
  ): void => {
    setState(e.target.value);
  };
  
  const setSelectedValue: (value: string) => void = (value: string): void => setSelectValue(value);
  const onToggleBedrockChange:() => void = (): void => setIsBedrock((prev: boolean): boolean => !prev);
  const onToggleEcommerceChange: () => void = (): void =>
    setIsEcommerce((prev: boolean): boolean => !prev);
  const onToggleMultisiteChange: () => void = (): void =>
    setIsMultisite((prev: boolean): boolean => !prev);
  const onToggleHttpsChange: () => void = (): void => setIsHttps((prev: boolean): boolean => !prev);

  // const handleSslOptionChange = (e: any) => {
  //   setSslOption(e.target.value);
  // };

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
          <div className={styles.wrapper}>
            <span>Bedrock, Trellis</span>
            <div className={styles.toggleWrapper}>
              <Switch
                className={styles.toggleStyle}
                checked={isBedrock}
                onChange={onToggleBedrockChange}
              />
            </div>
          </div>
          {isBedrock && (
            <>
              <div className={styles.rootPathWrapper}>
                <span>Root path</span>
                <input
                  type="text"
                  placeholder="/public/current/web"
                  className={styles.isBedRockInputStyle}
                />
              </div>
            </>
          )}
        </div>
        <div>
          <div className={styles.wrapper}>
            <span>Is it an ecommerce, community, or membership site?</span>
            <div className={styles.toggleWrapper}>
              <Switch
                className={styles.toggleStyle}
                checked={isEcommerce}
                onChange={onToggleEcommerceChange}
              />
            </div>
          </div>
          {isEcommerce && (
            <>
              <div className={styles.isEcommerceWrapper}>
                <span>
                  We recommend using maintenance mode for dynamic websites to
                  ensure no orders or content are left behind on your previous
                  host. In maintenance mode, a static page is displayed on your
                  current host, preventing user activity on the site. Once
                  Kinsta sets it up, we do not remove the maintenance mode page.
                  It will continue to be served from your current host until you
                  update the domain&apos;s DNS and your site loads from its new
                  location at Kinsta (which will not be in maintenance mode).
                  Without maintenance mode, orders placed after the start of
                  migration and before the site&apos;s DNS is updated may be
                  left behind at your previous host. <br /> <br />
                  Also if your site has recurring subscriptions, this may need
                  special attention. For example, WooCommerce has further info
                  about this in their documentation. If your site has a special
                  requirement related to recurring payments, please let us know
                  in the next step of this form as a special instruction.
                </span>
                <div className={styles.checkboxAndCaptionWrapper}>
                  <div className={styles.checkboxWrapper}>
                    <Checkbox
                      checked={isActiveCheckbox}
                      onClick={onCheckboxValueChange}
                    />
                  </div>
                  <span className={styles.maintenanceStyle}>
                    Use maintenance mode
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
        <div className={styles.installWrapper}>
          <div className={styles.wrapper}>
            <span>Is it a multisite installation?</span>
            <div className={styles.toggleWrapper}>
              <Switch
                className={styles.toggleStyle}
                checked={isMultisite}
                onChange={onToggleMultisiteChange}
              />
            </div>
          </div>
          {isMultisite && (
            <>
              <div className={styles.multisiteWrapper}>
                <span>Multisitate type</span>
                <Select
                  options={[{ value: 'dreamhost', label: 'DreamHost' }]}
                  className={styles.specificSelect}
                  placeholder={'Subdirectory'}
                  onChange={(value: string) => setSelectedValue(value)}
                />
              </div>
            </>
          )}
        </div>
        <div>
          <div className={styles.wrapper}>
            <span>Does your site use HTTPS?</span>
            <div className={styles.toggleWrapper}>
              <Switch
                className={styles.toggleStyle}
                checked={isHttps}
                onChange={onToggleHttpsChange}
              />
            </div>
          </div>
          {isHttps && (
            <>
              <div className={styles.forCheckboxAndCaptionWrapper}>
                <span>
                  Should we generate a new certificate, or do you want to use
                  your existing or premium certificate?
                </span>
                <div className={styles.checkboxWrapper}>
                  <div className={styles.lastCheckboxFirstWrapper}>
                    <div className={styles.types}>
                      <Radio
                        value="generate"
                        checked={sslOption === 'generate'}
                        // onChange={handleSslOptionChange}
                      />
                      <div>
                        <span className={styles.generateCaptionStyle}>
                          Generate new free certificate
                        </span>
                        <span className={styles.sslCaptionStyle}>
                          SSL certificates are provided by Cloudflare and renew
                          automatically if you use Kinsta.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.lastCheckboxSecondWrapper}>
                    <div className={styles.types}>
                      <Radio
                        value="existing"
                        checked={sslOption === 'existing'}
                        // onChange={handleSslOptionChange}
                      />
                      <div>
                        <span>Use existing certificate</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default StepFlowFourth;
