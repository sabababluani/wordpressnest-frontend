'use client';

import React from 'react';
import styles from './ResolutionStackedBrChart.module.scss';
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
import { ResolutionStackedBarChartProps } from './interfaces/resolution-stacked-br-chart-props.interface';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const ResolutionStackedBarChart = (props: ResolutionStackedBarChartProps) => {
  const totalValues = props.datasets.map((dataset) =>
    dataset.data.reduce((a, b) => a + b, 0),
  );
  const grandTotal = totalValues.reduce((a, b) => a + b, 0);

  const percentages = totalValues.map((total) =>
    ((total / grandTotal) * 100).toFixed(1),
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
          color: '$primaryColor',
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
      <h1>Desktop vs. Tablet vs. Mobile</h1>
      <div className={styles.container}>
        {props.datasets.map((dataset, index) => (
          <div key={dataset.label} className={styles.dotsWrapper}>
            <div
              className={styles.blackCircle}
              style={{ backgroundColor: dataset.backgroundColor }}
            ></div>
            <p>
              <span>{percentages[index]}%</span> {dataset.label}
            </p>
          </div>
        ))}
      </div>
      <div className={styles.barContainer}>
        <Bar options={options} data={barChartData} />
      </div>
    </div>
  );
};

export default ResolutionStackedBarChart;
