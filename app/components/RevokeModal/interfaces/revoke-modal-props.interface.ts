export interface RevokeModalPropsInterface {
  onClose: () => void;
  onSuccess: () => void;
  headline: string;
  content: string;
  buttonText: string;
  loading?: boolean;
  setLoading?: React.Dispatch<React.SetStateAction<boolean>>;
}
