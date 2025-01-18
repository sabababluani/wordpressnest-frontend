export interface PhpRestartModalPropsInterface {
  onClose: () => void;
  onSuccess: () => void;
  loading?: boolean;
  setLoading?: React.Dispatch<React.SetStateAction<boolean>>;
}
