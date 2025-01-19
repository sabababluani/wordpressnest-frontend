import {
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form';
import { EnableExternalBackendPropsInterface } from '../../../interfaces/enable-external-modal-backend-props.interface';

export interface ExternalFirstStepFormPropsInterface {
  register: UseFormRegister<EnableExternalBackendPropsInterface>;
  watch: UseFormWatch<EnableExternalBackendPropsInterface>;
  setValue: UseFormSetValue<EnableExternalBackendPropsInterface>;
  onCancel: () => void;
  onNext: () => void;
}
