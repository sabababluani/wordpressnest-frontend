export interface ActivateModalPropsInterface {
  pluginName?: string;
  onClose: () => void;
  onActivate: () => void;
  modalAction: 'activate' | 'deactivate';
  loading?: boolean;
  setLoading?: React.Dispatch<React.SetStateAction<boolean>>;
}
