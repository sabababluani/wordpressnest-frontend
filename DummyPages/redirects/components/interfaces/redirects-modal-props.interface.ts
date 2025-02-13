import { DataType } from './redirects-props.interface';

export interface RedirectsModalPropsInterface {
  onClose: () => void;
  rowData: DataType | null;
  onSave: (updatedRow: DataType) => void;
}
