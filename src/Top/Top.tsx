import styles from './Top.module.css'

function Top() {
    return (
        <header className={styles.topDiv}>
            <img className={styles.menuIcon} src="src/assets/menu.png" alt="menu icon"/>
            <div className={styles.rightDiv}>
                <div className={styles.searchDiv}>
                    <img className={styles.searchIcon} src="src/assets/search.png" alt="search icon"/>
                    <input className={styles.searchBar} type="text" placeholder="Search..."/>
                </div>
                <button className={styles.loginButton}>Login / SignUp</button>
            </div>
        </header>
    );
}

export default Top