import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from "next/link";
import Image from "next/image";
import { CircleCheck } from 'lucide-react';
import * as motion from "motion/react-client";
import { getPostMetadata } from '@/lib/posts';

interface PostMetadata {
    slug: string;
    title: string;
    date: string;
    category: string;
    description: string;
    image?: string;
    alt?: string;
}

const list = {
    // visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut", staggerChildren: 0.1 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, staggerChildren: 0.1 } },
    hidden: { opacity: 0, y: 12 },
}

const item = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    hidden: { opacity: 0, y: 12 },
}

export default async function BlogPage() {
    const posts = await getPostMetadata();

    return (
        <div>
            <motion.section 
                className="blogs-list"
                initial="hidden"
                animate="visible"
                variants={list}
            >
                <h1 className="h1">All Projects</h1>
                <ul className="cards">
                    {posts.map((post) => (
                        <motion.li key={post.slug} className="card" variants={item}>
                            <Link href={`/projects/${post.slug}`}>
                                <div className="image-container">
                                    <Image 
                                        src={post.image || "/assets/img/DSC00402.jpg"}
                                        alt={post.alt || ""}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 20vw"
                                        style={{ objectFit: "cover" }}
                                        />
                                </div>
                                <div className="content">
                                    <span className="meta fineprint">{post.category} — {post.date}</span>
                                    <h2 className="h3">{post.title}</h2>
                                    <p>{post.description}</p>
                                </div>
                            </Link>
                        </motion.li>
                    ))}
                    <motion.li className="card demo" variants={item}>
                        <CircleCheck size={50} strokeWidth={1} />
                        <p>More projects and case studies coming soon...</p>
                    </motion.li>
                </ul>
            </motion.section>
        </div>
    )
}