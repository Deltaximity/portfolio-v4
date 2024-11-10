"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from 'framer-motion';

export default function Breadcrumbs() {
    const pathname = usePathname();
    const pathSegments = pathname.split('/').filter((segment) => segment);

    const listVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delay: .2,
                staggerChildren: .1
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <nav aria-label="breadcrumbs">
            <motion.ol 
                className="fineprint"
                initial="hidden"
                animate="visible"
                variants={listVariants}
                >
                <motion.li variants={itemVariants}><Link href="/">Home</Link></motion.li>
                {pathSegments.map((segment, index) => {
                    const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathSegments.length - 1;
                    const displayName = segment.replace('-', ' ').replace(/\b\w/g, (c) => c.toUpperCase());

                    return (
                        <motion.li key={href} variants={itemVariants}>
                            {isLast ? <span>{displayName}</span> : <Link href={href}>{displayName}</Link>}
                        </motion.li>
                    )
                })}
            </motion.ol>
        </nav>
    )
}