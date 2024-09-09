import styles from './NavPanel.module.css'

function NavPanel(props: { isHomeVisible: boolean; }) {

    return (
        <nav className={styles.navLine}>
            <a href="#home" className={props.isHomeVisible ? styles.selected : ""}>Home</a>
            <a href="#latestNews">Latest Issues</a>
            <a href="#">Club Activities</a>
            <a href="#">Upcoming Events</a>
            <a href="#">Photos & Videos</a>
            <a href="#">E-Magazine</a>
            <a href="#">About us</a>
        </nav>
    );
}

export default NavPanel