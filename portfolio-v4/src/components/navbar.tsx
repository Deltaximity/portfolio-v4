"use client"

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { navLinks } from '@/components/navLinks';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav>
            <div>
                <Link href="/">
                    <Image 
                        src="/assets/img/Logotype.png"
                        alt="Logo"
                        width={200}
                        height={0}
                        style={{objectFit: 'contain', height: '100%', width: 'auto'}}
                    />
                </Link>
            </div>
            <div className='links'>
                {navLinks.map((item) => (
                    <Link key={item.href} href={item.href} className={`${pathname === item.href ? 'active' : ''} ${item.href === '/contact' ? 'secondary-button' : ''}`}>{item.label}</Link>
                ))}
            </div>
        </nav>
    )
}