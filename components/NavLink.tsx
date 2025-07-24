'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLink({title, href}: {title: string, href: string}) {
    const path = usePathname();
    return (
        <Link
            href={href}
            title={title}
            className={path.startsWith(href) ? 'active' : undefined}>
            {title}
        </Link>
    )
}