import styles from "./Latest.module.css";
import getNews from "../assets/getNews.ts";
import NewsCard from "../NewsCard/NewsCard.tsx";
import "@fontsource/roboto/700.css";

function Latest() {
    const n = 10;
    const newsData = getNews(n);

    return (
        <section className={styles.latestContainer} id="latestNews">
            <h1 className={styles.heading}>Latest Issues</h1>
            {
                newsData.map((news, index) => (
                    <NewsCard
                        key={index}
                        imgUrl={news.imgUrl}
                        title={news.title}
                        description={news.desc}
                        link={news.url}
                        theme="dark"
                    />
                ))
            }
        </section>
    );
}


export default Latest;
