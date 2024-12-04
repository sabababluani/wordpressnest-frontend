interface Dataset {
  label: string;
  data: number[];
  backgroundColor: string;
}

export interface CacheBarChartPropsInterface {
  datasets: Dataset[];
  labels: string[][];
  heading: string;
}
