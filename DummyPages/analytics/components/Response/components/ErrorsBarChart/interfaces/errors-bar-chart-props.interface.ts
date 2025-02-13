interface Dataset {
  label: string;
  data: number[];
  backgroundColor: string;
}

export interface ErrorsBarChartPropsInterface {
  datasets: Dataset[];
  labels: string[][];
  heading: string;
}
