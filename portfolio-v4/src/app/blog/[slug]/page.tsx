"use client"

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import blogData from '../../../data/blogData.json';
import { SaveOff, LoaderCircle } from 'lucide-react';

export default function BlogPostPage() {
    const { slug } = useParams();
    if (!slug) return <p className='info-message'><LoaderCircle size={36} />Loading...</p>;

    const blogPost = blogData.find((post) => post.slug === slug);
    if (!blogPost) return (
        <p className='info-message h2'>
            <motion.span 
                initial={{ opacity: 1 }}
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 1, repeat: Infinity, ease: [1, 0, 0, 1] }}
            >
                <SaveOff size={36} />
            </motion.span>
            Blog post not found
        </p>
    );

    return (
        <>
            <header className='blog-header'>
                <motion.div
                    className="mask"
                    initial={{ y: 0 }}
                    animate={{ y: '100%' }}
                    transition={{ duration: .8, ease: [0.8, 0, 0.2, 1] }}
                ></motion.div>
                <motion.div
                    initial={{ opacity: 0, y: '-100%' }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .8, ease: [0.8, 0, 0.2, 1] }}
                >
                    <h1 className='h1'>{blogPost.title}</h1>
                </motion.div>
            </header>
            <motion.article
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: .3, delay: .4 }}
            >
                <h2 className='h2'>First heading of the article</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nesciunt quam eaque natus et laboriosam, quidem unde amet nostrum vitae, voluptatum doloremque explicabo. Voluptatum, accusantium itaque assumenda consequuntur illo, incidunt labore sequi iure magnam mollitia repudiandae veniam sit eveniet, nemo aliquid consectetur hic fugiat placeat velit! Ratione assumenda doloremque non.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nesciunt quam eaque natus et laboriosam, quidem unde amet nostrum vitae, voluptatum doloremque explicabo. Voluptatum, accusantium itaque assumenda consequuntur illo, incidunt labore sequi iure magnam mollitia repudiandae veniam sit eveniet, nemo aliquid consectetur hic fugiat placeat velit! Ratione assumenda doloremque non.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nesciunt quam eaque natus et laboriosam, quidem unde amet nostrum vitae, voluptatum doloremque explicabo. Voluptatum, accusantium itaque assumenda consequuntur illo, incidunt labore sequi iure magnam mollitia repudiandae veniam sit eveniet, nemo aliquid consectetur hic fugiat placeat velit! Ratione assumenda doloremque non.</p>
            </motion.article>
        </>
    );
}