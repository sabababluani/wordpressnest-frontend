'use client';

import React from 'react';
import styles from './ErrorsBarChart.module.scss';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  TooltipItem,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface Dataset {
  label: string;
  data: number[];
  backgroundColor: string;
}

interface ResolutionStackedBarChartProps {
  datasets: Dataset[];
  labels: string[][];
  heading: string;
}

const ErrorsBarChart: React.FC<ResolutionStackedBarChartProps> = ({
  datasets,
  labels,
  heading,
}) => {
  const totalValues = datasets.map((dataset) =>
    dataset.data.reduce((a, b) => a + b, 0)
  );

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (tooltip: TooltipItem<'bar'>) {
            const dataValue = tooltip.raw;
            return `${dataValue} ${dataValue === 1 ? 'MB' : 'MBs'}`;
          },
        },
        usePointStyle: false,
        displayColors: false,
      },
    },
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
        ticks: {
          color: '#000',
        },
        border: {
          display: false,
        },
      },
      y: {
        stacked: true,
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
        border: {
          display: false,
        },
      },
    },
  };

  const barChartData = {
    labels,
    datasets: datasets.map((dataset) => ({
      ...dataset,
      barThickness: 32,
      borderRadius: 6,
    })),
  };

  return (
    <div className={styles.wrapper}>
      <h2>{heading}</h2>
      <div className={styles.container}>
        {datasets.map((dataset, index) => (
          <div key={dataset.label} className={styles.dotsWrapper}>
            <div
              className={styles.cube}
              style={{ backgroundColor: dataset.backgroundColor }}
            ></div>
            <span>
              <span className={styles.label}>{dataset.label}:</span>{' '}
              <span className={styles.total}>{totalValues[index]}</span>
            </span>
          </div>
        ))}
      </div>
      <div className={styles.barContainer}>
        <Bar options={options} data={barChartData} />
      </div>
    </div>
  );
};

export default ErrorsBarChart;
