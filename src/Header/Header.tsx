import style from './Header.module.css'
import image from '../assets/PatrikaLogo.png'

function Header() {

    const dayKey = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthKey = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = monthKey[currentDate.getMonth()];
    const date = String(currentDate.getDate()).padStart(2, '0')
    const day = dayKey[currentDate.getDay()];

    const formattedDate = `${day}, ${date} ${month}, ${year}`;

    return (
        <div className={style.container}>
            <img className={style.menuIcon} src={image} alt="Patrika icon"/>
            <h1 className={style.title}>NIST Patrika</h1>
            <h3 className={style.date}>{formattedDate}</h3>
        </div>
    )
}

export default Header;