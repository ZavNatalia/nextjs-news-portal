import { INewsItem } from '../../../interfaces/INewsItem';
import NewsItemCard from '../news-item-card/NewsItemCard';
import styles from './NewsList.module.scss';

function NewsList({list}: {list: INewsItem[]}) {
    return (
        <ul className={styles.list}>
            {list.map(item => (
                <NewsItemCard item={item} key={item.title}/>
            ))}
        </ul>
    )
}
export default NewsList;