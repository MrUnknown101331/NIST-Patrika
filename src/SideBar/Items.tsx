import {SvgIcon} from "@mui/material";
import styles from './Items.module.css'

function Items(props: { ItemIcon: any, name: String }) {
    return (
        <div className={styles.row}>
            <SvgIcon className={styles.itemIcon} component={props.ItemIcon}/>
            <h1 className={styles.name}>{props.name}</h1>
        </div>
    );
}

export default Items