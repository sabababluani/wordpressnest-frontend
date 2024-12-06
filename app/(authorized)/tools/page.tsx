'use client';

import { useState } from 'react';
import styles from './page.module.scss';
import Tools from '@/app/(authorized)/tools/components/Tools/Tools';
import DiskSpaceModule from '@/app/components/DiskSpaceModule/DiskSpaceModule';

const ToolsPage = (): JSX.Element => {

  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <>
      {isActive && <DiskSpaceModule moduleDisable={() => setIsActive(false)} />}
      <div className={styles.mainContainer}>
        <div className={styles.topContainer}>
          <span className={styles.mainCaptionStyle}>Tools</span>
          <button onClick={() => setIsActive(prev => !prev)} style={{width: '200px', height: '40px', backgroundColor: 'black', color: 'white', border: '0px', borderRadius: '5PX'}} >
            asdadsa
          </button>
        </div>
        <div className={styles.bottomContainer}>
          <Tools
            iconPath={'arrowRepeat.svg'}
            description={
              'Restarting your PHP engine may resolve some issues that lead to site speed problems or connectivity trouble.'
            }
            caption={'Restart PHP'}
            buttonIconActivate={true}
            buttonIconPath={'loadingButton.svg'}
            ActivatedButtonCaption={'Restart PHP'}
            buttonActive={true}
          />
          <Tools
            iconPath={'secure.svg'}
            description={
              'Use this tool to see warnings, errors, and notices on your website.'
            }
            caption={'WordPress Debugging'}
            toggleActive={true}
          />
          <Tools
            iconPath={'searchTools.svg'}
            description={
              'Find and replace any value in the database, for example, after changing domains.'
            }
            caption={'Search & Replace'}
            buttonActive={true}
            ActivatedButtonCaption={'Search & Replace'}
          />
          <Tools
            iconPath={'monitoring.svg'}
            description={
              'Redirect traffic from HTTP to HTTPS for enhanced security. Search engines prefer HTTPS, so redirecting has a positive impact on SEO.'
            }
            caption={'New Relic Monitoring'}
            buttonActive={true}
            ActivatedButtonCaption={'Start Monitoring'}
          />
          <Tools
            iconPath={'protectionIcon.svg'}
            description={'Add simple .htpasswd protection to your environment.'}
            caption={'Password Protection'}
            toggleActive={true}
          />
          <Tools
            iconPath={'forcehttp.svg'}
            description={
              'Redirect traffic from HTTP to HTTPS for enhanced security. Search engines prefer HTTPS, so redirecting has a positive impact on SEO.'
            }
            caption={'Force HTTPS'}
            toggleActive={true}
          />
          <Tools
            iconPath={'geoLocation.svg'}
            description={
              'Enable Geolocation for the option to add redirect rules that tailor content based on the IP location of website visitors.'
            }
            caption={'Geolocation'}
            toggleActive={true}
          />
          <Tools
            iconPath={'lonCube.svg'}
            description={
              'Enable ionCube Loader on your environment if it has a plugin, theme, or PHP script that uses ionCube to encrypt its code.'
            }
            caption={'IonCube Loader'}
            toggleActive={true}
          />
          <Tools
            iconPath={'phpIcon.svg'}
            description={
              'Use these controls to switch between different PHP versions. We recommend using PHP 8.1 for security and stability.'
            }
            caption={'PHP Engine'}
            toggleActive={true}
          />
          <Tools
            iconPath={'cookieIcon.svg'}
            description={
              'Use this tool to enable or disable removing Set-Cookie headers from cached responses.'
            }
            caption={'Remove set-cookie headers'}
            dropDownActive={true}
          />
          <Tools
            iconPath={'sitePreview.svg'}
            description={
              'Enable Site Preview to test your site before migration without changing your DNS records or database.'
            }
            caption={'Site Preview'}
            toggleActive={true}
          />
          <Tools
            iconPath={'earlyHints.svg'}
            description={
              'Improve loading speed by allowing the browser to preload resources before serving the response from the server.'
            }
            caption={'Early Hints'}
            toggleActive={true}
          />
        </div>
      </div>
    </>
  );
};

export default ToolsPage;
