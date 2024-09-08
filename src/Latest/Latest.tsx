import styles from "./Latest.module.css";
import getNews from "../assets/getNews.ts";
import NewsCard from "../NewsCard/NewsCard.tsx";

function Latest() {
    const n = 12;
    const newsData = getNews(n);

    return (
        <section className={styles.home} id="latestNews">
            {
                newsData.map((news, index) => (
                <NewsCard
                    key={index}
                    imgUrl={news.imgUrl}
                    title={news.title}
                    description={news.desc}
                    link={news.url}
                />
            ))
            }
        </section>
    );
}

export default Latest;
