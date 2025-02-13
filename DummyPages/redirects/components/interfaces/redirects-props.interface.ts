export interface DataType {
  domain: string;
  key: React.Key;
  oldUrl: string;
  newUrl: string;
  statusCode: string;
  redirects?: RedirectsModalPropsInterface[];
}

interface RedirectsModalPropsInterface {
  oldUrl: string;
  newUrl: string;
  statusCode: string;
  domain: string;
  key: React.Key;
}
