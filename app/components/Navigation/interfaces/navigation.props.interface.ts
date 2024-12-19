export interface SiteInterface {
  id: number;
  siteTitle: string;
  podName: string;
  nameSpace: string;
  phpVersion: string;
  port: number;
}

export interface UserInterface {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  setup: SiteInterface[];
}
