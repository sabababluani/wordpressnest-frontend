export interface ThemeActivateModalPropsInterface {
  themeName?: string;
  onClose?: () => void;
  onActivate?: () => void;
  loading?: boolean;
  setLoading?: React.Dispatch<React.SetStateAction<boolean>>;
}
