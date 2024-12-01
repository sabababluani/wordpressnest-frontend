import Button from '@/app/components/Button/Button';
import styles from './InvoicesSection.module.scss';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import InvoicesTable from '../InvoicesTable/InvoicesTable';

const InvoicesSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.headline}>Invoices</span>
      </div>
      <div className={styles.container}>
        <InvoicesTable />
      </div>
    </div>
  );
};

export default InvoicesSection;
