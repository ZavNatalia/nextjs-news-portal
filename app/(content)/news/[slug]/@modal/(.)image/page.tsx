
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Modal from '../../../../../../components/ui/Modal';
import { getNewsItem } from '../../../../../../lib/news';

export default async function InterceptedImagePage({params}) {
    const {slug} = await params;
    const newsItem = await getNewsItem(slug);

    if (!newsItem) {
        notFound();
    }
    return (
        <Modal>
            <div className='fullscreen-image'>
                <Image
                    style={{borderRadius: '46px'}}
                    src={newsItem.image}
                    alt={newsItem.title}
                    width={680}
                    height={300}/>
            </div>
        </Modal>
)

}