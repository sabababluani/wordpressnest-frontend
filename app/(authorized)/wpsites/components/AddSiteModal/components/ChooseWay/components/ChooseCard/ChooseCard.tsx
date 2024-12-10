import Image from 'next/image';
import styles from './ChooseCard.module.scss';
import { ChooseCardPropsInterface } from './interfaces/choose-card.props.interface';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { useEffect, useState } from 'react';

const ChooseCard = (props: ChooseCardPropsInterface) => {
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    setActive(props.active);
  }, [props.active]);

  return (
    <div
      className={active ? `${styles.active}` : `${styles.wrapper}`}
      onClick={props.onClick}
    >
      {!active ? (
        <Image
          src="/icons/uncheckedradiosvg.svg"
          alt="uncheckedradio"
          width={20}
          height={20}
        />
      ) : (
        <Image
          src="/icons/checkedradio.svg"
          alt="uncheckedradio"
          width={20}
          height={20}
        />
      )}
      <div className={styles.container}>
        <Image src="/wordpress.png" alt="wordpress" width={52} height={52} />
        <div
          className={
            active ? `${styles.paddedWrapper}` : `${styles.infoWrapper}`
          }
        >
          <span className={styles.title}>{props.title}</span>
          <span className={styles.info}>{props.info}</span>
        </div>
        <div className={active ? `${styles.none}` : `${styles.button}`}>
          <Button
            innerContent="Choose"
            backgroundColor={buttonbackgroundColorEnum.white}
          />
        </div>
      </div>
    </div>
  );
};

export default ChooseCard;
