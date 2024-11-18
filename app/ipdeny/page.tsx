import Image from 'next/image';
import styles from './page.module.scss';
import {buttonbackgroundColorEnum} from "@/app/components/Button/enum/button.enum";
import Button from "@/app/components/Button/Button";
import Search from "@/app/components/Search/Search";
import IpTable from "@/app/ipdeny/components/IpTable/IpTable";

const ipdeny = (): JSX.Element => {
  const data = [
    // Sample data for IP addresses and dates (currently commented out)
    // {
    //   Ipaddresses: '127.0.0.\n128.0.0.1/32\n2001:0sxd/5420/46.4+6.5615n/00',
    //   Date: '11.26.2024/13:14',
    // },
    // {
    //   Ipaddresses: '127.0.0.\n128.0.0.1/32\n2001:0sxd/5420/46.4+6.5615n/00',
    //   Date: '11.26.2024/14:15',
    // },
    // {
    //   Ipaddresses: '127.0.0.\n128.0.0.1/32\n2001:0sxd/5420/46.4+6.5615n/00',
    //   Date: '11.26.2024/15:16',
    // },
    // {
    //   Ipaddresses: '127.0.0.\n128.0.0.1/32\n2001:0sxd/5420/46.4+6.5615n/00',
    //   Date: '11.26.2024/16:17',
    // },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h1>IP Deny</h1>
          <p>
            Dealing with a bot, spammer, or hacker constantly hitting your site?
            Depending on the severity, it could have a big impact on your visits
            and bandwidth. In such cases, you might want to try blocking them.
          </p>
        </div>
        <div>
          <Button
            backgroundColor={buttonbackgroundColorEnum.black}
            innerContent={'Add IP Addresses'}
          />
        </div>
      </div>
      {data.length === 0 ? (
        <div className={styles.blankContent}>
          <Image src={'/blank.svg'} alt={'blankIps'} width={626} height={626} />
        </div>
      ) : (
        <div className={styles.tableWrapper}>
          <Search placeholder={'Search IP'} isPadded />
          <IpTable />
        </div>
      )}
    </div>
  );
};

export default ipdeny;
