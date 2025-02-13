import Image from 'next/image';
import { RefferalsCardPropsInterface } from '../../interfaces/refferalsCard.props.interface';
import styles from './RefferalsCard.module.scss';

const RefferalsCard = (props: RefferalsCardPropsInterface) => {
  return (
    <div className={styles.container}>
      <div className={styles.headline}>
        <span className={styles.title}>{props.title}</span>
        <Image
          src="/icons/infobutton.svg"
          width={16}
          height={16}
          alt="infobutton"
        />
      </div>
      <span className={styles.funds}>{props.funds}</span>
    </div>
  );
};

export default RefferalsCard;
