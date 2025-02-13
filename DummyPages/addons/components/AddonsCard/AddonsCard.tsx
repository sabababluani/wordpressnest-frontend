import Button from '@/app/components/Button/Button';
import { AddonsCardPropsInterface } from '../../interfaces/addonscard.props.interface';
import styles from './AddonsCard.module.scss';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';

const AddonsCard = (props: AddonsCardPropsInterface) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.headline}>{props.title}</span>
        <span className={styles.text}>{props.text}</span>
      </div>
      <div className={styles.pricingWrapper}>
        <Button
          innerContent={props.price}
          backgroundColor={buttonbackgroundColorEnum.black}
        />
        <Button
          onClick={props.onClick}
          innerContent={props.add}
          backgroundColor={buttonbackgroundColorEnum.white}
        />
      </div>
    </div>
  );
};

export default AddonsCard;
