import styles from './ExitButton.module.scss';
import Image from 'next/image';

const ExitButton = ({ onClick }: { onClick: () => void }): JSX.Element => {
  return (
    <div className={styles.groupWrapper} onClick={onClick}>
      <Image width={9} height={9} src={'/icons/exit.svg'} alt={'exit button'} />
    </div>
  );
};

export default ExitButton;
