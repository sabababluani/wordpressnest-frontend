export interface SiteNamePropsInterface {
    siteTitle: string;
}

export interface wordPressVersionPropsInterface {
    version: string;
}

export interface wordPressLastUpdateVersionPropsInterface {
    version: string;
    locale: string;
    update: string;
    url: string
    message: string
}

export interface portPropsInterface {
    instancePort: number;
}

export interface UserNamePropsIterface {
    wpAdminUser: string;
}

export interface DatabaseNamePropsInterface {
    Name: string;
    Size: string;
}