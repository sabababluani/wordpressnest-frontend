export interface PluginUpdateModalPropsInterface {
  pluginName?: string;
  onClose: () => void;
  onActivate: () => void;
  type: 'plugin' | 'theme';
}
