import image from '../assets/PatrikaLogo.png'
import styles from "./Login.module.css"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {SvgIcon} from "@mui/material";
import {MouseEventHandler, useState} from "react";

function Login(props: { isVisible: boolean, changeLoginVisibility: MouseEventHandler }) {
    const [isPassVisible, setIsPassVisible] = useState(false);

    const changePassVisible = () => {
        setIsPassVisible(visibility => !visibility)
    }

    return (
        <>
            {props.isVisible && (
                <div className={styles.overlay} onClick={props.changeLoginVisibility}></div>
            )}
            <div className={`${styles.loginCard} ${props.isVisible ? styles.visible : styles.hidden}`}>
                <h1 className={styles.title}>Welcome</h1>
                <img src={image} alt="Patrika Logo" className={styles.logo}/>
                <input className={styles.id} type="text" placeholder="UserID"/>
                <div className={styles.pass}>
                    <input className={styles.passInp} type={isPassVisible ? "text" : "password"}
                           placeholder="Password"/>
                    <SvgIcon className={styles.visibleIcon}
                             component={isPassVisible ? VisibilityOffIcon : VisibilityIcon}
                             onClick={changePassVisible}/>
                </div>
                <button className={styles.loginButton}>LOGIN</button>
                <p className={styles.lastText}>Don't have an account? <a href="#" className={styles.Signup}>Sign Up</a>
                </p>
            </div>
        </>
    )
}

export default Login