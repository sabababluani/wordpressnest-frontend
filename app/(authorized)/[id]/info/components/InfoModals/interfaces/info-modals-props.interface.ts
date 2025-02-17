export interface InfoModalsPropsInterface {
  isDeleteModalOpen: boolean;
  isResetModalOpen: boolean;
  isProxyModalOpen: boolean;
  isRenameModalOpen: boolean;
  isLabelModalOpen: boolean;
  isPasswordExpirationModalOpen: boolean;
  onCloseDeleteModal: VoidFunction;
  onCloseResetModal: VoidFunction;
  onCloseProxyModal: VoidFunction;
  onCloseRenameModal: VoidFunction;
  onCloseLabelModal: VoidFunction;
  onClosePasswordExpirationModal: VoidFunction;
  onMutate: VoidFunction;
  label?: string;
}
