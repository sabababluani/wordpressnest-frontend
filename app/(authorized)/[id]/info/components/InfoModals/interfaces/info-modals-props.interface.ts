export interface InfoModalsPropsInterface {
  isDeleteModalOpen: boolean;
  isResetModalOpen: boolean;
  isProxyModalOpen: boolean;
  isRenameModalOpen: boolean;
  isLabelModalOpen: boolean;
  isPasswordExpirationModalOpen: boolean;
  onCloseDeleteModal: () => void;
  onCloseResetModal: () => void;
  onCloseProxyModal: () => void;
  onCloseRenameModal: () => void;
  onCloseLabelModal: () => void;
  onClosePasswordExpirationModal: () => void;
  label?: string;
}
