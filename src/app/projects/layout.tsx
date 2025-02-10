import React from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return (
      <>
        <Breadcrumbs />
        {children}
      </>
    )
}