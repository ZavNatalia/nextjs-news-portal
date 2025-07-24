import { getAllNews } from '../../../lib/news';
import NewsList from '../../../components/news/news-list/NewsList';

export default async function NewsPage() {
    const list = await getAllNews();

    if (!list) {
        return (<div>No news</div>)
    }
    return (
        <NewsList list={list}/>
    );
}

