import Image from 'next/image';
import styles from './UploadSection.module.scss';

const UploadSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Image src={'/icons/upload.svg'} alt="Upload" width={20} height={20} />
      </div>
      <div className={styles.content}>
        <p>
          <span className={styles.click}>Click to upload</span>
          <span className={styles.drag}> or drag and drop</span>
        </p>
        <p> SVG, PNG, JPG or GIF (max. 800x400px)</p>
      </div>
    </div>
  );
};

export default UploadSection;
