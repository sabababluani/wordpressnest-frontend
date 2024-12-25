import styles from './AddSiteModal.module.scss';
import Image from 'next/image';
import InstallWordpress from './components/InstallWordpress/InstallWordpress';

interface AddSiteModalProps {
  onClose: () => void;
  onStepChange: (step: number) => void;
}

const AddSiteModal: React.FC<AddSiteModalProps> = ({
  onClose,
  onStepChange,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.headline}>{'Add new WordPress site'}</span>
        <Image
          src="/icons/close-mini.svg"
          width={24}
          height={24}
          alt="close"
          className={styles.close}
          onClick={onClose}
        />
      </div>
      <div className={styles.mainContainer}>
        <InstallWordpress onStepChange={onStepChange} />
      </div>
    </div>
  );
};

export default AddSiteModal;
