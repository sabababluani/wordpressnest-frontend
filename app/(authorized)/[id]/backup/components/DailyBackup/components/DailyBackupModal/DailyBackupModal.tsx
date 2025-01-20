import { useState } from 'react';
import Button from '@/app/components/Button/Button';
import styles from './DailyBackupModal.module.scss';
import Image from 'next/image';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { DailyBackupModalPropsInterface } from './interfaces/daily-backup-modal-props.interface';
import { useGetData } from '@/app/hooks/useGetData';
import { UserInterface } from '@/app/components/Navigation/interfaces/navigation.props.interface';
import { useParams } from 'next/navigation';
import ModalHeader from '@/app/components/ModalHeader/ModalHeader';

const DailyBackupModal = (props: DailyBackupModalPropsInterface) => {
  const { id } = useParams();
  const numberId = Number(id);

  const [siteInputValue, setSiteInputValue] = useState('');

  const { data: siteName } = useGetData<UserInterface>({ endpoint: 'user/me' });

  const site = siteName?.setup.find((site) => site.id === numberId)?.siteTitle;

  return (
    <div className={styles.wrapper}>
      <ModalHeader
        headline={'Confirm backup restoration'}
        onClose={props.onClose}
      />
      <div className={styles.container}>
        <div className={styles.boxesWrapper}>
          <div className={styles.box}>
            <div className={styles.boxInner}>
              <div className={styles.boxContent}>
                <span className={styles.backupName}>{site}</span>
                <span className={styles.environment}>Environment</span>
              </div>
              <div className={styles.liveContainer}>
                <div className={styles.circle}></div>
                <span className={styles.live}>Live</span>
              </div>
            </div>
          </div>
          <Image
            src="/icons/leftArrowbackup.svg"
            alt="close"
            width={36}
            height={36}
            className={styles.close}
          />
          <div className={styles.box}>
            <div className={styles.boxInner}>
              <div className={styles.boxContentDaily}>
                <span className={styles.backupName}>{props.backupType}</span>
                <span className={styles.environment}>
                  {`${props.date} "${props.backupType}"`}
                </span>
              </div>
              <div className={styles.liveContainer}>
                <div className={styles.circle}></div>
                <span className={styles.live}>Live</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <p>
            The selected backup will{' '}
            <span className={styles.bold}>replace</span> all your files,
            databases and environment settings (e.g. domains, redirects, SSL
            certificates) to your{' '}
            <span className={styles.bold}>{site} Live environment.</span>
          </p>
        </div>
        <div>
          <div className={styles.list}>
            <span className={styles.listHeading}>
              What will remain the same:
            </span>
            <div>
              <div className={styles.listWrapper}>
                <div className={styles.dot}></div>
                <span className={styles.listName}>Database password</span>
              </div>
              <div className={styles.listWrapper}>
                <div className={styles.dot}></div>
                <span>.htpasswd protection</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.list}>
            <span className={styles.listHeading}>What will change:</span>
            <div>
              <div className={styles.listWrapper}>
                <div className={styles.dot}></div>
                <span className={styles.listName}>Container ip address</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.inputContainer}>
            <p>
              Enter the text <span className={styles.bold}>{site}</span> here to
              reset your site:
            </p>
            <input
              type="text"
              onChange={(e) => setSiteInputValue(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.buttons}>
          <Button
            backgroundColor={buttonbackgroundColorEnum.grey}
            innerContent="Cancel"
            onClick={props.onClose}
          />
          <Button
            backgroundColor={buttonbackgroundColorEnum.black}
            innerContent="Restore Backup"
            onClick={props.onSuccess}
            loading={props.loading}
            setLoading={props.setLoading}
            disableButton={siteInputValue !== site}
          />
        </div>
      </div>
    </div>
  );
};

export default DailyBackupModal;
