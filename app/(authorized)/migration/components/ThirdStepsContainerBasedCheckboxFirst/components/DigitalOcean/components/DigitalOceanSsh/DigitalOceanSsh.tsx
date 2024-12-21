
import InputAndLabel from "../InputAndLabel/InputAndLabel";
import styles from "./DigitalOceanSsh.module.scss";

const DigitalOceanSsh = () => {
    return (
        <div className={styles.mainWrapper} >
            <InputAndLabel
                firstColumnLabel={'Server address'}
                secondColumnLabel={'Port'} 
                firstColumnActive
                secondColumnActive />
            <InputAndLabel
                firstColumnLabel={'SSH Usernames'}
                secondColumnLabel={'SSH Password'} 
                firstColumnActive
                secondColumnActive />
            <InputAndLabel
                firstColumnLabel={'SSH Usernames'}
                strechedInput
                firstColumnActive />
        </div>
    )
}

export default DigitalOceanSsh;