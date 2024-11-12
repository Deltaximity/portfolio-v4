"use client"

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { navLinks } from '@/components/navLinks';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <motion.nav
            aria-label="main-navigation"
            initial={{ opacity: 0.1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: .3 }}
            >
            <div>
                <Link href="/">
                    <Image 
                        src="/assets/img/Logotype.png"
                        alt="Logo"
                        width={250}
                        height={0}
                        style={{objectFit: 'contain', height: '100%'}}
                    />
                </Link>
            </div>
            <div className='links'>
                {navLinks.map((item) => (
                    <Link key={item.href} href={item.href} className={`${pathname === item.href || (item.href !== '/' && pathname.includes(item.href)) ? 'active' : ''} ${item.href === '/contact' ? 'secondary-button' : ''}`}>{item.label}</Link>
                ))}
            </div>
        </motion.nav>
    )
}