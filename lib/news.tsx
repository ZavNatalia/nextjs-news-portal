import { DUMMY_NEWS } from '../data/dummy-news';

export async function getNewsItem(slug: string) {
    const newsList = await getAllNews();
    return newsList.find((item) => item.slug === slug);
}


export async function getAllNews() {
    return DUMMY_NEWS;
}

export async function getLatestNews() {
    return DUMMY_NEWS.slice(0, 3);
}

export async function getAvailableNewsYears() {
    return DUMMY_NEWS.reduce((years: number[], news) => {
        const year = new Date(news.date).getFullYear();
        if (!years.includes(year)) {
            years.push(year);
        }
        return years;
    }, []).sort((a, b) => b - a);
}

export async function getAvailableNewsMonths(year: number) {
    return DUMMY_NEWS.reduce((months: number[], news) => {
        const newsYear = new Date(news.date).getFullYear();
        if (newsYear === +year) {
            const month = new Date(news.date).getMonth();
            if (!months.includes(month)) {
                months.push(month + 1);
            }
        }
        return months;
    }, []).sort((a, b) => b - a);
}

export async function getNewsForYear(year: number) {
    return DUMMY_NEWS.filter(
        (news) => new Date(news.date).getFullYear() === +year
    );
}

export async function getNewsForYearAndMonth(year: number, month: number) {
    return DUMMY_NEWS.filter((news) => {
        const newsYear = new Date(news.date).getFullYear();
        const newsMonth = new Date(news.date).getMonth() + 1;
        return newsYear === +year && newsMonth === +month;
    });
}