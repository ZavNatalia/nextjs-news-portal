import Link from 'next/link';

export default function NotFound() {
    return (
        <div id='error'>
            <h2>Not found!</h2>
            <p>The requested resource could not be found.</p>
            <Link href='/' className='button'>Go to main page</Link>
        </div>
    )
}