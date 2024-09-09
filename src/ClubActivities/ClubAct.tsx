import styles from "./ClubAct.module.css";
import getNews from "../assets/getNews.ts";
import NewsCard from "../NewsCard/NewsCard.tsx";
import "@fontsource/roboto/700.css";

function ClubAct() {
    const n = 15;
    const newsData = getNews(n);

    return (
        <section className={styles.clubActivities} id="clubAct">
            <h1 className={styles.heading}>Club Activities</h1>
            {
                newsData.map((news, index) => (
                    <NewsCard
                        key={index}
                        imgUrl={news.imgUrl}
                        title={news.title}
                        description={news.desc}
                        link={news.url}
                        theme="light"
                    />
                ))
            }
        </section>
    );
}

export default ClubAct;
