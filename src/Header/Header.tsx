import style from './Header.module.css'

function Header() {

    const dayKey = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthKey = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const date = monthKey[currentDate.getMonth()];
    const day = dayKey[currentDate.getDay()];

    const formattedDate = `${day}, ${month} ${date}, ${year}`;

    return (
        <div className={style.container}>
            <img className={style.menuIcon} src="src/assets/menu.png" alt="menu icon"/>
            <h1 className={style.title}>Patrika</h1>
            <h3 className={style.date}>{formattedDate}</h3>
        </div>
    )
}

export default Header;