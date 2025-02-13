export interface ResolutionStackedBarChartProps {
  datasets: Dataset[];
  labels: string[][];
}

interface Dataset {
  label: string;
  data: number[];
  backgroundColor: string;
}
