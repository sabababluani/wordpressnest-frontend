export interface SiteInterface {
  id: number;
  siteTitle: string;
  podName: string;
  nameSpace: string;
  phpVersion: string;
  wpVersion: string;
  port: number;
  siteName: string;
  dbName: string;
  nodeIp: string;
  wpfullIp: string;
  phpAdminFullIp: string;
}

export interface UserInterface {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  setup: SiteInterface[];
}
