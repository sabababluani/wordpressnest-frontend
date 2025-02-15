'use client';

import Link from 'next/link';
import Button from '@/app/components/Button/Button';
import {
  buttonbackgroundColorEnum,
  innerContentIconEnum,
} from '@/app/components/Button/enum/button.enum';
import styles from './InfoHeader.module.scss';
import { InfoHeaderPropsInterface } from './interfaces/info-header-props.interface';

const InfoHeader = (props: InfoHeaderPropsInterface) => (
  <div className={styles.topContainer}>
    <span className={styles.captionStyle}>Side Information</span>
    <div className={styles.buttonWrapper}>
      <Link
        replace
        target="_blank"
        href={`http://${props.site.wpfullIp}/wp-login.php`}
      >
        <Button
          innerContent="Open WP Admin"
          innerContentIconActive
          innerContentIcon={innerContentIconEnum.wpIcon}
          backgroundColor={buttonbackgroundColorEnum.grey}
        />
      </Link>
      <Link href={`http://${props.site.wpfullIp}`} target="_blank">
        <Button
          innerContent="Visit Site"
          innerContentIcon={innerContentIconEnum.siteIcon}
          innerContentIconActive
          backgroundColor={buttonbackgroundColorEnum.black}
        />
      </Link>
    </div>
  </div>
);

export default InfoHeader;
