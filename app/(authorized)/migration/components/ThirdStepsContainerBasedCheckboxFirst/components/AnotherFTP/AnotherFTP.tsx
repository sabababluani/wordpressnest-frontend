import React, { useState } from "react";
import styles from "./AnotherFTP.module.scss";

const AnotherFTP = () => {

    const [serverAddress, setServerAddress] = useState<string>("");
    const [port, setPort] = useState<string>("");
    const [sftpUsername, setSftpUsername] = useState<string>("");
    const [sftpPassword, setSftpPassword] = useState<string>("");
    const [wordpressSitePath, setWordpressSitePath] = useState<string>("");

    const handleServerAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setServerAddress(e.target.value);
    };

    const handlePortChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPort(e.target.value);
    };

    const handleSftpUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSftpUsername(e.target.value);
    };

    const handleSftpPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSftpPassword(e.target.value);
    };

    const handleWordpressSitePathChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setWordpressSitePath(e.target.value);
    };

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.hostingAndpasswordWrapper}>
                <div className={styles.serverWrapper}>
                    <span className={styles.inputLabel}>Server address</span>
                    <input
                        type="text"
                        value={serverAddress}
                        onChange={handleServerAddressChange}
                        className={styles.serverInputStyle}
                    />
                </div>
                <div className={styles.portWrapper}>
                    <span className={styles.inputLabel}>Port</span>
                    <input
                        type="text"
                        value={port}
                        onChange={handlePortChange}
                        className={styles.portInputStyle}
                    />
                </div>
            </div>
            <div className={styles.hostingAndpasswordWrapper}>
                <div className={styles.serverWrapper}>
                    <span className={styles.inputLabel}>SFTP Username</span>
                    <input
                        type="text"
                        value={sftpUsername}
                        onChange={handleSftpUsernameChange}
                        className={styles.serverInputStyle}
                    />
                </div>
                <div className={styles.portWrapper}>
                    <span className={styles.inputLabel}>SFTP Password</span>
                    <input
                        type="password"
                        value={sftpPassword}
                        onChange={handleSftpPasswordChange}
                        className={styles.portInputStyle}
                    />
                </div>
            </div>
            <div className={styles.serverWrapper}>
                <span className={styles.inputLabel}>WordPress site path</span>
                <input
                    type="text"
                    value={wordpressSitePath}
                    onChange={handleWordpressSitePathChange}
                    className={styles.lastWordPressInputStyle}
                />
            </div>
        </div>
    );
};

export default AnotherFTP;
