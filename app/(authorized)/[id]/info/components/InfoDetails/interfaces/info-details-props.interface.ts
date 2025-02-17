import { SiteInterface } from '@/app/components/Navigation/interfaces/navigation.props.interface';

export interface InfoDetailsPropsInterface {
  site: SiteInterface;
  version?: { phpVersion: string };
  database?: { Name: string };
  dbPassword?: string;
  onOpenResetModal: () => void;
  onOpenDeleteModal: () => void;
  onOpenProxyModal: () => void;
  onOpenRenameModal: () => void;
  onOpenLabelModal: () => void;
  onOpenPasswordExpirationModal: () => void;
}
