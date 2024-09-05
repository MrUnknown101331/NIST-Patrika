import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import DepartureBoardIcon from '@mui/icons-material/DepartureBoard';
import Person3Icon from '@mui/icons-material/Person3';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LogoutIcon from '@mui/icons-material/Logout';
import {SvgIcon} from "@mui/material";
import styles from "./SideBar.module.css";
import {MouseEventHandler} from "react";
import Items from "./Items.tsx";

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
                <Items ItemIcon={Person3Icon} name={"Profile"}/>
                <Items ItemIcon={DepartureBoardIcon} name={"Bus Schedule"}/>
                <Items ItemIcon={ContentPasteIcon} name={"Notice"}/>
                <Items ItemIcon={LibraryBooksIcon} name={"Syllabus"}/>
                <Items ItemIcon={MenuBookIcon} name={"Notes"}/>
                <Items ItemIcon={LogoutIcon} name={"Log out"}/>
            </div>
        </>
    );
}

export default SideBar;
