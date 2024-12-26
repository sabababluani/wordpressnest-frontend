import { Dispatch, SetStateAction, useState } from 'react';
import styles from './ChooseWay.module.scss';
import ChooseCard from './components/ChooseCard/ChooseCard';
import Steper from '../Steper/Steper';
import { ChooseWayEnum } from './types/enums/choose-way.enum';

const ChooseWay = ({
  setStep,
  currentStep,
  setChooseWay,
}: {
  setStep: (step: number) => void;
  currentStep: number;
  setChooseWay: Dispatch<SetStateAction<ChooseWayEnum | null>>;
}) => {
  const [type, setType] = useState<ChooseWayEnum | null>(null);

  const onChoose = (type: ChooseWayEnum) => {
    setType(type);
    setChooseWay(type);
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setStep(currentStep - 1);
    }
  };

  const handleContinue = () => {
    setStep(currentStep + 1);
  };
  if (currentStep !== 1) {
    return null;
  }
  return (
    <>
      <div className={styles.container}>
        <ChooseCard
          title={'Install WordPress'}
          info={'Install WordPress'}
          active={type === ChooseWayEnum.INSTALL}
          onClick={() => onChoose(ChooseWayEnum.INSTALL)}
        />
        <ChooseCard
          title={'Empty environment'}
          info={'PHP 8.1 without WordPress'}
          active={type === ChooseWayEnum.EMPTY}
          onClick={() => onChoose(ChooseWayEnum.EMPTY)}
        />
        <ChooseCard
          title={'Clone'}
          info={'Select an existing environment and clone it'}
          active={type === ChooseWayEnum.CLONE}
          onClick={() => onChoose(ChooseWayEnum.CLONE)}
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
