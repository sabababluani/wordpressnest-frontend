import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import CashingPagesContainer from '../CashingPagesContainer/CashingPagesContainer';
import styles from './EdgeCaching.module.scss';

const EdgeCaching = (): JSX.Element => {
  return (
    <div className={styles.bottomContainer}>
      <span className={styles.mainDescriptionStyle}>
        Edge Caching stores your page cache in any of Cloudflare&apos;s 260+
        point-of-presence (PoP) locations worldwide, increasing performance and
        website speed by up to 40%
      </span>
      <div className={styles.containersWrapper}>
        <CashingPagesContainer
          caption={'Mobile Caching'}
          description={
            'Get detailed performance data for troCreate an additional page cache specifically for mobile devices.Desktop cache continues to be served normally.ubleshooting issues. Monitoring impacts site performance, so remember to turn it off.'
          }
          buttonInnerContent={'Enable'}
          buttonBackgroundColor={buttonbackgroundColorEnum.grey}
          onClick={() => {}}
        />
        <CashingPagesContainer
          caption={'Clear Caching'}
          description={
            'This purges the data saved on the Edge Cache in all locations. The process may take up to five minutes to complete.'
          }
          buttonInnerContent={'Clear Caching'}
          buttonBackgroundColor={buttonbackgroundColorEnum.black}
          onClick={() => {}}
        />
        <CashingPagesContainer
          caption={'Clear URL Cache'}
          description={
            "This purges the selected URL's data saved on the Edge Cache in all locations. The process may take up to five minutes to complete."
          }
          buttonInnerContent={'Clear URL Caching'}
          buttonBackgroundColor={buttonbackgroundColorEnum.greyBold}
          dropDownActive={true}
          dropDownInnerContent={'Clear URL Caching'}
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default EdgeCaching;
