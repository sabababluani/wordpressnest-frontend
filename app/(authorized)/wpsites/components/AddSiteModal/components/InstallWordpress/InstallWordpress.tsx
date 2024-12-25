import { useState } from 'react';
import ChooseWay from '../ChooseWay/ChooseWay';
import LoadingModal from './components/LoadingModal/LoadingModal';
import SiteOptions from './components/SiteOptions/SiteOptions';
import WpOptions from './components/WpOptions/WpOptions';
import styles from './InstallWordpress.module.scss';

interface InstallWordpressProps {
  onStepChange: (step: number) => void;
}

const InstallWordpress: React.FC<InstallWordpressProps> = ({
  onStepChange,
}) => {
  const [currentStep, setStep] = useState<number>(1);

  const handleStepChange = (step: number) => {
    setStep(step);
    onStepChange(step);
  };

  const renderContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <ChooseWay setStep={handleStepChange} currentStep={currentStep} />
        );
      case 2:
        return (
          <SiteOptions setStep={handleStepChange} currentStep={currentStep} />
        );
      case 3:
        return (
          <WpOptions setStep={handleStepChange} currentStep={currentStep} />
        );
      case 4:
        return <LoadingModal />;
      default:
        return null;
    }
  };

  return <div className={styles.container}>{renderContent()}</div>;
};

export default InstallWordpress;
