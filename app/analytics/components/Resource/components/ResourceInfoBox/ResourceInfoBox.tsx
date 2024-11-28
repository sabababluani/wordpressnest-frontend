import styles from './ResourceInfoBox.module.scss';
import HalfCutChart from './components/HalfCutChart/HalfCutChart';

interface ResourceInfoBoxProps {
  title: string;
  used: number;
  full: number;
}

const ResourceInfoBox: React.FC<ResourceInfoBoxProps> = ({
  title,
  used,
  full,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <span className={styles.visits}>{title}</span>
        <div className={styles.textContent}>
          <div className={styles.textContainer}>
            <div className={styles.redCircle}></div>
            <span>Used</span>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.grayCircle}></div>
            <span>Avaliable</span>
          </div>
        </div>
      </div>
      <div className={styles.chartContainer}>
        <HalfCutChart used={used} full={full} />
      </div>
    </div>
  );
};

export default ResourceInfoBox;
