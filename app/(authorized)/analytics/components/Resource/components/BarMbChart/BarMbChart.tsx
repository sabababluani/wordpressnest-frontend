'use client';

import React from 'react';
import styles from './BarMbChart.module.scss';
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
import { BarMbChartPropsInterface } from './interfaces/bar-mb-chart-props.interface';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const BarMbChart = (props: BarMbChartPropsInterface) => {
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
        grid: {
          color: 'rgba(255,255,255, 0.15)',
        },
        ticks: {
          color: '#000',
        },
        border: {
          display: false,
        },
      },
      y: {
        grid: {
          color: 'rgba(255,255,255, 0.15)',
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
    labels: [
      ['Sun', '11/3'],
      ['Sun', '11/3'],
      ['Sun', '11/3'],
      ['Sun', '11/3'],
      ['Sun', '11/3'],
      ['Sun', '11/3'],
      ['Sun', '11/3'],
      ['Sun', '11/3'],
      ['Sun', '11/3'],
      ['Sun', '11/3'],
      ['Sun', '11/3'],
      ['Sun', '11/3'],
      ['Sun', '11/3'],
      ['Sun', '11/3'],
      ['Sun', '11/3'],
      ['Sun', '11/3'],
      ['Sun', '11/3'],
      ['Sun', '11/3'],
      ['Sun', '11/3'],
      ['Sun', '11/3'],
    ],
    datasets: [
      {
        label: 'Usage',
        data: [
          920, 300, 150, 980, 220, 222, 920, 300, 150, 980, 220, 222, 300, 150,
          980, 220, 222, 920, 300, 150,
        ],
        backgroundColor: '#000',
        barThickness: 32,
        borderRadius: 6,
      },
    ],
  };

  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.container}>
          <span className={styles.heading}>{props.heading}</span>
          <span className={styles.textContent}>{props.text}</span>
        </div>
        <div className={styles.mbwrapper}>
          <span className={styles.mbContainers}>{props.quantify}</span>
          {props.usage && (
            <div className={styles.usageContainer}>
              <div className={styles.redCircle}></div>
              <div>
                <span>Usage</span>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={styles.barContainer}>
        <Bar options={options} data={barChartData} />
      </div>
    </div>
  );
};

export default BarMbChart;
