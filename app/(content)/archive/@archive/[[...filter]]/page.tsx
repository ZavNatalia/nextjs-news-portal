
import Link from 'next/link';
import {
    getAvailableNewsMonths,
    getAvailableNewsYears,
    getNewsForYear,
    getNewsForYearAndMonth
} from '../../../../../lib/news';
import NewsList from '../../../../../components/news/news-list/NewsList';
import Tab from '../../../../../components/ui/tab/Tab';
import SubTab from '../../../../../components/ui/sub-tab/SubTab';

const MONTHS =  new Map([
    [1, 'Jan'],
    [2, 'Feb'],
    [3, 'Mar'],
    [4, 'Apr'],
    [5, 'May'],
    [6, 'Jun'],
    [7, 'Jul'],
    [8, 'Aug'],
    [9, 'Sep'],
    [10, 'Okt'],
    [11, 'Nov'],
    [12, 'Dec'],
]);

const getFullMonth = (month: number): string => {
    return MONTHS.get(month) as string;
}

// const MONTHS = [
//     {'1': 'Jan'},
//     {'2': 'Feb'},
//     {'3': 'Mar'},
//     {'4': 'Apr'},
//     {'5': 'May'},
//     {'6': 'Jun'},
//     {'7': 'Jul'},
//     {'8': 'Aug'},
//     {'9': 'Sep'},
//     {'10': 'Okt'},
//     {'11': 'Nov'},
//     {'12': 'Dec'},
// ];
//
// const getFullMonth = (month: number): string => {
//     console.log('Object.values', Object.values(MONTHS).values())
//     console.log('MONTHS', MONTHS)
//     return '';
// }

export default async function FilteredNewsPage({
                                                   params,
                                               }: {
    params: Promise<{ filter: string }>
}) {
    const {filter} = await params;

    const selectedYear = Number(filter?.[0]);
    const selectedMonth = Number(filter?.[1]);

    let news;
    let newsContent = <p>Select a filter to view archived news.</p>;

    const years: number[] = await getAvailableNewsYears();
    const months: number[] = await getAvailableNewsMonths(selectedYear);

    if (selectedYear && selectedMonth) {
        news = await getNewsForYearAndMonth(selectedYear, selectedMonth)
    }

    if (selectedYear && !selectedMonth) {
        news = await getNewsForYear(selectedYear);
    }

    if (news && news.length > 0) {
        newsContent = <NewsList list={news} />
    }

    if (years && selectedYear && !years.includes(+selectedYear)
        || months && selectedMonth && !months.includes(+selectedMonth)
    ) {
        throw new Error('Invalid filter.')
    }

    return (
        <>
            <header id='archive-header'>
                <nav>
                    <ul>
                        {years.map(year => <li key={year}>
                            <Link href={`/archive/${year}`}>
                                <Tab title={year.toString()} isSelected={selectedYear == year}/>
                            </Link>
                        </li>)}
                    </ul>
                    <ul>
                        {months.map(month => {
                            getFullMonth(month);
                            return (
                                <li key={month}>
                                    <Link href={`/archive/${selectedYear}/${month}`}>
                                        <SubTab title={getFullMonth(month)}
                                             isSelected={selectedMonth == month}
                                        />
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </header>
            {newsContent}
        </>

    )
}