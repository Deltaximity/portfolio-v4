import React from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
    return (
      <>
        <Breadcrumbs />
        {children}
      </>
    )
}