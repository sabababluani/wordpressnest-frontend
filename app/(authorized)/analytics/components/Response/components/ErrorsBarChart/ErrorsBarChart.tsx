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
import { ErrorsBarChartPropsInterface } from './interfaces/errors-bar-chart-props.interface';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ErrorsBarChart = (props: ErrorsBarChartPropsInterface) => {
  const totalValues = props.datasets.map((dataset) =>
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
    labels: props.labels,
    datasets: props.datasets.map((dataset) => ({
      ...dataset,
      barThickness: 32,
      borderRadius: 6,
    })),
  };

  return (
    <div className={styles.wrapper}>
      <h2>{props.heading}</h2>
      <div className={styles.container}>
        {props.datasets.map((dataset, index) => (
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