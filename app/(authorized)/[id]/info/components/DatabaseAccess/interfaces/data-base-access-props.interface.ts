export interface DataBasePropsInterface {
  database: string | undefined;
  databaseUsername: string;
  databasePassword: string | undefined;
  ip: string;
  phpAdmin: string;
}

export interface PasswordField {
  caption: string;
  innerContent: string | undefined;
  additionalHref: string;
  additionalHref2: string;
  additionalHref3: string;
  onClick: () => void;
}
