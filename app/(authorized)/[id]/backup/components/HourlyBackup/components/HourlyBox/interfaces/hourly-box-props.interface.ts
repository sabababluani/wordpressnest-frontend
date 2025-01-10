export interface HourlyBoxPropsInterface {
  id: number;
  hours: string;
  price: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
}
