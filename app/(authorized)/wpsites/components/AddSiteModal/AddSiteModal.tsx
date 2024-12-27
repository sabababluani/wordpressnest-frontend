import styles from './AddSiteModal.module.scss';
import Image from 'next/image';
import InstallWordpress from './components/InstallWordpress/InstallWordpress';
import { AddSiteModalPropsInterface } from './interfaces/add-site-modal.props.interface';
import Clone from './components/Clone/Clone';
import { ChooseWayEnum } from './components/ChooseWay/types/enums/choose-way.enum';
import Empty from './components/Empty/Empty';
import { useState } from 'react';
import ChooseWay from './components/ChooseWay/ChooseWay';

const AddSiteModal: React.FC<AddSiteModalPropsInterface> = ({
  onClose,
  onStepChange,
  currentStep,
}) => {
  const [chooseWay, setChooseWay] = useState<ChooseWayEnum | null>(null);
  const onDecision = () => {
    if (chooseWay === 'install') {
      return (
        <InstallWordpress
          onStepChange={onStepChange}
          currentStep={currentStep}
        />
      );
    } else if (chooseWay === 'clone') {
      return (
        <Clone
          click={currentStep}
          onClose={onClose}
          onStepChange={onStepChange}
          currentStep={currentStep}
        />
      );
    } else if (chooseWay === 'empty') {
      return (
        <Empty
          click={currentStep}
          onStepChange={onStepChange}
          currentStep={currentStep}
          onClose={onClose}
        />
      );
    }
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.headline}>{'Add new WordPress site'}</span>
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
        <ChooseWay
          setStep={onStepChange}
          currentStep={currentStep}
          setChooseWay={setChooseWay}
        />
        {onDecision()}
      </div>
    </div>
  );
};

export default AddSiteModal;
