export interface ManualBackupCreateModalPropsInterface {
  onClose: () => void;
  mutate: () => void;
  mutateProgress: () => void;
  loading?: boolean;
  setLoading?: React.Dispatch<React.SetStateAction<boolean>>;
}
