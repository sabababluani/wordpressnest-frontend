import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';

export interface CashingPagesPropsInterface {
  caption: string;
  description: string;
  buttonInnerContent: string;

  dropDownActive?: boolean;
  dropDownInnerContent?: string;

  buttonBackgroundColor:
    | buttonbackgroundColorEnum.black
    | buttonbackgroundColorEnum.greyBold
    | buttonbackgroundColorEnum.grey;
  onClick: () => void;
}
