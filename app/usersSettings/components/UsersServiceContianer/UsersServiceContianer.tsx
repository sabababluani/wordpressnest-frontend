'use client';

import styles from "./UsersServiceContianer.module.scss";
import Select from "antd/es/select";
import { useState } from "react";

const { Option } = Select;

const UsersServiceContianer = (): JSX.Element => {

    const [_, setSelectState] = useState<string>('');

    const onSelectChange = (value: string) => {
        setSelectState(value);
    };

    const onButtonClick = () => {
        //
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.topContainer}>
                <span className={styles.usersCaptionStyle}>Users</span>
                <button className={styles.buttonWrapper} >
                    Invite users
                </button>
            </div>
            <div className={styles.bottomContainer}>
                <Select
                    onChange={onSelectChange}
                    className={styles.selectStyle}
                    placeholder="All service"
                    options={[
                        { value: '1', label: '1' },
                        { value: '2', label: '2' },
                        { value: '3', label: '3' },
                    ]}
                />
            </div>
        </div>
    );
};

export default UsersServiceContianer;
