export interface SecondCheckPropsInterface {
  date: (value: string) => void;
  time: (value: string) => void;
  timezone: (value: string) => void;
  timeValue?: string | undefined;
  activecheckbox: boolean;
}
