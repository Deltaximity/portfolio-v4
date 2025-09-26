"use client"

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { navLinks } from '@/components/navLinks';
import { Menu, X } from 'lucide-react';
import { motion } from 'motion/react';

export default function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [isMenuOpen]);

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
            <button className='menu-button' onClick={toggleMenu}>
                {isMenuOpen ? <X size={30} /> : <Menu size={30} /> }
            </button>
            <div className={`links ${isMenuOpen ? "open h3" : ""}`}>
                {navLinks.map((item) => (
                    <Link key={item.href} href={item.href} onClick={isMenuOpen ? toggleMenu : () => {}} className={`${pathname === item.href || (item.href !== '/' && pathname.includes(item.href)) ? 'active' : ''} ${!isMenuOpen && item.href === '/contact' ? 'secondary-button' : ''}`}>{item.label}</Link>
                ))}
            </div>
            {isMenuOpen && (
                <motion.div
                    className="menu-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={toggleMenu}
                ></motion.div>
            )}
        </motion.nav>
    )
}