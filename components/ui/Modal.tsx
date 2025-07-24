'use client'
import { useRouter } from 'next/navigation';

export default function Modal({children}) {
    const router = useRouter();
    return (
        <div className='modal-backdrop' onClick={router.back}>
            <dialog className='modal' open>
                {children}
            </dialog>
        </div>
    )
}