export interface EnvironementDetailsPropsInterface {
  path?: string;
  environmentName?: string;
  siteIpAddress?: string;
  wordpressVersion?: string;
  ipAddressForExternalConnections?: string;
  ipAddress?: string;
  phpWorkers?: string;
  onClick: () => void;
}
