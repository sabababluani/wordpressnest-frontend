
import { DatePicker, Select } from "antd";
import styles from "./SecondChecksContainer.module.scss";
import { ChangeEvent } from "react";
import { SecondCheckPropsInterface } from "../../interface/second-check-interface";

const SecondChecksContainer = (props: SecondCheckPropsInterface) => {


    return (
        <div className={styles.mainWrapper} >
            <div className={styles.dateTimesWrapper} >
                <div className={styles.dateWrapper} >
                    <span className={styles.DateMainCaptionStyle} >Date</span>
                    <div className={styles.dateTimeStyle} >
                        <DatePicker style={{ width: '508px' }} onChange={(e: ChangeEvent<HTMLInputElement>) => props.date(e.target.value)} needConfirm />
                    </div>
                </div>
                <div className={styles.timeWrapper} >
                    <span className={styles.timeMainCaptionStyle} >Time</span>
                    <div className={styles.selectWrapper} >
                        <Select style={{ width: '508px' }} onChange={props.time} value={'10:00 AM - 11:00 AM'}>
                            <Select.Option value="10:11">10:00 AM - 11:00 AM</Select.Option>
                            <Select.Option value="10:11">10:00 AM - 11:00 AM</Select.Option>
                            <Select.Option value="10:11">10:00 AM - 11:00 AM</Select.Option>
                            <Select.Option value="10:11">10:00 AM - 11:00 AM</Select.Option>
                            <Select.Option value="10:11">10:00 AM - 11:00 AM</Select.Option>
                        </Select>
                    </div>
                </div>
                <div className={styles.timeZoneWrapper} >
                    <span className={styles.timeZoneMainCaptionStyle} >Time zone for delivery</span>
                    <div className={styles.timeZoneSelectWrapper} >
                        <Select style={{ width: '508px' }} onChange={props.timezone} value={'Pick a city in same time zone'}>
                            <Select.Option value="Tbilisi">Tbilisi</Select.Option>
                            <Select.Option value="Tbilisi">Tbilisi</Select.Option>
                            <Select.Option value="Tbilisi">Tbilisi</Select.Option>
                            <Select.Option value="Tbilisi">Tbilisi</Select.Option>
                            <Select.Option value="Tbilisi">Tbilisi</Select.Option>
                        </Select>
                    </div>
                </div>
            </div>
            <span className={styles.descriptionStyle} >We offer unlimited free migrations from all hosting providers including: A2 Hosting, Bluehost, Cloudways, DreamHost, Flywheel, GoDaddy, HostGator, Pagely, Pantheon, SiteGround, tsoHost, WP Engine, or WPX Hosting.</span>
        </div>
    )
}

export default SecondChecksContainer;