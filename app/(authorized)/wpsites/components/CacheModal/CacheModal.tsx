
import { Radio } from "antd";
import styles from "./CacheModal.module.scss";
import Image from "next/image";
import Button from "@/app/components/Button/Button";
import { buttonbackgroundColorEnum } from "@/app/components/Button/enum/button.enum";

const CacheModal = () => {
    return (
        <div className={styles.mainWrapper} >
            <div className={styles.topContainer}>
                <span className={styles.mainCaptionStyle}>Change edge caching</span>
                <div className={styles.exitButtonWrapper}>
                    <Image
                        width={9}
                        height={9}
                        src={'icons/cross.svg'}
                        alt={'exit button'}
                    />
                </div>
            </div>
            <div className={styles.middleContainer} >
                <span className={styles.middleContainersCaption} >How do you want to set edge caching for jigaro Live?</span>
                <div className={styles.radioWrapperAndCaption} >
                    <div className={styles.radioWrapper} >
                        <Radio />
                        <span className={styles.radiosLabelStyle} >Enable</span>
                    </div>
                    <div className={styles.radioWrapper} >
                        <Radio />
                        <span className={styles.radiosLabelStyle} >Disable</span>
                    </div>
                </div>
            </div>
            <div className={styles.bottomContainer}>
                <div className={styles.buttonsWrapper}>
                    <Button
                        backgroundColor={buttonbackgroundColorEnum.grey}
                        innerContent="Back"
                    />
                    <Button
                        backgroundColor={buttonbackgroundColorEnum.black}
                        innerContent="Change edge caching"
                    />
                </div>
            </div>
        </div>
    )
}

export default CacheModal;