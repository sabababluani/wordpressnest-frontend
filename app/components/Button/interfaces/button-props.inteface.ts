import { buttonbackgroundColorEnum } from '../enum/button.enum';

export interface ButtonDataInterface {
  innerContent?: string;
  backgroundColor:
    | buttonbackgroundColorEnum.black
    | buttonbackgroundColorEnum.grey
    | buttonbackgroundColorEnum.red
    | buttonbackgroundColorEnum.greyBold
    | buttonbackgroundColorEnum.domainsRed
    | undefined;
  innerContentIconActive?: boolean;
  innerContentIcon?: string;
  onClick?: () => void;
}