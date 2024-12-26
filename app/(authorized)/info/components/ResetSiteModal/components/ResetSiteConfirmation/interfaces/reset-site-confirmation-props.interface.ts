import { ChangeEvent } from 'react';

export interface ResetSiteConfirmatioPropsInterface {
  siteTitle: string | undefined;
  onBack: () => void;
  onClick: (e: ChangeEvent<HTMLInputElement> | React.MouseEvent) => void;
  onChange(e: ChangeEvent<HTMLInputElement>): void;
  validation: boolean;
  siteTitleInputField: string | undefined;
}
