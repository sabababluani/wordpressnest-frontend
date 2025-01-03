import { PluginDataPropsInterface } from '../../PluginTable/interfaces/plugin-table.interfaces';

export interface UpdateThemesAndPluginsProps {
  type: 'plugin' | 'theme';
  selectedPlugins: PluginDataPropsInterface[];
  onClose: () => void;
}
