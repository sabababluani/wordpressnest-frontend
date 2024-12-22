
import InputAndLabel from "../../../DigitalOcean/components/InputAndLabel/InputAndLabel";
import styles from "./Ssh.module.scss";

const Ssh = () => {
    return (
        <div className={styles.mainWrapper} >
            <InputAndLabel
                firstColumnActive
                secondColumnActive
                firstColumnLabel={'Server address'}
                secondColumnLabel={'Port'}
            />
            <InputAndLabel
                firstColumnActive
                secondColumnActive
                firstColumnLabel={'SSH Username'}
                secondColumnLabel={'SSH Password'}
            />
            <InputAndLabel
                firstColumnActive
                firstColumnLabel={'WordPress site path'}
                strechedInput
            />
        </div>
    )
}

export default Ssh;