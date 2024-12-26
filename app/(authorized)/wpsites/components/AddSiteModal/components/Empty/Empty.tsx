import { AddSiteModalPropsInterface } from '../../interfaces/add-site-modal.props.interface';
import EmptyInstall from './components/EmptyInstall/EmptyInstall';

const Empty: React.FC<AddSiteModalPropsInterface> = ({
  click,
  onStepChange,
  currentStep,
}) => {
  return (
    click === 2 && (
      <EmptyInstall currentStep={currentStep} setStep={onStepChange} />
    )
  );
};

export default Empty;
