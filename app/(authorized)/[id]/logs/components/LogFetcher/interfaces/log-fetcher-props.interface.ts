import { UserInterface } from '@/app/components/Navigation/interfaces/navigation.props.interface';

export interface LogFetcherPropsInterface {
  userInfo?: UserInterface;
  logFile: string;
  limit: string;
  infoLogs: string[];
  searchQuery: string;
}
