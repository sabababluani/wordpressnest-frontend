import { buttonbackgroundColorEnum } from '../enum/button.enum';

export interface ButtonDataInterface {
  innerContent?: string;
  backgroundColor: buttonbackgroundColorEnum;
  innerContentIconActive?: boolean;
  innerContentIcon?: string;
  disableButton?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  buttonActive?: boolean;
}
