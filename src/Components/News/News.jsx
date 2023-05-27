import './News.scss';
import NewsItem from "./NewsItem/NewsItem";
import User from "../../user.json"

function News() {
    return (
        <div className='news'>
            <h2 className='news__title'>News</h2>
            {User.news.map(news => (
                <NewsItem
                title={news.title}
                date={news.date}
                info={news.info}
                />
            ))}
        </div>
    )
}

export default News;