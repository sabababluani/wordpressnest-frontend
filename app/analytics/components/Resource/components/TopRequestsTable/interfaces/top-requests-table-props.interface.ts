export interface TopRequestsTablePropsInterface {
  key: React.Key;
  path: string;
  requests: number;
  bandwidth: string;
}

export interface TopRequestsTableContentPropsInterface {
  heading: string;
  textContent?: string;
}
