'use client';

import styles from './PieChartBox.module.scss';
import { Doughnut } from 'react-chartjs-2';
import { TooltipItem } from 'chart.js';

const PieChartBox = () => {
  const dataValues = [1300, 300, 400, 230];
  const errorTypes = ['200', '300', '400', '500'];
  const total = dataValues.reduce((sum, value) => sum + value, 0);
  const percentages = dataValues.map(
    (value) => ((value / total) * 100).toFixed(2) + '%'
  );

  const data = {
    labels: errorTypes,
    datasets: [
      {
        data: dataValues,
        backgroundColor: ['#000', '#069A72', '#DBBE00', '#E9EAEB'],
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
        enabled: true,
        displayColors: false,
        callbacks: {
          label: (context: TooltipItem<'doughnut'>) => {
            const label = context.label || '';
            const value = context.raw || 0;
            return `${label}: ${value}`;
          },
        },
      },
    },
    cutout: '0%',
    responsive: true,
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <h2>Response code breakdwon</h2>
      </div>
      <div className={styles.wrapperContainer}>
        <div className={styles.doughnut}>
          <Doughnut data={data} options={options} />
        </div>
        <div className={styles.container}>
          <div>
            <p>Total</p>
            <span className={styles.total}>{total}</span>
          </div>
          <div className={styles.mapWrapper}>
            {dataValues.map((value, index) => (
              <>
                <span className={styles.errorType}>{errorTypes[index]}</span>
                <div className={styles.statsContainer} key={index}>
                  <div
                    className={`${styles.cube} ${styles[`cube${index + 1}`]}`}
                  ></div>
                  <span className={styles.stats}>
                    <span className={styles.value}>{value}</span> (
                    {percentages[index]})
                  </span>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieChartBox;
