export interface EnableExternalTablePropsInterface {
  id: number;
  formatedCreatedAt: string;
  size: string;
  storage: string;
  status: string;
}

export interface EnableExternalTableProps {
  dataSource: EnableExternalTablePropsInterface[];
}
