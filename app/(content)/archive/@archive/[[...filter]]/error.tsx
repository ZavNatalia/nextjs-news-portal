'use client'
import Link from 'next/link';

interface FilterErrorProps {
    error: Error & { digest?: string }
}

export default function FilterError({error}: FilterErrorProps) {
    return <div id='error'>
        <h2>An error occurred!</h2>
        <p>{error.message}</p>
        <Link href='/archive' className='button'>Go back to archive</Link>
    </div>
}