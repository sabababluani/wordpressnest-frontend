export interface SiteNamePropsInterface {
  id: number;
  siteTitle: string;
}

export interface wordPressVersionPropsInterface {
  id: number;
  version: string;
}

export interface wordPressLastUpdateVersionPropsInterface {
  id: number;
  version: string;
  locale: string;
  update: string;
  url: string;
  message: string;
}

export interface portPropsInterface {
  instancePort: number;
  id: number;
}

export interface UserNamePropsIterface {
  id: number;
  wpAdminUser: string;
}

export interface DatabaseNamePropsInterface {
  Name: string;
}
