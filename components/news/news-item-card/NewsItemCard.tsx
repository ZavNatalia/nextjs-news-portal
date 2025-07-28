import { INewsItem } from '../../../interfaces/INewsItem';
import styles from './NewsItemCard.module.scss';
import Image from 'next/image'
import Link from 'next/link';

function NewsItemCard({item}: {item: INewsItem}) {
    const {title, date, slug, description, image} = item;
    return (
        <li className={styles.card}>
            <Link href={`/news/${slug}`}>
                <div className={styles.header}>
                    <h3>{title}</h3>
                    <span>{date}</span>
                </div>
                <Image src={image}
                       style={{
                           borderRadius: '16px',
                           objectFit: 'cover'
                       }}
                       width={400}
                       height={160}
                       title={title}
                       alt="Picture of the news"/>
                <p>{description}</p>
            </Link>
        </li>
    )
}

export default NewsItemCard;