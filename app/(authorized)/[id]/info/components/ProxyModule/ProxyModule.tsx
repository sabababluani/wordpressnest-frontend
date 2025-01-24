import Button from '@/app/components/Button/Button';
import ExitButton from './component/ExitButton/ExitButton';
import PriceDetails from './component/PriceDetails/PriceDetails';
import WhatWillHappen from './component/ProxyModuleInnerComp/WhatWillHappen';
import styles from './Proxy.module.scss';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';

const ProxyModule = ({
  onClick,
}: {
  onClick: () => void;
}): React.JSX.Element => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.topContainer}>
          <span className={styles.mainCaptionStyle}>
            Manage Reverse proxy add-on
          </span>
          <ExitButton onClick={onClick} />
        </div>
        <div className={styles.bottomContainer}>
          <WhatWillHappen
            caption={'What will happen'}
            description={
              'Our Team will help you set up or change the Reverse proxy add-on. As a next step, a new conversation will start.'
            }
          />
          <PriceDetails caption={'Price'} />
        </div>
      </div>
      <div className={styles.furtherBottomContainer}>
        <Button
          onClick={onClick}
          backgroundColor={buttonbackgroundColorEnum.white}
          innerContent={'Cancel'}
        />
        <Button
          backgroundColor={buttonbackgroundColorEnum.black}
          innerContent={'Open Chat'}
        />
      </div>
    </>
  );
};

export default ProxyModule;
