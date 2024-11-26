export interface UsersTablePropsInterface {
  ID: number;
  userPhoto?: string;
  user_login: string;
  user_email: string;
  roles: string;
  onClose?: boolean;
  first_name: string;
  last_name: string;
}
