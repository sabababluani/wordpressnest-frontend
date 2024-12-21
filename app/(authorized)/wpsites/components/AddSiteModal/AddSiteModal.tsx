import Button from '@/app/components/Button/Button';
import styles from './AddSiteModal.module.scss';
import ChooseWay from './components/ChooseWay/ChooseWay';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import SiteOptions from './components/SiteOptions/SiteOptions';
import WpOptions from './components/WpOptions/WpOptions';
import LoadingModal from './components/LoadingModal/LoadingModal';
import Image from 'next/image';
import { AddSiteModalPropsInterface } from './interfaces/add-site-modal.props.interface';

const AddSiteModal: React.FC<AddSiteModalPropsInterface> = ({
  click,
  onContinue,
  onBack,
  onClose,
}) => {
  return (
    <div className={click > 1 ? `${styles.stepsModal}` : `${styles.wrapper}`}>
      <div className={styles.header}>
        <span className={styles.headline}>
          {click === 1 ? 'Add site' : 'Add new WordPress site'}
        </span>
        <Image
          src="/icons/close-mini.svg"
          width={24}
          height={24}
          alt="close"
          className={styles.close}
          onClick={onClose}
        />
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          {click === 1 ? (
            <ChooseWay />
          ) : click === 2 ? (
            <SiteOptions />
          ) : click === 3 ? (
            <WpOptions />
          ) : click === 4 ? (
            <LoadingModal />
          ) : null}
        </div>
        <div
          className={click === 4 ? `${styles.noneFooter}` : `${styles.footer}`}
        >
          <Button
            innerContent="Back"
            backgroundColor={buttonbackgroundColorEnum.white}
            onClick={onBack}
          />
          <Button
            innerContent="Continue"
            backgroundColor={buttonbackgroundColorEnum.black}
            onClick={onContinue}
          />
        </div>
      </div>
    </div>
  );
};

export default AddSiteModal;
