import styles from './Tab.module.scss';
export default function Tab({title, isSelected}: {title: string, isSelected: boolean} ) {

    return (
        <div className={`${styles.tab} ${isSelected ? styles.selected : ''}`}>
           {title}
        </div>
    )
}