'use client';

import Button from "@/app/components/Button/Button";
import styles from "./PhpModal.module.scss";
import Image from "next/image";
import { buttonbackgroundColorEnum } from "@/app/components/Button/enum/button.enum";
import { Radio, Select } from "antd";
import { KeyboardEvent, useState } from "react";

const PhpModal = () => {
    const [selectValue, setValue] = useState<string>('PHP 8.2');

    const handleChange = (value: string) => {
        setValue(value);
    };

    const closeModal = () => {
        console.log("Modal closed");
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Enter") {
            closeModal();
        }
    };

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.topContainer}>
                <span className={styles.mainCaptionStyle}>Change PHP Setting</span>
                <div
                    className={styles.exitButtonWrapper}
                    role="button"
                    tabIndex={0}
                    onClick={closeModal}
                    onKeyDown={handleKeyDown}
                    aria-label="Close modal"
                >
                    <Image
                        width={9}
                        height={9}
                        src={'/icons/cross.svg'}
                        alt={'Close modal'}
                    />
                </div>
            </div>
            <div className={styles.middleContainer}>
                <div className={styles.firstContainerWrapper}>
                    <span className={styles.middleContainersCaption}>
                        How do you want to set PHP settings for Jigaro Live?
                    </span>
                    <div className={styles.innerWrapper}>
                        <div className={styles.forCaptionWrapper}>
                            <span className={styles.innerContentsCaption}>PHP Version</span>
                            <span className={styles.innerContentsDescriptionStyle}>
                                Changing PHP versions may cause a few seconds of downtime for the WordPress backend.
                            </span>
                        </div>
                        <Select
                            value={selectValue}
                            style={{ width: 218 }}
                            onChange={handleChange}
                            options={[
                                { value: 'PHP 8.2', label: 'PHP 8.2' },
                                { value: 'PHP 8.1', label: 'PHP 8.1' },
                                { value: 'PHP 8.0', label: 'PHP 8.0' },
                                { value: 'PHP 7.4', label: 'PHP 7.4' },
                            ]}
                        />
                    </div>
                </div>
                <div className={styles.secondContainerWrapper}>
                    <div className={styles.forCaptionWrapper}>
                        <span className={styles.innerContentsCaption}>Automatic PHP updates</span>
                        <span className={styles.innerContentsDescriptionStyle}>
                            When enabled, if this environment uses a PHP version that reaches its end of life, we will automatically upgrade to the last supported PHP version.
                        </span>
                    </div>
                    <div className={styles.radioWrapper}>
                        <div className={styles.radioAndCaptionWrapper}>
                            <Radio />
                            <span className={styles.radioLabelStyle}>Enable (recommended)</span>
                        </div>
                        <div className={styles.radioAndCaptionWrapper}>
                            <Radio />
                            <span className={styles.radioLabelStyle}>Disable</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.bottomContainer}>
                <div className={styles.buttonsWrapper}>
                    <Button
                        backgroundColor={buttonbackgroundColorEnum.grey}
                        innerContent="Back"
                        onClick={closeModal}
                    />
                    <Button
                        backgroundColor={buttonbackgroundColorEnum.black}
                        innerContent="Change PHP Version"
                        onClick={() => console.log(`PHP Version Changed to: ${selectValue}`)}
                    />
                </div>
            </div>
        </div>
    );
};

export default PhpModal;
