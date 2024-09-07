import styles from "./NewsCard.module.css";

function NewsCard(props: { imgUrl: string, title: string, description: string, link: string }) {
    return (
        <a href={props.link} target="_blank" rel="noopener noreferrer">
            <div className={styles.card}>
                <img alt="News Image" src={props.imgUrl} className={styles.image}/>
                <p className={styles.title}>{props.title}</p>
                <p className={styles.description}>{props.description}</p>
            </div>
        </a>
    );
}

export default NewsCard;