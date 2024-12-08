interface Notification {
  id: number;
  message: string;
  timeAgo: string;
  date: string;
}

export interface NotificationModalPropsInterface {
  onClose: () => void;
  notifications: Notification[];
}
