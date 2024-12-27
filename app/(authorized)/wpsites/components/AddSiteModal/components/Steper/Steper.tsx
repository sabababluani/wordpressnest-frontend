import Button from '@/app/components/Button/Button';
import styles from './Steper.module.scss';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { SteperPropsInterface } from './interfaces/steper-props.interface';

const Steper: React.FC<SteperPropsInterface> = ({ onBack, onContinue }) => {
  return (
    <div className={styles.footer}>
      <Button
        innerContent="Back"
        backgroundColor={buttonbackgroundColorEnum.white}
        onClick={onBack}
      />
      <Button
        innerContent="Continue"
        backgroundColor={buttonbackgroundColorEnum.black}
        onClick={onContinue}
      />
    </div>
  );
};

export default Steper;
