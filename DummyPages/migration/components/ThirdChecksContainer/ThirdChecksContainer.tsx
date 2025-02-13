import { ThirdChecksContainerPropsInterface } from '../../interface/third-checks-container-props.interface';
import styles from './ThirdChecksContainer.module.scss';

const ThirdChecksContainer = (props: ThirdChecksContainerPropsInterface) => {
  return (
    <>
      {props.checkboxActive && (
        <div className={styles.thirdCheckboxBottomContainer}>
          <span className={styles.thirdChecksMainCaptionStyle}>
            We offer unlimited free migrations from all hosting providers
            including: A2 Hosting, Bluehost, Cloudways, DreamHost, Flywheel,
            GoDaddy, HostGator, Pagely, Pantheon, SiteGround, tsoHost, WP
            Engine, or WPX Hosting.
          </span>
        </div>
      )}
    </>
  );
};

export default ThirdChecksContainer;
