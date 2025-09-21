import React from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
    title: 'Projects',
    description: 'Explore my projects and case studies showcasing my skills. Discover how I build innovative web applications and deliver exceptional user experiences.',
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return (
      <>
        <Breadcrumbs />
        {children}
      </>
    )
}