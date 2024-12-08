'use client';

import styles from './CurlyBandWidth.module.scss';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ScriptableContext,
  ChartDataset,
} from 'chart.js';
import { CurlyBandwidthPropsInterface } from './interfaces/curly-bandwidth-props.interface';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

const CurlyBandwidth = (props: CurlyBandwidthPropsInterface) => {
  const data = {
    labels: Array.from({ length: 20 }, (_, i) => (i + 1).toString()),

    datasets: [
      {
        label: '',
        data: [
          31, 25, 25, 25, 29, 27, 26, 25, 20, 20, 21, 22, 26, 28, 25, 20, 18,
          25, 20, 20,
        ],
        fill: true,
        backgroundColor: (context: ScriptableContext<'line'>) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) return null;
          const gradient = ctx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom,
          );
          gradient.addColorStop(0, 'rgba(0,0,0,0.4)');
          gradient.addColorStop(1, 'rgba(0,0,0,0.007)');
          return gradient;
        },
        borderWidth: 4,
        borderColor: '#000000',
        tension: 0.6,
        pointRadius: 4,
        pointBackgroundColor: '#000000',
        pointBorderColor: '#FFFFFF',
        pointBorderWidth: 2,
      } as ChartDataset<'line', number[]>,
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          drawOnChartArea: false,
          drawTicks: false,
        },
        ticks: {
          color: '#11141A',
          padding: 12,
        },
        border: {
          display: false,
        },
      },
      y: {
        grid: {
          drawOnChartArea: false,
          drawTicks: false,
        },
        ticks: {
          display: false,
          padding: 12,
        },
        border: {
          display: false,
        },
      },
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.visitsContainer}>
          <div className={styles.visitsWrap}>
            <span className={styles.visits}>{props.visitsText}</span>
            <span className={styles.textContent}>{props.text}</span>
          </div>
          <div>
            <span className={styles.quantify}>{props.quantify}</span>
          </div>
        </div>
        <div className={styles.line}>
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default CurlyBandwidth;
