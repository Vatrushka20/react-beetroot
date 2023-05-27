import './News.scss';
import NewsItem from "./NewsItem/NewsItem";
import {useEffect, useState} from "react";
import axios from "axios";

function News() {
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
            const getNews = async () => {
                const data = await axios('https://saurav.tech/NewsAPI/everything/cnn.json')
                    .then(res => (res.data));
                setNewsData(data.articles);
            }
            getNews();
        },
        []);

    return (
        <div className='news'>
            <h2 className='news__title'>News</h2>
            {newsData.map((item, id) => (
                <NewsItem
                    key={id}
                    author={item.author}
                    title={item.title}
                    description={item.description}
                    urlToImage={item.urlToImage}
                    url={item.url}
                />
            ))}
        </div>
    )
}

export default News;
