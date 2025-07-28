import { notFound } from 'next/navigation';
import Image from 'next/image'
import { getNewsItem } from '../../../../../lib/news';

export default async function ImagePage({params}: {params: Promise<{ slug: string }>}) {
    const {slug} = await params;
    const newsItem = await getNewsItem(slug);

    if (!newsItem) {
        notFound();
    }
    return (
        <div className='fullscreen-image'>
            <Image
                style={{ borderRadius: '46px' }}
                src={newsItem.image}
                alt={newsItem.title}
                width={680}
                height={300}/>
            <p>{newsItem.title}</p>
        </div>
    )

}