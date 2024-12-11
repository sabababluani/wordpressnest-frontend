
import styles from './ThirdChecksContainer.module.scss';

interface asd {
    checkboxActive: boolean;
}


const ThirdChecksContainer = (props: asd) => {
    return (
        <>
            {
                props.checkboxActive &&
                <div className={styles.thirdCheckboxBottomContainer}>
                    <span className={styles.thirdChecksMainCaptionStyle}>
                        We offer unlimited free migrations from all hosting
                        providers including: A2 Hosting, Bluehost, Cloudways,
                        DreamHost, Flywheel, GoDaddy, HostGator, Pagely, Pantheon,
                        SiteGround, tsoHost, WP Engine, or WPX Hosting.
                    </span>
                </div>
            }
        </>
    )
}

export default ThirdChecksContainer;