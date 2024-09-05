import styles from './Top.module.css'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import {SvgIcon} from "@mui/material";

function Top() {
    return (
        <header className={styles.topDiv}>
            <SvgIcon className={styles.menuIcon} component={MenuIcon} inheritViewBox/>
            <div className={styles.rightDiv}>
                <div className={styles.searchDiv}>
                    <SvgIcon className={styles.searchIcon} component={SearchIcon} inheritViewBox/>
                    <input className={styles.searchBar} type="text" placeholder="Search..."/>
                </div>
                <button className={styles.loginButton}>Login / SignUp</button>
            </div>
        </header>
    );
}

export default Top