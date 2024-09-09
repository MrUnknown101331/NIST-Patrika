import styles from "./NewsCard.module.css";
import lightStyle from './LightCard.module.css'
import darkStyle from './DarkCard.module.css'

function NewsCard(props: { imgUrl: string, title: string, description: string, link: string, theme: string }) {
    const colorStyle = props.theme === 'dark' ? darkStyle : lightStyle
    return (
        <a href={props.link} target="_blank" rel="noopener noreferrer">
            <div className={`${styles.card} ${colorStyle.card}`}>
                <img alt="News Image" src={props.imgUrl} className={styles.image}/>
                <p className={`${styles.title} ${colorStyle.title}`}>{props.title}</p>
                <p className={`${styles.description} ${colorStyle.description}`}>{props.description}</p>
            </div>
        </a>
    );
}

export default NewsCard;