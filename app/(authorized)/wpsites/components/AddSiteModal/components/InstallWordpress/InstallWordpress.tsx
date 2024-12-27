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
  const [data, setData] = useState<SetInfoPropsInterface | undefined>({
    siteName: '',
    siteTitle: '',
    wpAdminUser: '',
    wpAdminPassword: '',
    wpAdminEmail: '',
  });
  const onSubmit = async (data: SetInfoPropsInterface) => {
    try {
      if (data)
        await createData('/wordpress/setup', {
          ...data,
        });
    } catch (e) {
      console.log(e);
    }
  };

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
      info={data!}
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
