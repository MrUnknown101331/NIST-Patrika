import styles from './NavPanel.module.css'

function NavPanel(props: { activeHash: string; }) {

    return (
        <nav className={styles.navLine}>
            <a href="#home" className={props.activeHash === '#home' ? styles.selected : ""}>Home</a>
            <a href="#latestNews" className={props.activeHash === '#latestNews' ? styles.selected : ""}>Latest Issues</a>
            <a href="#">Club Activities</a>
            <a href="#">Upcoming Events</a>
            <a href="#">Photos & Videos</a>
            <a href="#">E-Magazine</a>
            <a href="#">About us</a>
        </nav>
    );
}

export default NavPanel