export interface SearchPropsInterface {
  placeholder: string;
  isPadded?: boolean;
  noIcon?: boolean;
  inModal?: boolean;
  onChange?: (value: string) => void;
  onClick?:() => void;
}
