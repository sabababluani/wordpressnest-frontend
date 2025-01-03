export interface ActivateModalPropsInterface {
  pluginName?: string;
  onClose: () => void;
  onActivate: () => void;
  modalAction: 'activate' | 'deactivate';
}
