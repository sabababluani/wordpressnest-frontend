'use client';

import styles from './HalfCutChart.module.scss';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, Legend, ArcElement, Title } from 'chart.js';
import { HalfCutChartPropsInterface } from './interface/half-cut-chart-props.interface';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const HalfCutChart: React.FC<HalfCutChartPropsInterface> = ({ used, full }) => {
  const remaining = full - used;
  const percentage = (used / full) * 100;

  const getColor = (percentage: number) => {
    if (percentage <= 50) return ['#52C41A', '#F6FFED'];
    if (percentage <= 75) return ['#FAAD14', '#FFFBE6'];
    return ['#FF4D4F', '#FFEDED'];
  };

  const [usedColor, remainingColor] = getColor(percentage);

  const chartData = {
    labels: [],
    datasets: [
      {
        data: [used, remaining],
        backgroundColor: [usedColor, remainingColor],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
        displayColors: false,
      },
    },
    rotation: 270,
    circumference: 180,
    cutout: '80%',
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.containers}>
        <div className={styles.whiteContainer}>
          <div
            className={styles.redCircle}
            style={{ backgroundColor: usedColor }}
          ></div>
          <p>
            Used <span>{used}</span>
          </p>
        </div>
        <div className={styles.blueContainer}>
          <div className={styles.grayCircle}></div>
          <p>
            Available <span>{remaining}</span>
          </p>
        </div>
      </div>
      <div className={styles.containerWrapper}>
        <Doughnut data={chartData} options={options} />
        <span className={styles.centerText}>{used}</span>
      </div>
    </div>
  );
};

export default HalfCutChart;
