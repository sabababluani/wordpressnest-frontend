import { InvoicesTablePropsInterface } from '../interfaces/invoicesTable.props.interface';

export const invoiceData: InvoicesTablePropsInterface[] = [
  {
    key: 1,
    invoiceNumber: 'Invoice #007 - Dec 2025',
    serviceType: 'Wordpress',
    total: '35 USD',
    status: 'Paid',
    timing: 'Nov 25, 2024',
    period: 'Monthly',
    created: 'Nov 25, 2024',
    pdf: 'Download',
  },
  {
    key: 2,
    invoiceNumber: 'Invoice #007 - Dec 2025',
    serviceType: 'Wordpress',
    total: '35 USD',
    status: 'Unpaid',
    timing: 'Nov 26, 2024',
    period: 'Monthly',
    created: 'Nov 25, 2024',
    pdf: 'Download',
  },
  {
    key: 3,
    invoiceNumber: 'Invoice #007 - Dec 2025',
    serviceType: 'Wordpress',
    total: '35 USD',
    status: 'Paid',
    timing: 'Nov 27, 2024',
    period: 'Monthly',
    created: 'Nov 25, 2024',
    pdf: 'Download',
  },
];
