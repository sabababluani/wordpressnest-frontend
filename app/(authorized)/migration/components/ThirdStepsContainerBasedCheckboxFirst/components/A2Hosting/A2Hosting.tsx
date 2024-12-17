import React, { useState } from 'react';
import TabsAnt from '@/app/components/Tabs/Tabs';
import styles from './A2Hosting.module.scss';
import AnotherFTP from '../AnotherFTP/AnotherFTP';

const A2Hosting = () => {

    const [a2Username, setA2Username] = useState<string>('');
    const [a2Password, setA2Password] = useState<string>('');

    const handleA2UsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setA2Username(e.target.value);
    };

    const handleA2PasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setA2Password(e.target.value);
    };

    return (
        <div className={styles.mainWrapper}>
            <span className={styles.mainCaptions}>
                We will need to access your
                <span className={styles.boldOneStyle}>A2 Hosting account</span> to
                export your site data for moving it over to your Hosting account. If you
                have 2-factor authentication enabled, please disable it now for the time
                of the migration.
            </span>
            <div className={styles.hostingAndpasswordWrapper}>
                <div className={styles.serverWrapper}>
                    <span className={styles.inputLabel}>A2 Hosting username</span>
                    <input
                        type="text"
                        value={a2Username}
                        onChange={handleA2UsernameChange}
                        className={styles.serverInputStyle}
                    />
                </div>
                <div className={styles.portWrapper}>
                    <span className={styles.inputLabel}>A2 Hosting password</span>
                    <input
                        type="password"
                        value={a2Password}
                        onChange={handleA2PasswordChange}
                        className={styles.portInputStyle}
                    />
                </div>
            </div>
            <div className={styles.tabs}>
                <TabsAnt
                    withoutPadding
                    uniqueKey={'anotherFtp'}
                    withoutBorder
                    tabNames={['FTP']}
                    tabContent={[<AnotherFTP key={'anotherFtp'} />]}
                />
            </div>
        </div>
    );
};

export default A2Hosting;
