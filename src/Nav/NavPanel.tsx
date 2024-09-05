import styles from './NavPanel.module.css'

function NavPanel() {
    return (
        <nav className={styles.navLine}>
            <a href="#">Home</a>
            <a href="#">Latest Issues</a>
            <a href="#">Club Activities</a>
            <a href="#">Upcoming Events</a>
            <a href="#">Photos & Videos</a>
            <a href="#">E-Magazine</a>
            <a href="#">About us</a>
        </nav>
    );
}

export default NavPanel