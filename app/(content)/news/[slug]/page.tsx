import { getAllNews, getNewsItem } from '../../../../lib/news';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import NewsItemDetails from '../../../../components/news/news-item-details/NewsItemDetails';

export async function generateStaticParams() {
    const news = await getAllNews();
    return news?.map((newsItem) => ({slug: newsItem.slug}));
}

export default async function NewsDetailPage({
                                       params,
                                   }: {
    params: Promise<{ slug: string }>
}) {
    const {slug} = await params;
    const newsItem = await getNewsItem(slug);

    if (!newsItem) {
        notFound();
    }

    return (
        <>
            <Link href='/news' className='button'>Go to news</Link>
            <NewsItemDetails newsItem={newsItem}/>
        </>

    )
}
