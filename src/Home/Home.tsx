import styles from "./Home.module.css";
import getNews from "../assets/getNews.ts";
import NewsCard from "../NewsCard/NewsCard.tsx";
import {forwardRef} from "react";

// Add both props and ref to the function signature
const Home = forwardRef((_props, ref) => {
    const n = 10;
    const newsData = getNews(n);

    return (
        <section className={styles.home} id="home" ref={ref}>
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
});

export default Home;
