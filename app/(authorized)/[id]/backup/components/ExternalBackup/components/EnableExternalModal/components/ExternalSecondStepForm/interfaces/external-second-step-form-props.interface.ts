import { UseFormSetValue } from 'react-hook-form';
import { EnableExternalBackendPropsInterface } from '../../../interfaces/enable-external-modal-backend-props.interface';

export interface ExternalSecondStepFormPropsInterface {
  watch: (name: string) => boolean;
  setValue: UseFormSetValue<EnableExternalBackendPropsInterface>;
  onCancel: () => void;
  onNext: () => void;
}
