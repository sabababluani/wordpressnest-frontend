'use client';

import styles from "./LabelModal.module.scss";
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { Checkbox } from 'antd';
import Image from 'next/image';
import { useState } from 'react';

const LabelModal = () => {

    const [isCheckboxActiveFirst, setIsCheckboxActiveFirst] = useState<boolean>(true);
    const [isCheckboxActiveSecond, setIsCheckboxActiveSecond] = useState<boolean>(true);
    const [isCheckboxActiveThird, setIsCheckboxActiveThird] = useState<boolean>(true);

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.topContainer}>
                <span className={styles.mainCaptionStyle}>Label 2 sites</span>
                <div className={styles.exitButtonWrapper}>
                    <Image
                        width={9}
                        height={9}
                        src={'icons/cross.svg'}
                        alt={'exit button'}
                    />
                </div>
            </div>
            <div className={styles.middleContainer}>
                <div className={styles.wrapper} >
                    <div className={styles.checkboxAndCaptionWrapper}>
                        <div className={styles.checkboxWrapper}>
                            <Checkbox
                                checked={isCheckboxActiveFirst}
                                onChange={() => setIsCheckboxActiveFirst((prev: boolean) => !prev)}
                            />
                        </div>
                        <span className={styles.checkboxLabel}>Clear server cache</span>
                    </div>
                    <div className={styles.checkboxAndCaptionWrapper}>
                        <div className={styles.checkboxWrapper}>
                            <Checkbox
                                checked={isCheckboxActiveSecond}
                                onChange={() => setIsCheckboxActiveSecond((prev: boolean) => !prev)}
                            />
                        </div>
                        <span className={styles.checkboxLabel}>Clear CDN cache</span>
                    </div>
                    <div className={styles.checkboxAndCaptionWrapper}>
                        <div className={styles.checkboxWrapper}>
                            <Checkbox
                                checked={isCheckboxActiveThird}
                                onChange={() => setIsCheckboxActiveThird((prev: boolean) => !prev)}
                            />
                        </div>
                        <span className={styles.checkboxLabel}>Clear edge cache</span>
                    </div>
                </div>
                <button className={styles.buttonWrapper} >
                    <Image height={10} width={10} src={"icons/straightCross.svg"} alt={"plus icon"} />
                    <span className={styles.buttonsInnerContentStyle} >Add new label</span>
                </button>
                <span className={styles.manageStyle} >Manage all libels in company setting</span>
            </div>
            <div className={styles.bottomContainer}>
                <div className={styles.buttonsWrapper}>
                    <Button
                        backgroundColor={buttonbackgroundColorEnum.grey}
                        innerContent="Back"
                    />
                    <Button
                        backgroundColor={buttonbackgroundColorEnum.black}
                        innerContent="Apply labels"
                    />
                </div>
            </div>
        </div>
    );
};

export default LabelModal;
