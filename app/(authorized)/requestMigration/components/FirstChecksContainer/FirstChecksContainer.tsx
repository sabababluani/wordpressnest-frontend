import Image from 'next/image';
import styles from './FirstChecksContainer.module.scss';

const FirstCheckContainer = () => {
  return (
    <div className={styles.firstChecksBottomContainer}>
      <span className={styles.firstChecksCaptionMain}>
        We offer unlimited free migrations from all hosting providers including:
        A2 Hosting, Bluehost, Cloudways, DreamHost, Flywheel, GoDaddy,
        HostGator, Pagely, Pantheon, SiteGround, tsoHost, WP Engine, or WPX
        Hosting.
      </span>
      <div className={styles.firstchecksContainerWrapper}>
        <div className={styles.firstChecksFirstContairsWrapper}>
          <span className={styles.firstChecksFirstContairsWrapperCaption}>
            Security and safety
          </span>
          <div className={styles.firstChecksSmallWrapper}>
            <Image
              width={24}
              height={24}
              src={'icons/locker.svg'}
              alt={'locker icon'}
            />
            <span className={styles.firstChecksDescriptionStyle}>
              To perform the transfer we ask for a number of passwords. We value
              and guard your privacy. This form is highly secured over SSL.
            </span>
          </div>
          <div className={styles.firstChecksSmallWrapper}>
            <Image
              width={24}
              height={24}
              src={'icons/folders.svg'}
              alt={'locker icon'}
            />
            <span className={styles.firstChecksDescriptionStyle}>
              To perform the transfer we ask for a number of passwords. We value
              and guard your privacy. This form is highly secured over SSL.
            </span>
          </div>
          <div className={styles.firstChecksSmallWrapper}>
            <Image
              width={24}
              height={24}
              src={'icons/group.svg'}
              alt={'locker icon'}
            />
            <span className={styles.firstChecksDescriptionStyle}>
              We will scan and remediate Malware on any sites transferred to us
              for free as part of our Security Guarantee.
            </span>
          </div>
        </div>

        <div className={styles.firstChecksFirstContairsWrapper}>
          <span className={styles.firstChecksFirstContairsWrapperCaption}>
            Security and safety
          </span>
          <div className={styles.firstChecksSmallWrapper}>
            <Image
              width={24}
              height={24}
              src={'icons/telegramIcon.svg'}
              alt={'locker icon'}
            />
            <span className={styles.firstChecksDescriptionStyle}>
              To perform the transfer we ask for a number of passwords. We value
              and guard your privacy. This form is highly secured over SSL.
            </span>
          </div>
          <div className={styles.firstChecksSmallWrapper}>
            <span className={styles.descriptionsWithoutIcons}>
              For migrations you&apos;d like performed as soon as possible,
              we&apos;ll send you an update when the migration starts. We will
              then keep you informed about its progress.
            </span>
          </div>
          <div className={styles.firstChecksSmallWrapper}>
            <span className={styles.descriptionsWithoutIcons}>
              Once the migration is complete we&apos;ll send you details for
              testing the site, and instructions on how you&apos;ll be able to
              point your website to Kinsta if everything looks good.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstCheckContainer;
