import styles from './InvoicesSection.module.scss';
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
