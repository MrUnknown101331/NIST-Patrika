import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {SvgIcon} from "@mui/material";
import styles from "./SideBar.module.css"

function SideBar() {
    return (
        <div className={styles.sideBar}>
            <SvgIcon className="Test" component={AccountCircleIcon} inheritViewBox/>
        </div>
    );
}

export default SideBar