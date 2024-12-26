import { useState } from 'react';
import LoadingModal from './components/LoadingModal/LoadingModal';
import SiteOptions from './components/SiteOptions/SiteOptions';
import WpOptions from './components/WpOptions/WpOptions';
import styles from './InstallWordpress.module.scss';
import { createData } from '@/app/api/crudService';
import { SetInfoPropsInterface } from './interfaces/set-info-props.interface';

interface InstallWordpressProps {
  onStepChange: (step: number) => void;
  currentStep: number;
  way?: string;
}

const InstallWordpress: React.FC<InstallWordpressProps> = ({
  onStepChange,
  currentStep,
}) => {
  // Properly type the state to match SetInfoPropsInterface
  const [data, setData] = useState<SetInfoPropsInterface | undefined>(
    undefined,
  );

  const onSubmit = async () => {
    try {
      if (data)
        await createData<{ data: SetInfoPropsInterface }>(
          '/wordpress/setasjdkj',
          {
            data: data,
          },
        );
    } catch (e) {
      console.log(e);
    }
  };

  console.log(data);

  const stepComponents = [
    <SiteOptions
      setStep={onStepChange}
      currentStep={currentStep}
      setInfo={setData}
      key="siteOptions"
    />,
    <WpOptions
      setStep={onStepChange}
      currentStep={currentStep}
      onSend={onSubmit}
      setInfo={setData}
      key="wpOptions"
    />,
    <LoadingModal key="loadingModal" />,
  ];
  if (currentStep < 2) {
    return null;
  }

  return (
    <div className={styles.container}>{stepComponents[currentStep - 2]}</div>
  );
};

export default InstallWordpress;
