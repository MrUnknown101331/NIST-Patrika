import styles from "./Home.module.css";
import getNews from "../assets/getNews.ts";
import NewsCard from "../NewsCard/NewsCard.tsx";

function Home() {
    const n = 10;
    const newsData = getNews(n);

    return (
        <div className={styles.home}>
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
        </div>
    );
}

export default Home;
