export interface DailyBackupModalPropsInterface {
  onClose: () => void;
  onSuccess: () => void;
  loading?: boolean;
  setLoading?: React.Dispatch<React.SetStateAction<boolean>>;
  date: string;
  backupType: string;
}
