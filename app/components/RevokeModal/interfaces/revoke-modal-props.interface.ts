export interface RevokeModalPropsInterface {
  onClose: () => void;
  onSuccess: () => void;
  headline: string;
  content: string | React.JSX.Element;
  buttonText: string;
  loading?: boolean;
  setLoading?: React.Dispatch<React.SetStateAction<boolean>>;
}
