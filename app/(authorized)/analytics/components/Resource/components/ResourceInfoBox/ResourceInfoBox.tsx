import styles from './ResourceInfoBox.module.scss';
import HalfCutChart from './components/HalfCutChart/HalfCutChart';
import { ResourceInfoBoxPropsInterface } from './interfaces/resource-info-box-props.interface';

const ResourceInfoBox = (props: ResourceInfoBoxPropsInterface) => {
  const getColor = (percentage: number) => {
    if (percentage <= 50) return '#52C41A';
    if (percentage <= 75) return '#FAAD14';
    return '#FF4D4F';
  };

  const percentage = (props.used / props.full) * 100;
  const usedColor = getColor(percentage);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <span className={styles.visits}>{props.title}</span>
        <div className={styles.textContent}>
          <div className={styles.textContainer}>
            <div
              className={styles.redCircle}
              style={{ backgroundColor: usedColor }}
            ></div>
            <span>Used</span>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.grayCircle}></div>
            <span>Free</span>
          </div>
        </div>
      </div>
      <div className={styles.chartContainer}>
        <HalfCutChart used={props.used} full={props.full} />
      </div>
    </div>
  );
};

export default ResourceInfoBox;
