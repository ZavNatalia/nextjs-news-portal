import Link from 'next/link';
import NavLink from './NavLink';

function MainHeader() {

    const navLinks = [
        {title: 'News', href: '/news'},
        {title: 'Archive', href: '/archive'}
    ]
    return (
        <header id='main-header'>
            <div id="logo">
                <Link href='/' title='Logo'>NextNews</Link>
            </div>
            <nav>
                <ul>
                    {navLinks.map(({title, href}) => (
                        <li key={title}>
                            <NavLink title={title} href={href}/>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader;