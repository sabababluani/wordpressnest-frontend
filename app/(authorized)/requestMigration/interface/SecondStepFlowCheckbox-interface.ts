export interface SecondStepFlowCheckboxPropsInterface {
  mainCaption: string;
  description: string;
  buttonActive?: boolean;
  activeCheckbox: number | undefined;
  firstCheckboxCoefficient?: number;
  secondCheckboxCoefficient?: number;
  onClick: (num: number | undefined) => void;
}
