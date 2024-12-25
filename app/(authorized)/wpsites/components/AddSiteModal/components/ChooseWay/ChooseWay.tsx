import { useState } from 'react';
import styles from './ChooseWay.module.scss';
import ChooseCard from './components/ChooseCard/ChooseCard';
import Steper from '../Steper/Steper';

const ChooseWay = ({
  setStep,
  currentStep,
}: {
  setStep: (step: number) => void;
  currentStep: number;
}) => {
  const [install, setInstall] = useState<boolean>(false);
  const [empty, setEmpty] = useState<boolean>(false);
  const [clone, setClone] = useState<boolean>(false);

  const installClick = () => {
    setInstall(true);
    setEmpty(false);
    setClone(false);
  };

  const emptyClick = () => {
    setEmpty(true);
    setClone(false);
    setInstall(false);
  };

  const cloneClick = () => {
    setClone(true);
    setInstall(false);
    setEmpty(false);
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setStep(currentStep - 1);
    }
  };

  const handleContinue = () => {
    setStep(currentStep + 1);
  };

  return (
    <>
      <div className={styles.container}>
        <ChooseCard
          title={'Install WordPress'}
          info={'Install WordPress'}
          active={install}
          onClick={installClick}
        />
        <ChooseCard
          title={'Empty environment'}
          info={'PHP 8.1 without WordPress'}
          active={empty}
          onClick={emptyClick}
        />
        <ChooseCard
          title={'Clone'}
          info={'Select an existing environment and clone it'}
          active={clone}
          onClick={cloneClick}
        />
      </div>
      <div className={styles.steper}>
        <Steper
          onBack={handleBack}
          onContinue={handleContinue}
          click={currentStep}
        />
      </div>
    </>
  );
};

export default ChooseWay;
