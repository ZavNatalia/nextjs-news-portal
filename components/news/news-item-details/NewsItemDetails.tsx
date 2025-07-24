import { INewsItem } from '../../../interfaces/INewsItem';
import Image from 'next/image'

import styles from './NewsItemDetails.module.scss';
import Link from 'next/link';

export default function NewsItemDetails({newsItem}: { newsItem: INewsItem }) {

    return (
        <article className={styles.article}>
            <header>
                <time dateTime={newsItem.date} className={styles.info}>{newsItem.date}</time>
                <h1 className={styles.title}>{newsItem.title}</h1>
                <span className={styles.info}>Posted by: {newsItem.author}</span>
            </header>

            <hr className={styles.divider}/>
            <Link href={`${newsItem.slug}/image`}>
                <div className={styles.imageWrapper}>
                    <Image src={newsItem.image}
                           sizes="100vw"
                           style={{
                               width: '640',
                               height: 'auto',
                               borderRadius: '24px',
                           }}
                           width={400}
                           height={250}
                           alt="Picture of the news"
                    />
                </div>
            </Link>


            <p>{newsItem.content}</p>
        </article>
    )
}