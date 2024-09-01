import styles from './NavPanel.module.css'

function NavPanel() {
    return (
        <nav className={styles.navLine}>
            <a href="#">Home</a>
            <a href="#">Briefs</a>
            <a href="#">Latest</a>
            <a href="#">Top News</a>
            <a href="#">E-Magazine</a>
            <a href="#">About us</a>
        </nav>
    );
}

export default NavPanel