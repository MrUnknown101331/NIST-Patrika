import styles from './Top.module.css'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import {SvgIcon} from "@mui/material";
import {MouseEventHandler} from 'react';

function Top(props: {
    isVisible: boolean,
    changeSideBarVisibility: MouseEventHandler,
    changeLoginVisibility: MouseEventHandler
}) {
    return (
        <header className={styles.topDiv}>
            {!props.isVisible &&
                <SvgIcon className={styles.menuIcon} component={MenuIcon} onClick={props.changeSideBarVisibility}
                         inheritViewBox/>}
            {props.isVisible && <div/>}
            <div className={styles.rightDiv}>
                <div className={styles.searchDiv}>
                    <SvgIcon className={styles.searchIcon} component={SearchIcon} inheritViewBox/>
                    <input className={styles.searchBar} type="text" placeholder="Search..."/>
                </div>
                <button className={styles.loginButton} onClick={props.changeLoginVisibility}>Login / SignUp</button>
            </div>
        </header>
    );
}

export default Top