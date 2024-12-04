import InvoicesSection from './components/InvoicesSection/InvoicesSection';
import styles from './page.module.scss';

const invoices = () => {
  return (
    <div className={styles.container}>
      <InvoicesSection />
    </div>
  );
};

export default invoices;
