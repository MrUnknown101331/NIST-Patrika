import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import {SvgIcon} from "@mui/material";
import styles from "./SideBar.module.css";
import {MouseEventHandler} from "react";

function SideBar(props: {
    isVisible: boolean,
    changeSideBarVisibility: MouseEventHandler | undefined;
}) {
    return (
        <>
            {props.isVisible && (
                <div className={styles.overlay} onClick={props.changeSideBarVisibility}></div>
            )}
            <div className={`${styles.sideBar} ${props.isVisible ? styles.visible : styles.hidden}`}>
                <div className={styles.menuDiv}>
                    <SvgIcon className={styles.menuIcon} component={MenuIcon} onClick={props.changeSideBarVisibility}/>
                    <div/>
                </div>
                <SvgIcon className={styles.profilePic} component={AccountCircleIcon} sx={{width: 150, height: 150}}/>
            </div>
        </>
    );
}

export default SideBar;
