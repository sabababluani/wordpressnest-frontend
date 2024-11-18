import styles from './Site.module.scss';
import Button from "@/app/components/Button/Button";
import {buttonbackgroundColorEnum} from "@/app/components/Button/enum/button.enum";

interface sitePropsInterface {
  mainCaption: string;
  description: string;
  buttonInnerContent: string;
}

const Site = (props: sitePropsInterface): JSX.Element => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.topContainer}>
        <span className={styles.mainCaptionStyle}>{props.mainCaption}</span>
        <Button
          backgroundColor={buttonbackgroundColorEnum.red}
          innerContent={props.buttonInnerContent}
        />
      </div>
      <div className={styles.bottomContainer}>
        <span className={styles.descriptionStyle}>{props.description}</span>
      </div>
    </div>
  );
};

export default Site;
