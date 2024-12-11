import Steps from '@/app/components/Steps/Steps';
import styles from './LoadingModal.module.scss';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const LoadingModal = () => {
  const loadingIcon = <LoadingOutlined className={styles.customIcon} spin />;

  return (
    <div className={styles.container}>
      <Steps
        confirmation={true}
        firstHeadline={'Site options'}
        secondHeadline={'WordPress options'}
      />
      <div className={styles.info}>
        <Spin indicator={loadingIcon} />

        <span className={styles.headline}>Your site is being created...</span>
        <span className={styles.text}>
          Once its done, you can add your domain and go live with your site.
        </span>
      </div>
      <span className={styles.subtext}>
        You can close this window and navigate away
      </span>
    </div>
  );
};

export default LoadingModal;
