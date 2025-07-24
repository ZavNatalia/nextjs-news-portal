import styles from './SubTab.module.scss';
export default function SubTab({title, isSelected}: {title: string, isSelected: boolean} ) {

    return (
        <div className={`${styles.subTab} ${isSelected ? styles.selected : ''}`}>
            {title}
        </div>
    )
}