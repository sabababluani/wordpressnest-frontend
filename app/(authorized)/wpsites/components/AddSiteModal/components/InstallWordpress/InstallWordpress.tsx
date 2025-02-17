import { useState } from 'react';
import LoadingModal from './components/LoadingModal/LoadingModal';
import SiteOptions from './components/SiteOptions/SiteOptions';
import WpOptions from './components/WpOptions/WpOptions';
import styles from './InstallWordpress.module.scss';
import { createData } from '@/app/api/crudService';
import { SetInfoPropsInterface } from './interfaces/set-info-props.interface';
import { useNotification } from '@/app/contexts/NotificationContext';
import { useModalContext } from '../ModalContext/ModalContext';

interface InstallWordpressProps {
  onStepChange: (step: number) => void;
  currentStep: number;
  way?: string;
}

const InstallWordpress: React.FC<InstallWordpressProps> = ({
  onStepChange,
  currentStep,
}) => {
  const [data, setData] = useState<SetInfoPropsInterface>({
    siteName: '',
    siteTitle: '',
    wpAdminUser: '',
    wpAdminPassword: '',
    wpAdminEmail: '',
  });
  const { showNotification } = useNotification();

  const { setShouldCloseAddSiteModal } = useModalContext();

  const onSubmit = async (data: SetInfoPropsInterface) => {
    try {
      await createData('/wordpress/setup', { ...data });
      setShouldCloseAddSiteModal(true);
      showNotification('Site created successfully', 'success');
    } catch (e) {
      setShouldCloseAddSiteModal(true);
      showNotification(
        'Site creation failed. Please try again later.',
        'error',
      );
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
      info={data}
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
