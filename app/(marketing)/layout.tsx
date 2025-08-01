import { ReactNode } from 'react';

export const metadata = {
    title: 'Next.js Page Routing & Rendering',
    description: 'Learn how to route to different pages.',
};

export default function MarketingLayout({ children }: {children: ReactNode}) {
    return <main>{children}</main>;
}