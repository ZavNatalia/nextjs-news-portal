'use client'
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

export default function Modal({children}: {children: ReactNode}) {
    const router = useRouter();
    return (
        <div className='modal-backdrop' onClick={router.back}>
            <dialog className='modal' open>
                {children}
            </dialog>
        </div>
    )
}