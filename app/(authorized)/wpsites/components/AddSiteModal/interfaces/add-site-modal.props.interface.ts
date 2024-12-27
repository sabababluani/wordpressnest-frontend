export interface AddSiteModalPropsInterface {
  onClose: () => void;
  onStepChange: (step: number) => void;
  currentStep: number;
  click?: number;
  way?: string;
}
