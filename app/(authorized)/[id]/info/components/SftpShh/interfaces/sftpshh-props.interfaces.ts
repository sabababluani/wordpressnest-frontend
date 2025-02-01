export interface SftpShhPropsInterface {
  host: string;
  passwordExpiration: string;
  ssh: string;
  port: number | undefined;
  authenticationMethods: string;
  userName: string | undefined;
  IpAllowed: string;
  password: string;
  ftp: string;
  onClick: () => void;
}
