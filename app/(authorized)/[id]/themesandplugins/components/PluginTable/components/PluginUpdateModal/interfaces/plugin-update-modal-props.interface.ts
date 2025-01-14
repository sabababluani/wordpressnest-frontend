export interface PluginUpdateModalPropsInterface {
  pluginName?: string;
  onClose: () => void;
  onActivate: () => void;
  type: 'plugin' | 'theme';
  loading?: boolean;
  setLoading?: React.Dispatch<React.SetStateAction<boolean>>;
}
