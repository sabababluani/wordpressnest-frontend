import { AddSiteModalPropsInterface } from '../../interfaces/add-site-modal.props.interface';
import CloneInstall from './components/CloneInstall/CloneInstall';

const Clone: React.FC<AddSiteModalPropsInterface> = ({
  click,
  onStepChange,
  currentStep,
}) => {
  return (
    click === 2 && (
      <CloneInstall currentStep={currentStep} onStepChange={onStepChange} />
    )
  );
};

export default Clone;
